Meteor.subscribe( 'tasks' );

Template.task.helpers({

	calcStyle: function(){

		var blockWidth = 150;
		var _start = moment( this.start );
		var _end = moment( this.end );
		var _now = moment();

		var _width = ( _end.diff( _start, 'days' ) ) * blockWidth;
		var _left = ( _start.diff( _now, 'days' ) ) * blockWidth;

		s = '';
		s += 'width:'+_width+'px;';
		s += '-webkit-transform:translate('+_left+'px,0);';
		s += 'transform:translate('+_left+'px,0);';

		return s;
	},

});