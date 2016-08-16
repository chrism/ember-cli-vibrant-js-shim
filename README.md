# Ember-cli-vibrant-js-shim

[![Build Status](https://travis-ci.org/chrism/ember-cli-vibrant-js-shim.svg?branch=master)](https://travis-ci.org/chrism/ember-cli-vibrant-js-shim)

Extract prominent colors from an image using [Vibrant.js](http://jariz.github.io/vibrant.js/).

To include in your project install the addon as usual

```js
ember install ember-cli-vibrant-js-shim
```

You can then use it in an ES6 style

```js
import Vibrant from 'vibrant';
```

[Documentation with examples](http://chrismasters.net/ember-cli-vibrant-js-shim/)

# Contributing

## Installation

* `git clone` this repository
* `npm install`
* `bower install`

## Running

* `ember server`
* Visit your app at http://localhost:4200.

## Running Tests

* `npm test` (Runs `ember try:testall` to test your addon against multiple Ember versions)
* `ember test`
* `ember test --server`

### note on hex values

Running locally I get

```
'first list...' 'Vibrant #5c76c5 ■\n\n    Muted #587b72 ■\n\n    DarkVibrant #43428c ■\n\n    DarkMuted #12131c ■\n\n    LightVibrant #71d8e0 ■'
'second list...' 'Vibrant #d6b040 ■\n\n    Muted #7f8996 ■\n\n    DarkVibrant #3347a6 ■\n\n    DarkMuted #626054 ■'
'third list...' 'Vibrant #d1544d ■\n\n    Muted #ab8f79 ■\n\n    DarkVibrant #683422 ■\n\n    DarkMuted #5e6651 ■\n\n    LightVibrant #fbf2eb ■'
```

But using Travis get

```
'first list...' 'Vibrant #c7b060 ■\n\n    Muted #6c5758 ■\n\n    DarkVibrant #423d8d ■\n\n    DarkMuted #11141d ■\n\n    LightVibrant #6873cf ■'
'second list...' 'Vibrant #dbaf13 ■\n\n    Muted #7d8b9a ■\n\n    DarkVibrant #2b3fa5 ■\n\n    DarkMuted #65625c ■'
'third list...' 'Vibrant #e34c49 ■\n\n    Muted #b3967b ■\n\n    DarkVibrant #72301c ■\n\n    DarkMuted #63816f ■\n\n    LightVibrant #fbf2ea ■'
```

Hence the need for the matching color swatch type, not specific hex value.

## Building

* `ember build`

For more information on using ember-cli, visit [http://ember-cli.com/](http://ember-cli.com/).
