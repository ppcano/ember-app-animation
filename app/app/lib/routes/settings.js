import BaseRoute from 'app/routes/base_animated';

var SettingsRoute = BaseRoute.extend({
  afterModel: function(model, transition) {
    var ac = this.controllerFor('application')
    return this.animationPromise(transition, function() {
      ac.set('position', 1);
    });
  }
});

export default SettingsRoute;
