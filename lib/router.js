Router.configure({
  loadingTemplate: 'loading',
  waitOn: function() { return Meteor.subscribe('lists'); }

});


Router.route('/', function () {
  this.render('board');
});

Router.route('/projecten', function () {
  this.render('projects');
});

Router.route('/planning', function(){
	this.render('chart');
})