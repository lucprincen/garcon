Meteor.subscribe( 'tasks' );

Template.task.helpers({

	calcStyle: function(){

		var blockWidth = 150;
		var _start = moment( this.start );
		var _end = moment( this.end );
		var _now = moment();

		var _width = ( _end.diff( _start, 'days' ) ) * blockWidth;
		var _left = ( _start.diff( _now, 'days' ) ) * blockWidth;
		var _proj = Template.instance().project;

		s = '';
		s += 'background-color:'+_proj.color+';';
		s += 'width:'+_width+'px;';
		s += '-webkit-transform:translate('+_left+'px,0);';
		s += 'transform:translate('+_left+'px,0);';

		return s;
	},

	projectName: function(){

		return Template.instance().project.name;

	},



	duration: function(){

		var _duration = moment( this.end ).diff( moment( this.start ), 'days' );
		var _string = 'dagen';
		if( _duration === 1 )
			_string = 'dag';

		return _duration+' '+_string;

	},


	formattedStart: function(){

		return moment( this.start ).format('ddd, hA');

	}

});


Template.popupTask.helpers({

	possibleProjects: function(){
		return Projects.find();
	}

})