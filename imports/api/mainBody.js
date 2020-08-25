Template.MainBody.helpers({
	pbTask(){
		if(Meteor.userId()){
			return listdb.find( { $or: [ { owner: Meteor.userId()}, { publictask: true } ] } )
		}
		return listdb.find({publictask:true});
	},
	Tpub(){
		if(this.publictask==true)
			return true;
		else 
			return false;
	},
	TcomP(){
		if(this.comp==true)
			return true;
		else	
			return false;
	}

});

Template.MainBody.events({
	'click .js-chkd'(event, instance){
		var thecheckbox =$('#Checkedit').val();
		console.log("Checked")
	},
	

});