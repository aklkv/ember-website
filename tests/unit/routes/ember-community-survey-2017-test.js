import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | ember-community-survey-2017', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:ember-community-survey-2017');
    assert.ok(route);
  });
});
