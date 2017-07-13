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

## stk-route-tracing

By default stk-route-tracing is disabled, it can be enabled for development builds in `environment.js`

```JavaScript
// config/environment.js
module.exports = function(environment) {
  var ENV = {
    /* ... */
    stk: {
      routeTracing: true
    }
  };
  return ENV;
};
```


### Output

```
16:30:45.691 stk-logger.js:21 [Thu Jul 13 2017 16:30:45 GMT+0100 (BST)][development][WEB] [stk-route-tracing][TRANSITION][FROM][assessor.assignments][TARGET][assessor.assignment.assessments]
16:30:45.694 stk-logger.js:21 [Thu Jul 13 2017 16:30:45 GMT+0100 (BST)][development][WEB] [stk-route-tracing][TRANSITION][FROM][assessor][TARGET][assessor.assignment.assessments]
16:30:45.691 stk-logger.js:21 [Thu Jul 13 2017 16:30:45 GMT+0100 (BST)][development][WEB] [stk-route-tracing][DEACTIVATE][assessor.assignments]
16:30:45.787 stk-logger.js:21 [Thu Jul 13 2017 16:30:45 GMT+0100 (BST)][development][WEB] [stk-route-tracing][ACTIVATE][assessor.assignment]
16:30:45.787 stk-logger.js:21 [Thu Jul 13 2017 16:30:45 GMT+0100 (BST)][development][WEB] [stk-route-tracing][ACTIVATE][assessor.assignment.assessments_loading]
16:30:47.081 stk-logger.js:21 [Thu Jul 13 2017 16:30:47 GMT+0100 (BST)][development][WEB] [stk-route-tracing][DEACTIVATE][assessor.assignment.assessments_loading]
```
