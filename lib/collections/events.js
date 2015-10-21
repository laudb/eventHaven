Events = new Mongo.Collection('events');
Events.attachSchema(new SimpleSchema({
	eventName: {
		type: String,
		max: 50,
		label:"."
	},
	dateOfBirth: {
		type: String,
		optional:true,
		label:""
	}
}));