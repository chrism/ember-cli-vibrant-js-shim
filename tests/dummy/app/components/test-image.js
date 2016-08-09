/* globals Image */
import Ember from 'ember';
import Vibrant from 'vibrant';

export default Ember.Component.extend({
  tagName: 'img',
  attributeBindings: ['src'],

  // TODO: This is needed (I think) for acceptance tests

  imagePromise: null,

  loadImage() {
    let img = new Image();
    img.src = this.get('src');

    return new Ember.RSVP.Promise( resolve => {
      img.onload = () => {
        let swatches = new Vibrant(img).swatches();
        Ember.run.later(() => { resolve(swatches); }, 2000);
      };
    });
  },

  returnSwatches() {
     this.set('imagePromise', this.loadImage());

     this.get('imagePromise').then( swatches => {
       Ember.Logger.log('promise resolved with swatches', swatches);
       this.get('onColors')(swatches);
     });
  },

  // This works using integration tests with wait helper

  simpleLoadImage() {
    let img = new Image();
    img.src = this.get('src');

    img.onload = () => {
      let swatches = new Vibrant(img).swatches();
      Ember.run.later(() => { this.get('onColors')(swatches); }, 2000);
    };
  },

  returnSwatchesOnInsert: Ember.on('didInsertElement', function() {
    Ember.run.scheduleOnce('afterRender', this, this.simpleLoadImage);
  })
});
