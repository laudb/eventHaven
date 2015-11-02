Template.eventDetails.helpers({
	anEvent: function() {	
		var id = Session.get("neweventId");
		console.log(id);

		
		return Events.findOne(id);
	}
});