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
    allowedValues:['food','chair rentals','photography','dj','mc','videography','live bands','drinks','wedding dresses','venues','decoration','transport','cakes'],
    autoform: {
      options:[
      {label: "Food", value: "food"},
      {label: "Chair Rentals", value: "chair rentals"},
      {label: "Photography", value: "photography"},
      {label: "Dj", value: "dj"},
      {label: "MC", value: "mc"},
      {label: "Videography", value: "videography"},
      {label: "Live Bands", value: "live bands"},
      {label: "Drinks", value: "drinks"},
      {label: "Wedding Dresses", value: "wedding dresses"},
      {label: "Venues", value: "venues"},
      {label: "Decoration", value: "decoration"},
      {label: "Transport", value: "transport"},
      {label: "Cakes", value: "cakes"}
      ]},
    optional: true
  },
  price:{
    type: Number,
    label: 'Price',
    optional: true
  },
  unit1:{
    type: String,
    label: 'Unit',
    allowedValues:['per chair','per head'],
    optional: true
  },
  unit2:{
    type: String, 
    label: 'Unit',
    allowedValues:['per head','per plate'],
    optional: true
  },
  unit3:{
    type: String, 
    label: 'Unit',
    allowedValues:['per hour', 'per day'],
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
