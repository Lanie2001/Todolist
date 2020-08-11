import { Meteor } from 'meteor/meteor';
import '../lib/collection.js';
Meteor.startup(() => {
  // code to run on server at startup
});

Meteor.publish('TheTodoPage', function () {
return listdb.find({}, {

  });

});