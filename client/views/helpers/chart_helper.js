Meteor.subscribe( 'tasks' );

Template.chart.helpers({

	dates: function(){

		var dates = [];
	
		for( var i = 0; i < 30; i++ ){
			
			var now = moment();
			now.add( i, 'days' );
			
			var _obj = {

				name: now.format( 'D MMM' ),
				day: now.format( 'ddd' )

			}
			
			dates.push( _obj );

		}
		
		return dates;

	},

	getTasks: function(){

		var tasks = Tasks.find();
		return tasks;

	},

	users: function(){

		return [ { name: 'Luc' }, { name: 'Daan' }, { name: 'Remy' }, { name: 'Pascal'}, {name: 'Mark'} ];
	}

});