Template.task.created = function(){

	this.project = Projects.findOne({ _id: this.data.project_id } );

};


Template.task.events({

	"click" : function( event ){

		//$('#overlay').addClass('active');
		$('.task').removeClass( 'active' );
		$('.task').removeClass( 'active-popup' );
		$( event.target ).addClass( 'active active-popup' );

		return false;
		
	}

})