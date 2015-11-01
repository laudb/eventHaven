var totalAmt=0;
Template.selectVendors.events({
	'click .addVendor': function (e,t) {
		var v;
		if(! Session.get("key")) v = [];
		else v = Session.get("key");

		var id = e.currentTarget.id;
		
		var eventId = Session.get("eventId");
		// console.log(eventId);
		if (Vendors.findOne({_id: id}).category == "food"){
			var price = Vendors.findOne({_id:id}).price;
			var population = parseInt(Events.findOne({_id:eventId}).population);

			console.log(price);
			console.log(population);
			var foodPrice = price * population;

			console.log(foodPrice);

			totalAmt+= foodPrice;
			console.log(totalAmt);
			$(".actualAmt").html(totalAmt);

		};

		//if(_.contains(v, obj)) return;    ---this was commented earlier

		v.push(id)
		Session.set('key', v);
		console.log(id);

		
	}
});

Template.registerHelper('Config', function () {

	// var vendor = Session.get('key');

	// return vendor;

	// return Config.name;	
});


// Session.set("key", [])