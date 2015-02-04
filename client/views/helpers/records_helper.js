Meteor.subscribe( 'tasks' );

Template.popupRecord.helpers({

	tags: function(){

//		console.log( Template.instance().tags );
		return Template.instance().tags;

	}

});

