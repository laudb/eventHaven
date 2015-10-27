Template.selectVendors.events({
	'click .addVendor': function (e,t) {
		var v;
		if(! Session.get("key")) v = [];
		else v = Session.get("key");

		var name = $('.vendorName').html();
		var price = $('.vendorPrice').html();

		var obj = {
			objname: name,
			objprice: price
		}

		//if(_.contains(v, obj)) return;

		v.push(obj)
		Session.set('key', v);
		console.log(v);

		// Config.name.push(obj);
		// console.log(Config.name);

		// var div = document.createElement('div');
		// div.className = "well";
		// div.className = "text-center";

		// var sName = document.createElement('h3');
		// sName.className = "svtitle";
		// sName.innerHTML = name;

		// var sPrice = document.createElement('p');
		// sPrice.className = "well-text";
		// sPrice.innerHTML = price;

		// div.appendChild(sName);
		// div.appendChild(sPrice);
		// var item = $('.mainVendors');

		// item.insertBefore(div, item.lastChild);
		// document.getElementsByClassName(".mainVendors").appendChild(div);


	}
});

Template.registerHelper('Config', function () {

	var vendor = Session.get('key');

	return vendor;

	// return Config.name;	
});


// Session.set("key", [])