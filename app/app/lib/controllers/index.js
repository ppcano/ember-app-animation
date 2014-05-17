var IndexController = Ember.ObjectController.extend(Ember.Validations.Mixin, {
  text: 'indexController',
  validations: {
    name: {
      presence: true,
      length: { minimum: 9 }
    },
    text: {
      presence: true,
      length: { minimum: 2 }
    }
  }
});

export default IndexController;
