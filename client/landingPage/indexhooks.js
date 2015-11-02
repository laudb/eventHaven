AutoForm.hooks({
	eventForm:{
		onSuccess:function(operation, result, template){
			Session.set("eventId", result);
		
		}
	},
	eventDetailForm:{
		onSubmit: function(insertDoc, updateDoc, currentDoc) {
			// $('#submit').attr('data-dismiss','modal');
			console.log('submitted');

		},
		onSuccess:function(operation, result, template){
			// Meteor.setTimeout( function() {
			// 	console.log('hi');
			// 	var button = document.getElementById("submit");
			// 	console.log(button);
			// 	Router.go('food', {_id: Session.get("eventId")});
			// }, 500);
			// window.location.reload();
			console.log(operation);
		},
		onError:function(formType, error){
			console.log(error);
		}
	}

});