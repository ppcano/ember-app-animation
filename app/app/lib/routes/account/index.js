
import BaseRoute from 'app/routes/base_animated';

var AccountIndexRoute = BaseRoute.extend({

  model: function() {
    return [{name: 'pepe', id:1},
            {name: 'cano', id:2},
            {name: 'ruiz', id:3}]

  },

  animation: function(transition) {
    
    var applicationController = this.controllerFor('application'); 

    return this.animationPromise(transition, function() {
      applicationController.set('position', -1);
    });

  }

});

export default AccountIndexRoute;
