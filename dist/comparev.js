/*
 * comparev 0.1.4
 * Easily compare versions numbers (semver version)
 * https://github.com/superRaytin/node-comparev
 *
 * Copyright 2015, Leon Shi
 * Released under the MIT license.
*/

!function r(n,e,t){function i(u,f){if(!e[u]){if(!n[u]){var p="function"==typeof require&&require;if(!f&&p)return p(u,!0);if(o)return o(u,!0);throw new Error("Cannot find module '"+u+"'")}var a=e[u]={exports:{}};n[u][0].call(a.exports,function(r){var e=n[u][1][r];return i(e?e:r)},a,a.exports,r,n,e,t)}return e[u].exports}for(var o="function"==typeof require&&require,u=0;u<t.length;u++)i(t[u]);return i}({1:[function(r,n,e){"use strict";function t(r,n){if(r===n)return 0;var e=r.split("."),t=n.split(".");e=e.map(function(r){return parseInt(r)}),t=t.map(function(r){return parseInt(r)});var i=e[0]-t[0],o=e[1]-t[1],u=e[2]-t[2];return i>0?1:0===i&&o>0?1:0===i&&0===o&&u>0?1:-1}"function"==typeof define&&define.amd?define(function(){return t}):"undefined"!=typeof window&&(window.comparev=t),n.exports=t},{}]},{},[1]);