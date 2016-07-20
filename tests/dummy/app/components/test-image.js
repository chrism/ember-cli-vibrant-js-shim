/* globals Image */
import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'img',
  attributeBindings: ['src'],
  classNameBindings: ['isLoaded'],

  isLoaded: false,

  imageLoader: Ember.computed(function() { return new Image(); }),

  loadImage() {
    let img = this.get('imageLoader');

    if (img) {
      img.onload = e => {
        Ember.run(() => {
          Ember.Logger.log('loaded', img, e);
          this.set('isLoaded', true);
        });
      };
      img.src = this.get('src');
    }
  },

  loadImageOnInsert: Ember.on('didInsertElement', function() {
    Ember.run.scheduleOnce('afterRender', this, this.loadImage);
  })
});
