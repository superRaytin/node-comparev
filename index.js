/*
 * comparev 0.1.0
 * Compare semver version numbers
 * https://github.com/superRaytin/node-comparev
 *
 * Copyright 2015, Leon Shi
 * Released under the MIT license.
 */

(function(global) {

  function compare(v1, v2) {
    // equal
    if (v1 === v2) return 0;

    var arr1 = v1.split('.');
    var arr2 = v2.split('.');

    // convert to number
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
    } else if(x === 0 && y > 0) {
      return 1;
    } else if(x === 0 && y === 0 && z > 0) {
      return 1;
    }

    return -1;
  }

  /*
   * export via AMD, otherwise leak a global
   * */
  if (typeof define === 'function' && define.amd) {
    define(function(){
      return compare;
    });
  } else if (typeof module !== 'undefined' && typeof module.exports !== 'undefined') {
    module.exports = compare;
  } else {
    global.comparev = compare;
  }

})(this);