import { moduleForComponent, test } from 'ember-qunit';
import wait from 'ember-test-helpers/wait';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('test-vibrant-example', 'Integration | Component | test image', {
  integration: true
});

test('it renders', function(assert) {
  assert.expect(5);
  this.render(hbs`{{test-vibrant-example url="vibrant/examples/1.jpg"}}`);

  return wait().then(() => {
    assert.ok(this.$('ul').first().find('li').first().text().trim().indexOf("Vibrant") !== -1, "First Result Matches Vibrant");
    assert.ok(this.$('ul').first().find('li').eq(1).text().trim().indexOf("Muted") !== -1, "Second Result Matches Muted");
    assert.ok(this.$('ul').first().find('li').eq(2).text().trim().indexOf("DarkVibrant") !== -1, "Third Result Matches DarkVibrant");
    assert.ok(this.$('ul').first().find('li').eq(3).text().trim().indexOf("DarkMuted") !== -1, "Fourth Result Matches DarkMuted");
    assert.ok(this.$('ul').first().find('li').last().text().trim().indexOf("LightVibrant") !== -1, "Last Result Matches LightVibrant");
  });
});
