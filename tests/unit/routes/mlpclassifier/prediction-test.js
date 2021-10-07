import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | mlpclassifier/prediction', function (hooks) {
  setupTest(hooks);

  test('it exists', function (assert) {
    let route = this.owner.lookup('route:mlpclassifier/prediction');
    assert.ok(route);
  });
});
