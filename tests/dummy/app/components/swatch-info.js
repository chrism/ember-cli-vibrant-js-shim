import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'li',
  classNameBindings: ['name'],

  coloredLink: Ember.computed('hex', function() {
    let color = this.get('hex');
    return Ember.String.htmlSafe("color: " + color);
  })
});
