import Ember from "ember";

export function initialize(appInstance) {

  let appConfig = appInstance.__container__.factoryFor("config:environment").class;
  let addonConfig = appConfig.stk || {};
  let routeTracingConfig = addonConfig['routeTracing'];


  if(routeTracingConfig)
  {
    if(appConfig.environment === "development")
    {
      Ember.Logger.log("[stk-route-tracing] stk-route-tracing enabled");
      Ember.Route.reopen({
        activate() {
          Ember.Logger.debug(`[stk-route-tracing][ACTIVATE][${this.get('routeName')}]`);
          return this._super(...arguments);
        },
        deactivate() {
          Ember.Logger.debug(`[stk-route-tracing][DEACTIVATE][${this.get('routeName')}]`);
          return this._super(...arguments);
        },
        actions: {
          willTransition(transition) {
            Ember.Logger.log(`[stk-route-tracing][TRANSITION][FROM][${this.get('routeName')}][TARGET][${transition.targetName}`);
            return this._super(...arguments);
          },
          error() {
            Ember.Logger.log(`[stk-route-tracing][ERROR]${this.get('routeName')}`,...arguments);
            return this._super(...arguments);
          }
        }
      });
    }
  }

}

export default {
  name: 'setup-stk-route-tracing',
  initialize
};
