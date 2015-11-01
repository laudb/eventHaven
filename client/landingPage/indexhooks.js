AutoForm.hooks({
	eventForm:{
		onSuccess:function(operation, result, template){
			Session.set("eventId", result);
			// console.log(result)
		}
	}

});
AutoForm.hooks({
	eventDetailForm:{
		onSubmit: function(insertDoc, updateDoc, currentDoc) {
			// $('#submit').attr('data-dismiss','modal');
			

		},
		onSuccess:function(operation, result, template){
			// Meteor.setTimeout( function() {
			// 	console.log('hi');
			// 	var button = document.getElementById("submit");
			// 	console.log(button);
			// 	Router.go('food', {_id: Session.get("eventId")});
			// }, 500);
			// window.location.reload();
		},
		onError:function(formType, error){
			console.log(error);
		}
	}

});