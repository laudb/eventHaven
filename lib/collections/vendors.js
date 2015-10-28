Vendors = new Mongo.Collection('vendors');

Vendors.attachSchema(new SimpleSchema({
  name:{
    type:String,
    label: 'Name',
  },
  phone:{
    type:Number,
    label: 'Phone'
  },
  address:{
    type:String,
    label: 'Address'
  },
  website:{
    type:String,
    label:'Website'
  },
  category:{
    type: String,
    label: 'Category',
    allowedValues:['food','photography','cakes','drinks','wedding dresses','rentals','venues','graphic design','videography','live bands','transport'],
    autoform: {
      options:[
      {label: "Food", value: "food"},
      {label: "Photography", value: "photography"},
      {label: "cakes", value: "cakes"},
      {label: "Drinks", value: "drinks"},
      {label: "Wedding Dresses", value: "wedding dresses"},
      {label: "Rentals", value: "rentals"},
      {label: "Venues", value: "venues"},
      {label: "Graphic Design", value: "graphic design"},
      {label: "Videography", value: "videography"},
      {label: "Live Bands", value: "live bands"},
      {label: "Transport", value: "transport"}
      ]},
    optional: true
  },
  price:{
    type: Number,
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