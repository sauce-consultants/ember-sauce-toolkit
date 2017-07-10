import Ember from 'ember';

export default Ember.Object.extend({
  staticPrefix: null,
  _parentLogger: Ember.Logger,
  _buildPrefix: function() {
    return `[${new Date()}]${this.staticPrefix}`;
  },
  assert: function(args) {
    return this._parentLogger.assert(...arguments);
  },
  log: function() {
    return this._parentLogger.log(this._buildPrefix(),...arguments);
  },
  info(args) {
    return this._parentLogger.info(this._buildPrefix(),...arguments);
  },
  warn(args) {
    return this._parentLogger.warn(this._buildPrefix(),...arguments);
  },
  debug(args) {
    return this._parentLogger.debug(this._buildPrefix(),...arguments);
  },
  error(args) {
    return this._parentLogger.error(this._buildPrefix(),...arguments);
  }

});
