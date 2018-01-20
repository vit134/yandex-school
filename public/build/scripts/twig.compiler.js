(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";
module.exports = function (e) {
  return e.compiler = { module: {} }, e.compiler.compile = function (t, r) {
    var i,
        o = JSON.stringify(t.tokens),
        n = t.id;if (r.module) {
      if (void 0 === e.compiler.module[r.module]) throw new e.Error("Unable to find module type " + r.module);i = e.compiler.module[r.module](n, o, r.twig);
    } else i = e.compiler.wrap(n, o);return i;
  }, e.compiler.module = { amd: function amd(t, r, i) {
      return 'define(["' + i + '"], function (Twig) {\n\tvar twig, templates;\ntwig = Twig.twig;\ntemplates = ' + e.compiler.wrap(t, r) + "\n\treturn templates;\n});";
    }, node: function node(t, r) {
      return 'var twig = require("twig").twig;\nexports.template = ' + e.compiler.wrap(t, r);
    }, cjs2: function cjs2(t, r, i) {
      return 'module.declare([{ twig: "' + i + '" }], function (require, exports, module) {\n\tvar twig = require("twig").twig;\n\texports.template = ' + e.compiler.wrap(t, r) + "\n});";
    } }, e.compiler.wrap = function (e, t) {
    return 'twig({id:"' + e.replace('"', '\\"') + '", data:' + t + ", precompiled: true});\n";
  }, e;
};
},{}]},{},[1])