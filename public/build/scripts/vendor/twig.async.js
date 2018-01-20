(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";
module.exports = function (e) {
  var n = 1,
      t = 2;return e.parseAsync = function (n, t) {
    return e.parse.call(this, n, t, !0);
  }, e.expression.parseAsync = function (n, t, r) {
    return e.expression.parse.call(this, n, t, r, !0);
  }, e.logic.parseAsync = function (n, t, r) {
    return e.logic.parse.call(this, n, t, r, !0);
  }, e.Template.prototype.renderAsync = function (e, n) {
    return this.render(e, n, !0);
  }, e.async = {}, e.isPromise = function (e) {
    return e && e.then && "function" == typeof e.then;
  }, e.async.potentiallyAsync = function (n, t, r) {
    return t ? e.Promise.resolve(r.call(n)) : function (n, t, r) {
      var i = r.call(n),
          o = null,
          s = !0;if (!e.isPromise(i)) return i;if (i.then(function (e) {
        i = e, s = !1;
      }).catch(function (e) {
        o = e;
      }), null !== o) throw o;if (s) throw new e.Error("You are using Twig.js in sync mode in combination with async extensions.");return i;
    }(n, 0, r);
  }, e.Thenable = function (e, n, t) {
    this.then = e, this._value = t ? n : null, this._state = t || 0;
  }, e.Thenable.prototype.catch = function (e) {
    return this._state == n ? this : this.then(null, e);
  }, e.Thenable.resolvedThen = function (n) {
    try {
      return e.Promise.resolve(n(this._value));
    } catch (n) {
      return e.Promise.reject(n);
    }
  }, e.Thenable.rejectedThen = function (n, t) {
    if (!t || "function" != typeof t) return this;var r = this._value,
        i = e.attempt(function () {
      return t(r);
    }, e.Promise.reject);return e.Promise.resolve(i);
  }, e.Promise = function (r) {
    var i = 0,
        o = null,
        s = function s(e, n) {
      i = e, o = n;
    };return function (e, n, t) {
      try {
        e(n, t);
      } catch (e) {
        t(e);
      }
    }(r, function (e) {
      s(n, e);
    }, function (e) {
      s(t, e);
    }), i === n ? e.Promise.resolve(o) : i === t ? e.Promise.reject(o) : (s = e.FullPromise()).promise;
  }, e.FullPromise = function () {
    var t = null;function r(e) {
      e(u._value);
    }function i(e, n) {
      n(u._value);
    }var o = function o(e, n) {
      var r, i;i = [e, n, -2], (r = t) ? -2 == r[2] ? r = [r, i] : r.push(i) : r = i, t = r;
    };function s(s, l) {
      u._state || (u._value = l, u._state = s, o = s == n ? r : i, t && (-2 === t[2] && (o(t[0], t[1]), t = null), e.forEach(t, function (e) {
        o(e[0], e[1]);
      }), t = null));
    }var u = new e.Thenable(function (t, r) {
      var i = "function" == typeof t;if (u._state == n && !i) return e.Promise.resolve(u._value);if (u._state === n) return e.attempt(function () {
        return e.Promise.resolve(t(u._value));
      }, e.Promise.reject);var s = "function" == typeof r;return e.Promise(function (n, u) {
        o(i ? function (r) {
          e.attempt(function () {
            n(t(r));
          }, u);
        } : n, s ? function (t) {
          e.attempt(function () {
            n(r(t));
          }, u);
        } : u);
      });
    });return s.promise = u, s;
  }, e.Promise.defaultResolved = new e.Thenable(e.Thenable.resolvedThen, void 0, n), e.Promise.emptyStringResolved = new e.Thenable(e.Thenable.resolvedThen, "", n), e.Promise.resolve = function (t) {
    return arguments.length < 1 || void 0 === t ? e.Promise.defaultResolved : e.isPromise(t) ? t : "" === t ? e.Promise.emptyStringResolved : new e.Thenable(e.Thenable.resolvedThen, t, n);
  }, e.Promise.reject = function (n) {
    return new e.Thenable(e.Thenable.rejectedThen, n, t);
  }, e.Promise.all = function (t) {
    var r = new Array(t.length);return e.async.forEach(t, function (t, i) {
      if (e.isPromise(t)) {
        if (t._state != n) return t.then(function (e) {
          r[i] = e;
        });r[i] = t._value;
      } else r[i] = t;
    }).then(function () {
      return r;
    });
  }, e.async.forEach = function (t, r) {
    var i = t.length,
        o = 0;return function s() {
      var u = null;do {
        if (o == i) return e.Promise.resolve();u = r(t[o], o), o++;
      } while (!u || !e.isPromise(u) || u._state == n);return u.then(s);
    }();
  }, e;
};
},{}]},{},[1])