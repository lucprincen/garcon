
/**
 * Events:
 */
Template.record.events({

	"click .ui-sortable-handle" : function( event ){

		$('#overlay').addClass('active');
		$( event.target ).addClass( 'active active-popup' );

		return false;

	},

	"click .save-popup" : function( event ){

		var _name = $( '.active-popup .record-name' ).val();
		var _price = $( '.active-popup .record-price' ).val();

		
		$('.active-popup').removeClass( 'active' );
		$('.active-popup').removeClass( 'active-popup' );
		$('#overlay').removeClass( 'active' );

	
		Records.update({ _id: this._id }, { $set: { name: _name, amount: _price } } );	
		return false;
	},

	"click .button-danger" : function( event ){

		if( confirm( "Weet je dit zeker?" ) ){

			$('.active-popup').removeClass( 'active' );
			$('.active-popup').removeClass( 'active-popup' );
			$('#overlay').removeClass( 'active' );
			Records.remove( { _id: this._id } );

			return false;
		}

	}

});