import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | decisiontree/prediction', function (hooks) {
  setupTest(hooks);

  test('it exists', function (assert) {
    let route = this.owner.lookup('route:decisiontree/prediction');
    assert.ok(route);
  });
});
