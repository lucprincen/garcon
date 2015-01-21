
/**
 * Events:
 */
Template.record.events({

	"click .wrapper" : function( event ){

		$('#overlay').toggleClass('active');
		$( event.target ).parent().toggleClass( 'active' );

	}

});