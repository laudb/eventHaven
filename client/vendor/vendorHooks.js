AutoForm.hooks({
  insertVendorForm:{
    onSuccess: function(operation, result, template){
      Router.go('vendorFinal');
    }
  },
    updateVendorForm:{
      onSuccess: function(operation, result, template){
        Router.go('vendorDashboard');
      }
    }
  }
);