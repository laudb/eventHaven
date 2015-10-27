Template.eventDetails.helpers({
	anEvent: function() {	
		var id = Session.get("eventId");
		console.log(id);
		return Events.findOne(id);
	}
});