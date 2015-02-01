/**
 * 	On render:
 */
Template.chart.rendered = function() {

	var dayWidth = 150;
	var taskHeight = 74;

	setSortable( this );

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

				var nPos = ui.position
				var oPos = ui.originalPosition;
				var _days = 0;
				var item = ui.item;
				task = Blaze.getData( item.get(0) );

					
				var _start = moment( task.start );
				var _end = moment( task.end );
				var _now = moment();

				_days = Math.floor( Math.floor( nPos.left ) / dayWidth );
				_days -= _start.diff( _now, 'days' );

				if( _days >= 0 ){
					var newStart = moment( task.start ).add( _days, 'days' );
					var newEnd = moment( task.end ).add( _days, 'days' );
				}else{
					newStart = moment( task.start ).subtract( Math.abs( _days ), 'days' );
					newEnd = moment( task.end ).subtract( Math.abs( _days ), 'days' ); 
				}

				Tasks.update({ _id: task._id }, {$set: { start: newStart.toDate(), end: newEnd.toDate() } });

				var _left = _start.diff( _now, 'days' ) * dayWidth;

				jQuery( item ).css({

					"-webkit-transform":"translate("+_left+"px,0)",
					"transform":"translate("+_left+"px,0)"

				});

    	  	}
		}).disableSelection();

	/*	$( ".task" ).draggable({ 
			grid: [ 150, 74 ],
			connectWith: '.tasks-row',
			stack: '.task',
			start: function( e, ui ){
				item = ui.item;
				//task = Blaze.getData( item );
				//firstStart = task.start;
				//firstEnd = task.end;
				//secondStart = firstStart;
				//secondEnd = firstEnd;
				console.log( item );
			},
			stop: function(e, ui){
				//item = ui.item;
				//task = Blaze.getData( item.get(0) );
					

			}
		});*/



	}

};


Meteor.getDayDifference = function( first, second ){

	var oneDay = 24*60*60*1000;
	var diffDays = Math.round( ( first.getTime() - second.getTime() )/( oneDay ));
	diffDays += 1;

	return diffDays;

}
