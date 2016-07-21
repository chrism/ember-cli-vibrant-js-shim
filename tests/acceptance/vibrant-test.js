import Ember from 'ember';
import { test } from 'qunit';
import moduleForAcceptance from '../../tests/helpers/module-for-acceptance';

moduleForAcceptance('Acceptance | vibrant');

test('see results', function(assert) {
  visit('/');

  andThen(function() {
    assert.equal(currentURL(), '/');

    assert.equal(find('#example-1 li.Vibrant').text().trim(), "Vibrant #5c76c5 ■");
  });
});
