import Ember from 'ember';
import layout from '../templates/components/stk-app-env-scope';

export default Ember.Component.extend({
  layout,
  env: null,
  init(){
    this._super(...arguments);
    let env = Ember.getOwner(this).factoryFor('config:environment').class;
    this.set('env',env);
  }
});
