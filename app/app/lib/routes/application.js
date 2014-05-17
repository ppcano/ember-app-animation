var ApplicationRoute = Ember.Route.extend({
  
  actions: {
    hola: function() {
      console.log('hola app');
    },
    error: function(error) {
      console.log(error);
    },

    debugAction: function() {

      console.log('application debug action');

    }
  }

});

export default ApplicationRoute;
