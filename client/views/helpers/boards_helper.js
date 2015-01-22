Meteor.subscribe('lists');

Template.board.helpers({

	lists: function(){

		return Lists.find();
		
	}

})