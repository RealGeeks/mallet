Mallet
======

A JavaScript library for managing touch and mouse interactions. It is basically [Hammer.js](https://github.com/hammerjs/hammer.js/) modified to add basic support for IE8.

Installation
------------

```bash
npm install mallet
```

Usage
-----

```js
var Mallet = require('mallet');

new Mallet(someDOMNode).on('tap', function () {
  console.log('That tickles!');
});
```

IE8 Support
-----------

For _Mallet_ to work on IE8, make sure to include [ES5 shim and sham](https://github.com/es-shims/es5-shim).
