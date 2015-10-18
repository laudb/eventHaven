// when a user clicks a category, take category name and save in 'captionText' 
Template.categories.events({
  'click a': function (event) {
    event.preventDefault();
    captionInnerText = event.currentTarget.innerText
    Session.set('captionText', captionInnerText);
  }
});

//vendors to be displayed are based on category name
Template.vendors.helpers({
  captionText: function () {
    return Session.get('captionText');
  }
});

//when user clicks on a thumbnail, save selected vendor into 'select'
Template.vendors.events({
  'click .thumbnail': function(event){
    event.preventDefault();
    selectedElement = event.currentTarget
  }
});







