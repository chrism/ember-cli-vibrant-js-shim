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
      img.onload = () => {
        Ember.run(() => {
          var vibrant = new Vibrant(img);
          var swatches = vibrant.swatches();

          // You can now access the swatches here
          Ember.Logger.log('swatches', swatches);
        });
      };
      img.src = this.get('src');
    }
  },

  loadImageOnInsert: Ember.on('didInsertElement', function() {
    Ember.run.scheduleOnce('afterRender', this, this.loadImage);
  })
});
