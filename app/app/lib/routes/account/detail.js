
import BaseRoute from 'app/routes/base_animated';

var AccountDetailRoute = BaseRoute.extend({

  afterModel: function(model, transition) {
    var ac = this.controllerFor('application')
    return this.animationPromise(transition, function() {
      ac.set('position', -2);
    });
  }

});

export default AccountDetailRoute;
