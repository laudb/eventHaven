Template.vendorSetup.helpers({
  iVendor: function () {
    var id = Meteor.userId();
    return Vendors.findOne({"owner": id});
  }
});

Template.vendorFinal.helpers({
  iVendor: function(){
    var id = Meteor.userId();
    return Vendors.findOne({"owner": id});
  }
});