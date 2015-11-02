/*
router style, initial configuration template
layoutTemplate will map to a layout template
notFoundTemplate will use a template named 404 or a name of your choice if you chose to change it
loadingTemplate will use a template with loading or a template

*/
Router.configure({
	// layoutTemplate: 'layout',
	notFoundTemplate: '404',
	loadingTemplate: 'loading'
});

// ============================================== routes ========================================================================

//  route one basic
Router.route ('/', function(){
	this.render('index');
	name: 'index'
});
Router.route ('/user-vendor', function(){
	this.render('index');
	name: 'index'													
});
// Router.route ('/select-vendors', function(){
// 	this.render('selectVendors');
// 	name: 'selectVendors'
// });

// =============================================== Vendors ===============================================
// Router.route('/food', function () {      
// 	this.render("food")              
// }, {
// 	name: 'food',                     
// 	layoutTemplate: "selectVendors",
// 	data:function(){
// 		return{
// 			foodVendor: Vendors.find().fetch();
// 		}
// 	}
// });

Router.route('/food/:_id', function () {
	this.render("food");
},{
	name: "food",
	layoutTemplate: "selectVendors",
	data:function () {
		return{
			foodVendor: Vendors.find({category:"food"}).fetch()
		}
	}
});
Router.route('/food', function () {
	this.render("food");
},{
	name: "foods",
	layoutTemplate: "selectVendors",
	data:function () {
		return{
			foodVendor: Vendors.find({category:"food"}).fetch()
		}
	}
});

Router.route('/alldone', function () {
	this.render("alldone");
},{
	name: "allDone",
	data:function () {
		return{
			// anEvent: Events.findOne(Session.get('eventId'));
		}
	}
});

Router.route('/photography', function () {
	this.render("photography")
}, {
	name: 'photography',                     
	layoutTemplate: "selectVendors",
	data:function () {
		return{
			Vendor: Vendors.find({category:"photography"}).fetch()
		}
	}
});

Router.route('/decoration', function () {      
	this.render("decoration")              
}, {
	name: 'decoration',                     
	layoutTemplate: "selectVendors"
});

Router.route('/drinks', function () {      
	this.render("drinks")              
}, {
	name: 'drinks',                     
	layoutTemplate: "selectVendors",
	data:function () {
		return{
			Vendor: Vendors.find({category:"drinks"}).fetch()
		}
	}
});

Router.route('/cakes', function () {      
	this.render("cakes")              
}, {
	name: 'cakes',                     
	layoutTemplate: "selectVendors"
});

Router.route('/graphic-design', function () {
	this.render("graphicDesign")              
}, {
	name: 'graphicDesign',                     
	layoutTemplate: "selectVendors"
});

Router.route('/live-band', function () {      
	this.render("liveBand")              
}, {
	name: 'liveBand',                     
	layoutTemplate: "selectVendors"
});

Router.route('/rentals', function () {      
	this.render("rentals")              
}, {
	name: 'rentals',                     
	layoutTemplate: "selectVendors"
});

Router.route('/transport', function () {      
	this.render("transport")              
}, {
	name: 'transport',                     
	layoutTemplate: "selectVendors"
});

Router.route('/venues', function () {      
	this.render("venues")              
}, {
	name: 'venues',                     
	layoutTemplate: "selectVendors"
});

Router.route('/videography', function () {      
	this.render("videography")              
}, {
	name: 'videography',                     
	layoutTemplate: "selectVendors"
});

Router.route('/wedding-dresses', function () {      
	this.render("weddingDress")              
}, {
	name: 'weddingDress',                     
	layoutTemplate: "selectVendors"
});
// ===================== end of vendors ===============



Router.route('/vendor-setup', function(){
	this.render('vendorSetup');
},{
	layoutTemplate:'vendorPageLayout',
	name: 'vendorSetup'  
});

Router.route('/vendor-final', function(){
	this.render('vendorFinal');
},{
	layoutTemplate:'vendorPageLayout',
	name: 'vendorFinal'  
});

Router.route('/vendor-dashboard', function(){
	this.render('vendorDashboard');
},{
	layoutTemplate:'vendorPageLayout',
	name:'vendorDashboard'
});

Router.route('/signout', function(){
  this.render('index')
},
{
  name: 'signout',
  data: function(){
    return Meteor.logout();
  }
});
