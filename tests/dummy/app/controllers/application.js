import Ember from 'ember';

export default Ember.Controller.extend({
  swatchesArray: Ember.A(),

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
