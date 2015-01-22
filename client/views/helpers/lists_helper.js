Meteor.subscribe('records');

Template.list.helpers({

	records: function(){

		return Records.find({ listID: this._id }, {sort: { position:1 }});

	},

	calcTotal: function(){

		var _invoices = Records.find({ listID: this._id }, {sort: { position:1 }}).fetch();
    	var _total = 0;

    	for( var a = 0; a < _invoices.length; a++ ){

    		_total += parseFloat( _invoices[a].amount );

    	}

    	return _total;	
	}
});