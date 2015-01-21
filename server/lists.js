
Meteor.startup(function() {
    //AND only seed if there are no items
    if( Lists.find({}).count() == 0 ) {

      var titles = [ 'Januari', 'Februari', 'Maart', 'April', 'Mei', 'Juni', 'Juli', 'Augustus', 'September', 'Oktober', 'November', 'December' ];

      for(var i = 0; i < 12; i++) {
          Lists.insert({
            title: titles[ i ],
            position: i
        });
      }
    }

});
