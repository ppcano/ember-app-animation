
var AnimatedLayoutComponent = Ember.Component.extend({

  action: 'animationEnd',
  animatedProperties: null,

  transitionEnd: function(evt) {

    var animatedProperties = this.get('animatedProperties').split(' ');
    var propertyName = evt.originalEvent.propertyName;
    if (animatedProperties.indexOf(propertyName) !== -1) {
      this.sendAction();
    }
  }

});

export default AnimatedLayoutComponent;
