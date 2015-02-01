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


Meteor.publish('tasksOfProject', function() {
  // first, get the top 30 posts
  var taskCursor = Tasks.find({});

  // then extract those posts' userIds
  var projectIds = taskCursor.map(function(p) { return p.project_id });

  // then return an array containing both the posts, and their corresponding comments
  return [
    taskCursor,
    Meteor.projects.find({_id: {$in: projectIds}})
  ];
});