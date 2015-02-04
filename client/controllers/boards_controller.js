Template.body.events({

	"click #overlay" : function( event ){

		if( event.target.id == 'overlay' || event.target.id == 'close' ){

			if( $('#overlay').hasClass('active') === true ){
				$('#overlay').removeClass( 'active' );
				$('.active-popup').removeClass( 'active' );
				$('.active-popup').removeClass( 'active-popup' );
			}
		}
	}

});