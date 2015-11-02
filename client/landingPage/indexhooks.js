AutoForm.hooks({
	eventForm:{
		onSubmit: function(insertDoc, updateDoc, currentDoc) {
			// $('#submit').attr('data-dismiss','modal');
			
			console.log("in eventform")
		},
		onSuccess:function(operation, result, template){
			Session.set("neweventId", result);
			// console.log(result)
			console.log("after eventform");

		},
		onError:function(formType, error){
			console.log(error);
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