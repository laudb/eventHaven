Template.eventDetails.events({
	"submit form": function (e,t) {
		e.preventDefault()
		t.$(".modal").modal("hide");	
		Meteor.setTimeout( function() {
			Router.go('food', {_id: Session.get("eventId")});
			window.location.reload();
		}, 500);
	}
});

