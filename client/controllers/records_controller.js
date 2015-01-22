
/**
 * Events:
 */
Template.record.events({

	"click .ui-sortable-handle" : function( event ){

		$('#overlay').addClass('active');
		$( event.target ).addClass( 'active active-popup' );

		return false;

	}

});