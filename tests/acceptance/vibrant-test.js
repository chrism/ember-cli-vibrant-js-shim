import Ember from 'ember';
import { test } from 'qunit';
import moduleForAcceptance from '../../tests/helpers/module-for-acceptance';

moduleForAcceptance('Acceptance | vibrant');

test('see results', function(assert) {
  visit('/');

  andThen(function() {
    assert.equal(currentURL(), '/');
    let t = find('#example-1 li.Vibrant').text().trim();
    
    Ember.Logger.log('its', t);
    assert.equal(t, "Vibrant #5c76c5 ■");
    // assert.equal(find('#example-2 li:first').text(), "Vibrant #d6b040 ■");
    // assert.equal(find('#example-3 li:first').text(), "Vibrant #d1544d ■");
  });
});
