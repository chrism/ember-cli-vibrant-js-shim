/*jshint node:true*/
module.exports = {
  description: 'Installation blueprint for ember-cli-vibrant-js-shim',

  normalizeEntityName: function() {},

  afterInstall: function(options) {
    return this.addBowerPackageToProject('vibrant');
  }
};
