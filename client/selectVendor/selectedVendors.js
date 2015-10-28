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