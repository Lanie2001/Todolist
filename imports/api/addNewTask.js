Template.AddaTask.events({
	'click .js-Task'(event, instance){
		$('#taskModal').modal('show');
		// if
		// ($())
	},
	'click .form-check-input pub': function(event){
		
		console.table(event.currentTarget);
	},

	'click .form-check-input-priv': function(event){
		console.table(event.Target);
	},
	
	'click .js-saveTask'(event, instance){
		var thetasktitle =$('#taskttl').val();
		var theTask =$('#Task').val();
		console.log("Saving Title " + thetasktitle);
		console.log("Saving New Task of " + theTask);
		
			listdb.insert({
				"title": thetasktitle,
				"task": theTask,
				"owner": Meteor.userId(),
				"createdOn": new Date().getTime()
			});
	},

	'click .js-closeTaskModal'(event, instance){
		var thetasktitle = $("#taskttl").val("");
		var theTask = $("#Task").val("");
	}
});

