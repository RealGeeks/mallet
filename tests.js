'use strict';

var test = require('tape');
var mallet = require('./');

test('cssProps options', function (assert) {
  assert.plan(1);

  var div = document.createElement('div');

  var instance = mallet(div, {
    cssProps: {
      userSelect: 'text'
    }
  });

  assert.equal(
    div.style.userSelect ||
    div.style.webkitUserSelect ||
    div.style.MozUserSelect ||
    div.style.msUserSelect,
    'text',
    'userSelect'
  );

  instance.destroy();
});
