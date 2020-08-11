// a database to store new users and to-do list information
listdb = new Mongo.Collection('thetoDo');

listdb.allow({
	insert: function(userId, doc){
			return true;
	},
	remove: function(userId, doc){
	if (userId){ // has user logged in
		return true;
		}
		else{
			return false;
		}
	},

	update: function(userId, doc){
		if (userId){
			return true;
		}
		else{
			return false;
		}
	},
});