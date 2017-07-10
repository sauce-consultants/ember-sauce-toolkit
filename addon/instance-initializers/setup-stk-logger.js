import Ember from 'ember';
import STKLogger from 'ember-sauce-toolkit/utils/stk-logger';

export function initialize(appInstance) {

  let appConfig = appInstance.factoryFor("config:environment").class;
  let addonConfig = appConfig.stk || {};
  let loggerConfig = addonConfig.logger;

  if(loggerConfig)
  {
    let staticPrefix = `[${appConfig.environment}]`;

    if(loggerConfig.inCordova !== undefined)
    {
      if(loggerConfig.inCordova)
      {
        staticPrefix += '[CORDOVA]';
      }
      else
      {
        staticPrefix += '[WEB]';
      }
    }

    let parentLogger = Ember.Logger;
    Ember.Logger = STKLogger.create({staticPrefix: staticPrefix, _parentLogger: parentLogger});
  }
}

export default {
  name: 'setup-stk-logger',
  initialize
};
