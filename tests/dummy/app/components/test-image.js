/* globals Image */
import Ember from 'ember';
import Vibrant from 'vibrant';

export default Ember.Component.extend({
  tagName: 'img',
  attributeBindings: ['src'],

  imageLoader: Ember.computed(function() { return new Image(); }),

  loadImage() {
    let img = this.get('imageLoader');

    if (img) {
      img.onload = (/*e*/) => {
        Ember.run(() => {
          var vibrant = new Vibrant(img);
          var swatches = vibrant.swatches();

          this.get('onColors')(swatches);
        });
      };
      img.src = this.get('src');
    }
  },

  loadImageOnInsert: Ember.on('didInsertElement', function() {
    Ember.run.scheduleOnce('afterRender', this, this.loadImage);
  })
});
