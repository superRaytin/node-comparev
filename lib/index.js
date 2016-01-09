/*
 * comparev 0.1.3
 * Easily compare versions numbers (semver version)
 * https://github.com/superRaytin/node-comparev
 *
 * Copyright 2015, Leon Shi
 * Released under the MIT license.
 */

'use strict';

function compare(v1, v2) {
  if (v1 === v2) {
    return 0;
  }

  var arr1 = v1.split('.');
  var arr2 = v2.split('.');

  arr1 = arr1.map(function(value) {
    return parseInt(value);
  });

  arr2 = arr2.map(function(value) {
    return parseInt(value);
  });

  var x = arr1[0] - arr2[0];
  var y = arr1[1] - arr2[1];
  var z = arr1[2] - arr2[2];

  if (x > 0) {
    return 1;
  } else if (x === 0 && y > 0) {
    return 1;
  } else if (x === 0 && y === 0 && z > 0) {
    return 1;
  }

  return -1;
}

// If we're in the browser,
// define it if we're using AMD, otherwise leak a global.
if (typeof define === 'function' && define.amd) {
  define(function() {
    return compare;
  });
}
else if (typeof window !== 'undefined') {
  window.comparev = compare;
}

module.exports = compare;
