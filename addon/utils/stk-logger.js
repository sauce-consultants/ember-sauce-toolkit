import Ember from 'ember';

export default Ember.Object.extend({
  staticPrefix: null,
  _parentLogger: Ember.Logger,
  _bufferEnabled: true,
  _maxBufferLength: 100,
  logBuffer: [],
  _buildPrefix: function() {
    return `[${new Date()}]${this.staticPrefix}`;
  },
  _pushIntoBuffer() {
    if(!this._bufferEnabled) {
      return;
    }

    let message = [...arguments].map((messagePart) => {

      if(typeof messagePart === 'object')
      {
        //Basic circular reference detection // https://stackoverflow.com/questions/11616630/json-stringify-avoid-typeerror-converting-circular-structure-to-json
        var objectCache = [];
        var stringifiedObject = JSON.stringify(messagePart, function(key, value) {
          if (typeof value === 'object' && value !== null) {
            if (objectCache.indexOf(value) !== -1) {
              return '[Circular]';
            }
            objectCache.push(value);
          }
          return value;
        });
        objectCache = null;
        return stringifiedObject;
      }
      else
      {
        return messagePart;
      }
    }).join('');

    this.logBuffer.push(message);

    if(this._maxBufferLength && this.logBuffer.length > this._maxBufferLength) {
      this.logBuffer.splice(0,this.logBuffer.length - this._maxBufferLength);
    }
  },
  assert: function(args) {
    return this._parentLogger.assert(...arguments);
  },
  log: function() {
    let prefix = this._buildPrefix();
    this._pushIntoBuffer(prefix,'[LOG]',...arguments);
    return this._parentLogger.log(prefix,'[LOG]',...arguments);
  },
  info() {
    let prefix = this._buildPrefix();
    this._pushIntoBuffer(prefix,'[INFO]',...arguments);
    return this._parentLogger.info(prefix,'[INFO]',...arguments);
  },
  warn() {
    let prefix = this._buildPrefix();
    this._pushIntoBuffer(prefix,'[WARN]',...arguments);
    return this._parentLogger.warn(prefix,'[WARN]',...arguments);
  },
  debug() {
    let prefix = this._buildPrefix();
    this._pushIntoBuffer(prefix,'[DEBUG]',...arguments);
    return this._parentLogger.debug(prefix,'[DEBUG]',...arguments);
  },
  error() {
    let prefix = this._buildPrefix();
    this._pushIntoBuffer(prefix,'[ERROR]',...arguments);
    return this._parentLogger.error(prefix,'[ERROR]',...arguments);
  }

});
