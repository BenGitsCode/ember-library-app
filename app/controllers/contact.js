import Ember from 'ember';

export default Ember.Controller.extend({
 contactEmailAddress: '',


 isValid: Ember.computed.match('emailAddress', /^.+@.+\..+$/),
 isDisabled: Ember.computed.not('isValid'),


});

 // isValid: Ember.computed.gte('contactEmailAddress', 5),
