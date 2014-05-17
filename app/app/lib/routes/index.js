import BaseRoute from 'app/routes/base_animated';

var IndexRoute = BaseRoute.extend({

  model: function() {

    return new Em.RSVP.resolve({name: 'ppcano'});

  },

  afterModel: function(model, transition) {
    
    var ac = this.controllerFor('application')
    if ( transition.router.currentHandlerInfos ) {
      return this.animationPromise(transition, function() {
        ac.set('position', 0);
      });
    } else {
      ac.set('position', 0);
    }

  },

  actions: {
    debugAction: function() {

      console.log('debug action');
      return true;

    }

  }
});

export default IndexRoute;
