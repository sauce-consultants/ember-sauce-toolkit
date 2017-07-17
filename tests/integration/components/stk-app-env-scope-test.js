import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('stk-app-env-scope', 'Integration | Component | stk app env scope', {
  integration: true
});

test('it renders', function(assert) {

  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{stk-app-env-scope}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#stk-app-env-scope}}
      template block text
    {{/stk-app-env-scope}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
