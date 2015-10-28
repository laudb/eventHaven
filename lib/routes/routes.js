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