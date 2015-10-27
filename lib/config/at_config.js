AccountsTemplates.configureRoute('signUp', {
  path:'/vendor-signup',
  redirect:'/vendor-setup',
  template:'vendorSignup',
  layoutTemplate:'vendorPageLayout'  
});

AccountsTemplates.configureRoute('signIn', {
  redirect:'/vendor-dashboard',
  template:'vendorSignup',
  layoutTemplate:'vendorPageLayout'  
});


var OnBeforeActions;

OnBeforeActions = {
  loginRequired: function(){
    if(!Meteor.userId()){
      this.render('vendorSignup');
      return;
    }
    this.next();
  }
};

Router.onBeforeAction(OnBeforeActions.loginRequired, {
  only: ['vendorSetup','vendorFinal','vendorDashboard']
});