Template.MainBody.helpers({
	pbTask(){
		if(Meteor.userId()){
			if (Session.get("filter")=="privatetask"){
			return listdb.find( {  owner: Meteor.userId()}, { privatetask: true } )
				}
				else if (Session.get("filter") == "publictask"){
					return listdb.find({publictask: true})
				}
				else {
					return listdb.find({ $or: [ {owner: Meteor.userId()}, {privatetask:true} ] })
				}
			}
		
		return listdb.find({publictask:true});
		
	},
	Tpub(){
		if(this.publictask==true)
			return true;
		else 
			return false;
	},
});

Template.MainBody.events({
	'click .js-chkd'(event, instance){
		var thecheckbox =event.target.checked;
		
		console.log(thecheckbox);
		console.log(this._id);
		console.log(event.target.checked);


		var updateId= this._id;

		listdb.update({_id:updateId},
			{$set:{
				"Completed": thecheckbox 

		}}
	);


	},
	'click .js-delete'(event, instance){
		var myId = this._id;
if ((this.owner == undefined) || (this.owner == Meteor.userId())){
      $("#deleteId").val(myId);
      $("#confirmModal").modal("show");
    }
    else {
      alert("You don't have permission to delete that.");
	}
	
	},
	'click .js-confirm'(event, instance){
		var myId = $("#deleteId").val();
		
		$("#"+myId).fadeOut('slow',function(){
			myTasksdb.remove({_id:myId});
		});
	}

});