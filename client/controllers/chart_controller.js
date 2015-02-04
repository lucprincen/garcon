/**
 * 	On render:
 */
Template.chart.rendered = function() {

	var dayWidth = 150;
	var taskHeight = 74;

	setSortable( this );
	setResize( this );

	//make all the records sortable:
	function setSortable( self ){

		self.$('.tasks-row').sortable({
			connectWith: '.tasks-row',
			grid: [ dayWidth, taskHeight ],
			start: function(e,ui){

    	  	//	parent = ui.item.parent().get(0);
    	  	//	listId = Blaze.getData(parent)._id;
    	  	//	newList = oldList = listId;
			},
			stop: function(e, ui){

				//vars:
				var _days = 0;
				var item = ui.item;
				task = Blaze.getData( item.get(0) );
				
				//set moment vars:					
				var _start = moment( task.start );
				var _end = moment( task.end );
				var _now = moment();

				//calculate the days:
				_days = Math.floor( Math.floor( ui.position.left ) / dayWidth );
				_days -= _start.diff( _now, 'days' );

				//get the new starts and ends:
				if( _days >= 0 ){
					var newStart = moment( task.start ).add( _days, 'days' );
					var newEnd = moment( task.end ).add( _days, 'days' );
				}else{
					newStart = moment( task.start ).subtract( Math.abs( _days ), 'days' );
					newEnd = moment( task.end ).subtract( Math.abs( _days ), 'days' ); 
				}

				//update the task:
				Tasks.update({ _id: task._id }, {$set: { start: newStart.toDate(), end: newEnd.toDate() } });

				//update the transformproperty 'cause lag
				var _left = _start.diff( _now, 'days' ) * dayWidth;
				jQuery( item ).css({
					"-webkit-transform":"translate("+_left+"px,0)",
					"transform":"translate("+_left+"px,0)"
				});

    	  	}
		}).disableSelection();

	}


	function setResize( self ){
		
		self.$('.task').resizable({
      		grid: [ dayWidth, taskHeight ],
      		resize: function(e, ui) {
        		
        		ui.size.height = ui.originalSize.height;
        		var item = ui.element;
    			var _days = Math.ceil( ui.size.width / dayWidth );
    			var _string = 'dagen';

    			if( _days === 1 )
    				_string = 'dag';

    			var dayString = _days+' '+_string;

    			$( item ).find('.duration').html( dayString );

    		},
    		stop: function(e, ui){

    			var diff = ui.size.width - ui.originalSize.width;
    			var _days = diff / dayWidth;
				var item = ui.element;
				var task = Blaze.getData( item.get(0) );

    			//get the new end
				if( _days >= 0 ){
					var newEnd = moment( task.end ).add( _days, 'days' );
				}else{
					newEnd = moment( task.end ).subtract( Math.abs( _days ), 'days' ); 
				}

				//update the task:
				Tasks.update({ _id: task._id }, {$set: { end: newEnd.toDate() } });


    		}
    
    	});

	}


};
