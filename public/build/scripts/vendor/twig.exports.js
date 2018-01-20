(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";
module.exports = function (e) {
  return e.exports = { VERSION: e.VERSION }, e.exports.twig = function (t) {
    var o = t.id,
        r = { strict_variables: t.strict_variables || !1, autoescape: null != t.autoescape && t.autoescape || !1, allowInlineIncludes: t.allowInlineIncludes || !1, rethrow: t.rethrow || !1, namespaces: t.namespaces };if (e.cache && o && e.validateId(o), void 0 !== t.debug && (e.debug = t.debug), void 0 !== t.trace && (e.trace = t.trace), void 0 !== t.data) return e.Templates.parsers.twig({ data: t.data, path: t.hasOwnProperty("path") ? t.path : void 0, module: t.module, id: o, options: r });if (void 0 !== t.ref) {
      if (void 0 !== t.id) throw new e.Error("Both ref and id cannot be set on a twig.js template.");return e.Templates.load(t.ref);
    }if (void 0 !== t.method) {
      if (!e.Templates.isRegisteredLoader(t.method)) throw new e.Error('Loader for "' + t.method + '" is not defined.');return e.Templates.loadRemote(t.name || t.href || t.path || o || void 0, { id: o, method: t.method, parser: t.parser || "twig", base: t.base, module: t.module, precompiled: t.precompiled, async: t.async, options: r }, t.load, t.error);
    }return void 0 !== t.href ? e.Templates.loadRemote(t.href, { id: o, method: "ajax", parser: t.parser || "twig", base: t.base, module: t.module, precompiled: t.precompiled, async: t.async, options: r }, t.load, t.error) : void 0 !== t.path ? e.Templates.loadRemote(t.path, { id: o, method: "fs", parser: t.parser || "twig", base: t.base, module: t.module, precompiled: t.precompiled, async: t.async, options: r }, t.load, t.error) : void 0;
  }, e.exports.extendFilter = function (t, o) {
    e.filter.extend(t, o);
  }, e.exports.extendFunction = function (t, o) {
    e._function.extend(t, o);
  }, e.exports.extendTest = function (t, o) {
    e.test.extend(t, o);
  }, e.exports.extendTag = function (t) {
    e.logic.extend(t);
  }, e.exports.extend = function (t) {
    t(e);
  }, e.exports.compile = function (t, o) {
    var r,
        a = o.filename,
        i = o.filename;return r = new e.Template({ data: t, path: i, id: a, options: o.settings["twig options"] }), function (e) {
      return r.render(e);
    };
  }, e.exports.renderFile = function (t, o, r) {
    "function" == typeof o && (r = o, o = {});var a = (o = o || {}).settings || {},
        i = { path: t, base: a.views, load: function load(e) {
        r(null, "" + e.render(o));
      } },
        n = a["twig options"];if (n) for (var s in n) {
      n.hasOwnProperty(s) && (i[s] = n[s]);
    }e.exports.twig(i);
  }, e.exports.__express = e.exports.renderFile, e.exports.cache = function (t) {
    e.cache = t;
  }, e.exports.path = e.path, e.exports.filters = e.filters, e.exports.Promise = e.Promise, e;
};
},{}]},{},[1])