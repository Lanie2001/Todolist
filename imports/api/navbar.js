Template.NavBar.helpers({
    buttonchoice: function(){
        return listdb.find({privatetask: true});

    }

});

Template.NavBar.events({
	'click .js-privtasks': function(){
        console.log('Private');
        Session.set("filter", "privatetask");
	},

	'click .js-pubtasks': function(){
        console.log('Public');
        Session.set("filter", "publictask");
	}

	
});