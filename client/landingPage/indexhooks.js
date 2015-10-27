AutoForm.hooks({
	eventForm:{
		onSuccess:function(operation, result, template){
			Session.set("eventId", result);
			console.log(result)
		}
	}
})