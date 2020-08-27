Template.MainBody.helpers({
	pbTask(){
		if(Meteor.userId()){
			if (Session.get("filter")=="privatetask"){
			return listdb.find( {  owner: Meteor.userId()}, { privatetask: true } )
				}
				else if (Session.get("filter") == "publictask"){
					return listdb.find({publictask})
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


});