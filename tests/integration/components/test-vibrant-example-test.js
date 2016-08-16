import { moduleForComponent, test } from 'ember-qunit';
import wait from 'ember-test-helpers/wait';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('test-vibrant-example', 'Integration | Component | test image', {
  integration: true
});

test('it renders', function(assert) {
  assert.expect(5);
  this.render(hbs`{{test-vibrant-example url="vibrant/examples/1.jpg" ulId="example-1"}}`);

  return wait().then(() => {
    assert.equal(this.$('ul li').first().text().trim(), "Vibrant #5c76c5 ■");
    assert.equal(this.$('ul li').eq(1).text().trim(), "Muted #587b72 ■");
    assert.equal(this.$('ul li').eq(2).text().trim(), "DarkVibrant #43428c ■");
    assert.equal(this.$('ul li').eq(3).text().trim(), "DarkMuted #12131c ■");
    assert.equal(this.$('ul li').last().text().trim(), "LightVibrant #71d8e0 ■");
  });
});
