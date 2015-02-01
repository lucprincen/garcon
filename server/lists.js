
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

    if( Projects.find({}).count() == 0 ){

      var projects = [ 'Bierbrouwerij Oijen', 'Indieform', 'Dotcom', 'Creatings', 'Rond'];

      for( var i = 0; i < projects.length; i++ ){

        Projects.insert({
          name: projects[ i ],
          color: Meteor.getRandomColor()
        });

      }

    }


    if( Tasks.find({}).count() === 0 ){

      var tasks = [ 'webdesign', 'webdevelopment' ];
      var projects = Projects.find().fetch();

      for( var i = 0; i < projects.length; i++ ){

        var pid = projects[i]._id;

        for( var a = 0; a < tasks.length; a++ ){

          Tasks.insert({

            name: tasks[a],
            project_id: pid,
            start: new Date( 2015, 1, i ),
            end: new Date( 2015, 1, i + 4 )

          })

        }


      }


    }

});


Meteor.getRandomColor = function() {
    var letters = '0123456789ABCDEF'.split('');
    var color = '#';
    
    for (var i = 0; i < 6; i++ ) {
        color += letters[ Math.floor(Math.random() * 16) ];
    }

    return color;
}
