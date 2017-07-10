# Ember Sauce Toolkit

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

### Output

```
[Mon Jul 10 2017 14:06:49 GMT+0100 (BST)][development][WEB] My log message 1
[Mon Jul 10 2017 14:06:49 GMT+0100 (BST)][development][WEB] Other message
[Mon Jul 10 2017 14:06:49 GMT+0100 (BST)][development][WEB] Error: Something could not be found

```
