Template.eventDetails.events({
	"submit form": function (e,t) {
		e.preventDefault()
		t.$(".modal").modal("hide");	
		Meteor.setTimeout( function() {
			console.log('hi');
			Router.go('food', {_id: Session.get("neweventId")});
			window.location.reload();
		}, 500);
	}
});

