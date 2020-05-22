// a database to store new users and to-do list information
listdb = new Mongo.Collection('thetoDo');
privatedb = new Mongo.Collection('privateTask');

listdb.allow({
	insert: function(userId, doc){
		if (!userId){ // has user logged in
		return true;
		}
		else{
			return false;
		}
	},
});