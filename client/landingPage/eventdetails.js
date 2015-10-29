Template.eventDetails.events({
	'click #submit': function () {
		
		Meteor.setTimeout( function() {
			console.log('hi');
			Router.go('food', {_id: Session.get("eventId")});
		}, 500);
	}
});

