/*
 * comparev 0.1.2
 * Easily compare versions numbers (semver version)
 * https://github.com/superRaytin/node-comparev
 *
 * Copyright 2015, Leon Shi
 * Released under the MIT license.
*/

!function a(b,c,d){function e(g,h){if(!c[g]){if(!b[g]){var i="function"==typeof require&&require;if(!h&&i)return i(g,!0);if(f)return f(g,!0);var j=new Error("Cannot find module '"+g+"'");throw j.code="MODULE_NOT_FOUND",j}var k=c[g]={exports:{}};b[g][0].call(k.exports,function(a){var c=b[g][1][a];return e(c?c:a)},k,k.exports,a,b,c,d)}return c[g].exports}for(var f="function"==typeof require&&require,g=0;g<d.length;g++)e(d[g]);return e}({1:[function(a,b,c){function d(a,b){if(a===b)return 0;var c=a.split("."),d=b.split(".");c=c.map(function(a){return parseInt(a)}),d=d.map(function(a){return parseInt(a)});var e=c[0]-d[0],f=c[1]-d[1],g=c[2]-d[2];return e>0?1:0===e&&f>0?1:0===e&&0===f&&g>0?1:-1}b.exports=d},{}]},{},[1]);