Vendors = new Mongo.Collection('vendors');

Vendors.attachSchema(new SimpleSchema({
  name:{
    type:String,
    label: 'Name',
  },
  phone:{
    type:String,
    label: 'Phone'
  },
  address:{
    type:String,
    label: 'Address'
  },
  website:{
    type:String,
    label:'Website',
    optional:true
  },
  category:{
    type: String,
    label: 'Category',
    allowedValues:['food','drinks','mc','venues'],
    autoform: {
      options:[
      {label: "Food", value: "food"},
      {label: "Drinks", value: "drinks"},
      {label: "MC", value: "mc"},
      {label: "Venues", value: "venues"}
      ]},
      optional: true
    },
    price:{
      type:Number,
      label: 'Price',
      optional: true
    },
    owner:{
      type:String,
      autoform:{
        omit:true
      },
      autoValue:function(){
        return Meteor.userId();
      }
    }
  }));