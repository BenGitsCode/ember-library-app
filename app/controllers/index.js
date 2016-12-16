import Ember from 'ember';

export default Ember.Controller.extend({

  isDisabled: true,

  emailAddress: '',

// This computed proprty will only change when yo go and use that proprty
 actualEmailAddress: Ember.computed('emailAddress', function() { 
   console.log('actualEmailAddress function is called: ', this.get('emailAddress'));
 }),

// This observer will always be called when the value of the emailAddress changes
 emailAddressChanged: Ember.observer('emailAddress', function() { 
   console.log('observer is called', this.get('emailAddress')); 
 })

});


// TODO Teachable moment
// Open your app in your browser, and activate Ember Inspector. Click on /# Routes section, find the index route, and in the same line, under the Controller column, you will see an >$E sign; click on it. Open the console in Chrome and you will see something like this: Ember Inspector ($E): Class {__nextSuper: undefined, __ember_meta__: Object, __ember1442491471913: "ember443"}
//
// If you type the following in the console: $E.get('actualEmailAddress'), you should see the console.log output message defined above inside “actualEmailAddress”. You can try out $E.set('emailAddress', 'example@example.com') in the console. What do you see?

// play with this ↑


// Console play with these properties
//
// $E.get('actualEmailAddress')
// undefined
// $E.get('actualEmailAddress')
// undefined
// $E.get('actualEmailAddress')
// undefined
// $E.get('emailAddressChanged')
// undefined
// $E.set('actualEmailAddress', 'banana@banana.com')
// "banana@banana.com"
// $E.get('actualEmailAddress')
// "banana@banana.com"
// $E.get('emailAddressChanged')
// undefined
