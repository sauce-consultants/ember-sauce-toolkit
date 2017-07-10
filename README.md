# ember-sauce-toolkit

A set of tools and utils for Ember

## Install

`npm install ember-sauce-toolkit`

## stk-logger

By default stk-logger is disabled, you can enable it in `environment.js`

```JavaScript
// config/environment.js
module.exports = function(environment) {
  var ENV = {
    /* ... */
    stk: {
      // logger: false
      logger: {
        inCordova: true // optional: if set appends [CORDOVA] or [WEB] to logs
      },
    }
  };
  return ENV;
};
```
