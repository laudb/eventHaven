Template.selectedVendors.helpers({
	vendors: function () {
		
		var ids = Session.get('key');

		// var vendors = Vendors.find({id:id}).fetch();
		// console.log(vendors);
		// return Vendors.find({id:id}).fetch();

		return _.map(ids, function(id) {
			return Vendors.findOne(id);
		})
	}
});


Template.selectedVendors.events({
	'click #slDone': function () {
		console.log(Session.get("eventId"));
		console.log(Session.get("key"));
		var vendorIds =  Session.get("key");
		console.log(vendorIds);

		for (i = 0; i < vendorIds.length; i++) { 
			Events.update(Session.get("eventId"),{
				$addToSet:{selectedVendors:vendorIds[i]}
			});	
		}

		Router.go('/alldone')
		
	}
});
