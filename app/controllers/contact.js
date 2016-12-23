import Ember from 'ember';

export default Ember.Controller.extend({

  isValidEmail: Ember.computed.match('emailAddress', /^.+@.+\..+$/),
  isMessageEnoughLong: Ember.computed.gte('message.length', 5),

  isValid: Ember.computed.and('isValidEmail', 'isMessageEnoughLong'),

  actions: {
    sendMessage: function() {
      var email = this.get('emailAddress');
      var message = this.get('message');

      // alert('Sending your message in progress... ');
      // Alert...gross

      var responseMessage = 'To: ' + email + ', Message: ' + message;
      this.set('responseMessage', responseMessage);
      this.set('emailAddress', '');
      this.set('message', '');
    },

    saveMessage() {
      const email = this.get('emailAddress');
      const message = this.get('message');

      const newMessage = this.store.createRecord('contact', { email: email, message: message });
      console.log("About to save email: " + email + ' ' + message);
      newMessage.save();

      // TODO how do i log in console or show in ui this responseMessage?
    }
  }
});
