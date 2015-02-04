Meteor.publish('lists', function() {

  return Lists.find();

});


Meteor.publish('records', function() {

  return Records.find();

});


Meteor.publish('projects', function() {

  return Projects.find();

});

Meteor.publish('tasks', function() {

  return Tasks.find();

});

Meteor.publish('tags', function(){

	return Tags.find();

})
