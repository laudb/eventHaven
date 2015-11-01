Events = new Mongo.Collection('events');
Events.attachSchema(new SimpleSchema({
	eventName: {
		type: String,
		max: 50,
		label:" "
	},
	eventDate: {
		type: String,
		optional:true,
		label:" "
	},
	type: {
		type: String,
		label: "What type of event are you planning?",
		allowedValues: ['Wedding', 'Conference', 'Birthday party', 'Outdoor Get-together', 'Baby shower','Show'],
		optional: true
	},
	// time: {
 //    type: String,
 //    optional: true,
 //    label: "What time is it?",
 //    autoform: {
 //    	type:"time",
 //    }
 hour: {
 	type:String, 
 	label:"Hour",
 	allowedValues:[1,2,3,4,5,6,7,8,9,10,11,12],
 	optional: true
 	// placeholder:"Hr"
 },
 minute: {
 	type: String, 
 	label:"Minutes",
 	allowedValues:["00","15","30","45"],
 	optional: true
 	// placeholder:"Min"
  },
  tod: {
  	type:String,
  	allowedValues:["AM","PM"],
  	optional: true,
  	autoform:{
	  	label:"am/pm"
  	},
  },
	budget:{
		type: Number,
		label:"What is your estimated budget for this event?",
		optional:true
	},
	venue:{
		type:String,
		label:"Do you already have a venue for this event?",
		allowedValues:['yes','no'],
		autoform: {
			options:[
			{label:"Yes", value:'yes'},
			{label:"No", value:'no'}
			]
		},
		optional:true		
	},
	venueLocation:{
		type: String,
		label:"Where is it?"
	}
}));