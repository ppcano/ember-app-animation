
import AnimatedLayoutComponent from 'app/components/animated_layout';

var ApplicationLayoutComponent = AnimatedLayoutComponent.extend({
  classNames: ['application-layout'],
  classNameBindings: ['isIndex', 'isSettings', 'isAccount', 'isAccountDetail'],
  position: null,
  isIndex: Em.computed.equal('position', 0),
  isSettings: Em.computed.equal('position', 1),
  isAccount: Em.computed.equal('position', -1),
  isAccountDetail: Em.computed.equal('position', -2)

});

export default ApplicationLayoutComponent;
