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
	time:{
		type: String,
		label: "What time is it?",
		optional: true
	},
	budget:{
		type: Number,
		label:"What is your estimated budget for this event?",
		optional:true
	},
	venue:{
		type:String,
		label:"Do you already have a venue for this event?",
		optional:true		
	},
	population:{
		type:Number,
		label:"How many people are you expecting in this event?",
		optional:true
	},
	selectedVendors:{
		type:[String],
		optional:true
	}
}));