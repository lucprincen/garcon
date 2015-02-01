Meteor.subscribe( 'tasksOfProject' );

Template.chart.helpers({

	dates: function(){

		var dates = [];
		var d = new Date();
	
		for( var i = 0; i < 30; i++ ){

			var date = d.setDate( d.getDate() + i );
			//dates.push( { name: date.getDay()+' - '+ ( date.getMonth() + 1 ) } );

		}
		
		return dates;

	},

	getTasks: function(){

		var tasks = Tasks.find();

		//for( var i = 0; i < tasks.length; i++ ){


		//	tasks[i].formattedStart = moment( tasks[i].start ).format('ddd, hA');

		//}

		return tasks;

	},

	users: function(){

		return [ { name: 'Luc' }, { name: 'Daan' }, { name: 'Remy' }, { name: 'Pascal'}, {name: 'Mark'} ];
	}

})