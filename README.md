# comparev
> Easily compare versions numbers (semver version)

[![NPM version][npm-image]][npm-url]
[![Downloads][downloads-image]][npm-url]
[![Bower version][bower-image]][bower-url]
[![Build Status](https://travis-ci.org/superRaytin/node-comparev.svg?branch=master)](https://travis-ci.org/superRaytin/node-comparev)

[![comparev](https://nodei.co/npm/comparev.png)](https://npmjs.org/package/comparev)

[npm-url]: https://npmjs.org/package/comparev
[downloads-image]: http://img.shields.io/npm/dm/comparev.svg
[npm-image]: http://img.shields.io/npm/v/comparev.svg
[bower-url]:http://badge.fury.io/bo/comparev
[bower-image]: https://badge.fury.io/bo/comparev.svg

# Install

### NPM

```
$ npm install comparev
```

### Bower

```
$ bower install comparev
```

# Usage

### Node.js

```js
var comparev = require('comparev');

comparev('0.8.1', '0.8.1') // 0
comparev('1.7.11', '1.13.30') // -1
comparev('0.10.11', '0.9.389') // 1
comparev('1.0.0', '0.99.999') // 1
```

## Browser

```html
<script src="./dist/comparev.js"></script>
<script>
    var output = comparev('1.0.0', '0.99.999');
    // output: 1
</script>
```

# Testing

```
npm test
```

# License

MIT, see the [LICENSE](/LICENSE) file for detail.