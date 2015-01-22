Meteor.publish('lists', function() {

  return Lists.find();

});


Meteor.publish('records', function() {

  return Records.find();

});


Meteor.publish('projects', function() {

  return Projects.find();

});