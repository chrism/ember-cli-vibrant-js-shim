import { test } from 'qunit';
import moduleForAcceptance from '../../tests/helpers/module-for-acceptance';

moduleForAcceptance('Acceptance | swatch');

test('visiting /', function(assert) {
  visit('/');

  andThen(function() {    
    assert.equal(this.$('ul').first().find('li').first().text().trim(), "Vibrant #5c76c5 ■");
    assert.equal(this.$('ul').first().find('li').last().text().trim(), "LightVibrant #71d8e0 ■");

    assert.equal(this.$('ul').eq(1).find('li').first().text().trim(), "Vibrant #d6b040 ■");
    assert.equal(this.$('ul').eq(1).find('li').last().text().trim(), "DarkMuted #626054 ■");

    assert.equal(this.$('ul').last().find('li').first().text().trim(), "Vibrant #d1544d ■");
    assert.equal(this.$('ul').last().find('li').last().text().trim(), "LightVibrant #fbf2eb ■");
  });
});
