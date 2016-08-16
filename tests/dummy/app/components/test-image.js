/* globals Image */
import Ember from 'ember';
import Vibrant from 'vibrant';

export default Ember.Component.extend({
  tagName: 'img',
  attributeBindings: ['src'],

  init() {
    this._super(...arguments);

    if (Ember.testing) {
      this._loading = false;
      Ember.Test.registerWaiter(() => this._loading === false);
    }
  },

  loadImagePromise() {
    const src = this.get('src');

    let promise = new Ember.RSVP.Promise( (resolve, reject) => {
      const img = new Image();

      img.onload = (/* event */) => {
        Ember.run(() => {
          let swatches = new Vibrant(img).swatches();
          setTimeout(() => { resolve(swatches); }, 1000); // testing async wait works correctly
          // resolve(swatches);
        });
      };

      img.onerror = () => {
        Ember.run(() => reject());
      };

      img.src = src;
    });

    if (Ember.testing) {
      this._loading = true;
      return promise.finally(() => this._loading = false);
    }

    return promise;
  },

  loadImage() {
    this.loadImagePromise()
    .then( swatches => {
      this.get('onColors')(swatches);
    })
    .catch( (/* error */) => {
      Ember.Logger.log('could not process swatches');
    });
  },

  returnSwatchesOnInsert: Ember.on('didInsertElement', function() {
    Ember.run.scheduleOnce('afterRender', this, this.loadImage);
  })
});
