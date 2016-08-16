import Ember from 'ember';
import { test } from 'qunit';
import moduleForAcceptance from '../../tests/helpers/module-for-acceptance';

moduleForAcceptance('Acceptance | swatch');

test('visiting /', function(assert) {
  visit('/');

  andThen(function() {
    Ember.Logger.log('first list...', this.$('ul').first().text().trim());
    Ember.Logger.log('second list...', this.$('ul').eq(1).text().trim());
    Ember.Logger.log('third list...', this.$('ul').eq(2).text().trim());

    // for some reason travis gives a different value for this one so work around here
    let arr = ["Vibrant #5c76c5 ■", "Vibrant #c7b060 ■"];
    let val = this.$('ul').first().find('li').first().text().trim();

    assert.ok(arr.includes(val), "Matches either #5c76c5 or #c7b060");
    assert.equal(this.$('ul').first().find('li').last().text().trim(), "LightVibrant #71d8e0 ■");

    assert.equal(this.$('ul').eq(1).find('li').first().text().trim(), "Vibrant #d6b040 ■");
    assert.equal(this.$('ul').eq(1).find('li').last().text().trim(), "DarkMuted #626054 ■");

    assert.equal(this.$('ul').last().find('li').first().text().trim(), "Vibrant #d1544d ■");
    assert.equal(this.$('ul').last().find('li').last().text().trim(), "LightVibrant #fbf2eb ■");
  });
});
