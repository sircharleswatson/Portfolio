Template.home.events({
  'click a[target="_blank"]': function(event, template) {
    event.preventDefault();
    window.open(event.target.href, '_blank');
  }
});