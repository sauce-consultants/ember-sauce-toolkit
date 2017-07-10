/* eslint-env node */
'use strict';

module.exports = {
  name: 'ember-sauce-toolkit',
  included: function(app) {
    this._super.included(app);
    // let addonConfig = this.project.config(this.app.env).stk || {};
  }
};
