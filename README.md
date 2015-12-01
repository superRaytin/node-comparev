# comparev
Compare semver versions numbers

[![NPM version][npm-image]][npm-url]

# Install

```
$ npm install comparev
```

# Usage

```js
comparev('0.8.1', '0.8.1') // 0
comparev('1.7.11', '1.13.30') // -1
comparev('0.10.11', '0.9.389') // 1
comparev('1.0.0', '0.99.999') // 1
```

# Test

```
npm install
npm test
```