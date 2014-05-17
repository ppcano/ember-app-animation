
import Promise from 'rsvp/promise';
var HandlerInfo = requireModule("router/handler-info")['HandlerInfo'];
var bind = requireModule("router/utils").bind;
HandlerInfo.prototype.resolve = function(async, shouldContinue, payload) {

  var checkForAbort  = bind(this.checkForAbort,      this, shouldContinue),
      beforeModel    = bind(this.runBeforeModelHook, this, async, payload),
      model          = bind(this.getModel,           this, async, payload),
      afterModel     = bind(this.runAfterModelHook,  this, async, payload),
      animation      = bind(this.runAnimationHook,   this, async, payload),
      becomeResolved = bind(this.becomeResolved,     this, payload);

  return Promise.resolve(undefined, this.promiseLabel("Start handler"))
         .then(checkForAbort, null, this.promiseLabel("Check for abort"))
         .then(beforeModel, null, this.promiseLabel("Before model"))
         .then(checkForAbort, null, this.promiseLabel("Check if aborted during 'beforeModel' hook"))
         .then(model, null, this.promiseLabel("Model"))
         .then(checkForAbort, null, this.promiseLabel("Check if aborted in 'model' hook"))
         .then(afterModel, null, this.promiseLabel("After model"))
         .then(checkForAbort, null, this.promiseLabel("Check if aborted in 'afterModel' hook"))
         .then(animation, null, this.promiseLabel("Animation"))
         .then(checkForAbort, null, this.promiseLabel("Check if aborted in 'animation' hook"))
         .then(becomeResolved, null, this.promiseLabel("Become resolved"));

};
HandlerInfo.prototype.runAnimationHook = function(async, payload, promiseValue) {

  var handler = this.handler;

  return async(function() {

    return handler.animation && handler.animation.apply(handler, [payload]);

  }, this.promiseLabel("Handle Animation")).then(function() {

    return promiseValue;

  }, null, this.promiseLabel("Ignore animation value and return model value"));

};
