import { moduleForComponent, test } from 'ember-qunit';
import wait from 'ember-test-helpers/wait';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('test-vibrant-example', 'Integration | Component | test image', {
  integration: true
});

test('it renders', function(assert) {
  assert.expect(1);
  this.render(hbs`{{test-vibrant-example url="vibrant/examples/1.jpg" ulId="example-1"}}`);

  return wait().then( () => {
    assert.equal(this.$('ul li:first').text().trim(), "Vibrant #5c76c5 ■");
  });
});
