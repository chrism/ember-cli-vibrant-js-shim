/* jshint node: true */
'use strict';

module.exports = {
  name: 'ember-cli-vibrant-js-shim',
  included: function included(app) {
    this._super.included(app);

    app.import(app.bowerDirectory + '/vibrant/dist/Vibrant.min.js');
    app.import(app.bowerDirectory + '/vibrant/examples/3.jpg');
    app.import('vendor/ember-cli-vibrant-js-shim.js');
  }
};
