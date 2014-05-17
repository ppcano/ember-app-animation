
import Evented from "ember-runtime/mixins/evented";


var BaseAnimatedRoute = Ember.Route.extend(Evented, {
  
  animationPromise: function(transition, fn) {
    
    var infos = transition.router.currentHandlerInfos;
    var lastRouteName = infos[infos.length-1].name; 
    //console.log('animation last route: ' +lastRouteName);

    var route = this.container.lookup('route:' + lastRouteName);
    return new Ember.RSVP.Promise(function(resolve, reject){
      route.one('animationEnd', function() {
        resolve();
      });
      fn();
    });

  },
  activate: function(){
    console.log('activate: '+this.routeName);
  },

  renderTemplate: function() {
    //console.log('rendering template!!');
  },

  actions: {
    animationEnd: function() {
      this.trigger('animationEnd');
    }
  }

});

export default BaseAnimatedRoute;
