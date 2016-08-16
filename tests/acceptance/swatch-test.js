import { test } from 'qunit';
import moduleForAcceptance from '../../tests/helpers/module-for-acceptance';

moduleForAcceptance('Acceptance | swatch');

test('visiting /', function(assert) {
  visit('/');

  andThen(function() {
    assert.ok(this.$('ul').first().find('li').first().text().trim().indexOf("Vibrant") !== -1, "First Image Matches Vibrant");
    assert.ok(this.$('ul').first().find('li').last().text().trim().indexOf("LightVibrant") !== -1, "First Image Matches LightVibrant");

    assert.ok(this.$('ul').eq(1).find('li').first().text().trim().indexOf("Vibrant") !== -1, "Second Image Matches Vibrant");
    assert.ok(this.$('ul').eq(1).find('li').last().text().trim().indexOf("DarkMuted") !== -1, "Second Image Matches DarkMuted");

    assert.ok(this.$('ul').last().find('li').first().text().trim().indexOf("Vibrant") !== -1, "Third Image Matches Vibrant");
    assert.ok(this.$('ul').last().find('li').last().text().trim().indexOf("LightVibrant") !== -1, "Third Image Matches LightVibrant");
  });
});
