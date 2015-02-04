/**
 * 	On render:
 */
Template.list.rendered = function() {

	setHeight();
	setSortable( this );

	//set the heights of our lists:
	function setHeight(){
		var _h = $( window ).height() - 230;

		$('.list').css({
			height: _h+'px'
		});
	
		_h = _h - $('.list-bottom').height();
	
		$('.list .records').css({
			height: _h+'px'
		});
	}

	//make all the records sortable:
	function setSortable( self ){

		self.$('.records').sortable({
			connectWith: '.records',
			start: function(e,ui){
				item = ui.item;
    	  		parent = ui.item.parent().get(0);
    	  		listId = Blaze.getData(parent)._id;
    	  		newList = oldList = listId;
			},
			stop: function(e, ui){
				el = ui.item.get(0);
    	  		parent = ui.item.parent();
    	  		listId = Blaze.getData( parent.get(0) )._id;
	
    	  		var i = 0;
    	  		parent.find( 'li' ).each( function(){
	
    	  			var obj = Blaze.getData( $( this ).get(0) );
    	  			Records.update({_id: obj._id}, {$set: {position: i, listID: listId}})
    	  			i++;
    	  		});
	
    	  	}
		}).disableSelection();

	}

}


Template.popupRecord.created = function(){

	var _p = Tags.find();
	console.log( _p );
	
	for( var i = 0; _p.length > i; i++ ){

		_p[i].isChecked = false;

	}

	this.tags = _p;
};


/**
 * Events:
 */
Template.addRecord.events({
	
	"keypress .add-record input": function (event) {
		if (event.which === 13) {	
	    	
			var parent = $( event.target ).parent();
			var _name = parent.find( '.name' ).val();
			if( _name === undefined )
				_name = '';

			var _amount = parent.find( '.amount' ).val();
			if( _amount === undefined || _amount == '' ){
				parent.find( '.amount' ).focus();

			}else{

		  		var _position = Records.find({ listID: this._id }).count();
	
		  		parent.find( '.amount' ).val('');
		  		parent.find( '.name' ).val('').focus();
	
    			Records.insert({
    				listID: this._id,
    			  	name: _name,
    			  	amount: _amount,
    			  	created: new Date(),
    			  	position: _position
    			});
    		}
	    }
	  }

});