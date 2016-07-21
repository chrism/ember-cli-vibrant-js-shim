import Ember from 'ember';

export default Ember.Component.extend({
  init() {
    this._super(...arguments);
    this.set('swatchesArray', Ember.A());
  },

  actions: {
    sendColors(swatches) {
      for (var swatch in swatches) {
        if (typeof swatches[swatch] !== "undefined") {
          this.get('swatchesArray').pushObject( { name: swatch, hex: swatches[swatch].getHex() } );
        }
      }
    }
  }
});
