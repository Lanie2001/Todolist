Template.AddaTask.events({
	'click .js-Task'(event, instance){
		$('#taskModal').modal('show');
	},

	'click .js-saveTask'(event, instance){
		var theUser =$('#User').val();
		var theTask =$('#Task').val();
		console.log("Saving Username " + theUser);
		console.log("Saving New Task of " + theTask);
		
			listdb.insert({
				"user": theUser,
				"task": theTask,
				"createdOn": new Date().getTime(),
			});
	},

	'click .js-closeTaskModal'(event, instance){
		var theUser = $("#User").val("");
		var theTask = $("#Task").val("");
	}
});