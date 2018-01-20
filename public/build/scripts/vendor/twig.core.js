(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";
module.exports = function (e) {
  function t(t, o) {
    if (t.options.rethrow) throw "string" == typeof o && (o = new e.Error(o)), "TwigException" != o.type || o.file || (o.file = t.id), o;if (e.log.error("Error parsing twig template " + t.id + ": "), o.stack ? e.log.error(o.stack) : e.log.error(o.toString()), e.debug) return o.toString();
  }return e.trace = !1, e.debug = !1, e.cache = !0, e.noop = function () {}, e.placeholders = { parent: "{{|PARENT|}}" }, e.hasIndexOf = Array.prototype.hasOwnProperty("indexOf"), e.indexOf = function (t, o) {
    if (e.hasIndexOf) return t.indexOf(o);if (void 0 === t || null === t) throw new TypeError();var n = Object(t),
        i = n.length >>> 0;if (0 === i) return -1;var r = 0;if (arguments.length > 0 && ((r = Number(arguments[1])) != r ? r = 0 : 0 !== r && r !== 1 / 0 && r !== -1 / 0 && (r = (r > 0 || -1) * Math.floor(Math.abs(r)))), r >= i) return -1;for (var s = r >= 0 ? r : Math.max(i - Math.abs(r), 0); s < i; s++) {
      if (s in n && n[s] === o) return s;
    }return t == o ? 0 : -1;
  }, e.forEach = function (e, t, o) {
    if (Array.prototype.forEach) return e.forEach(t, o);var n, i;if (null == e) throw new TypeError(" this is null or not defined");var r = Object(e),
        s = r.length >>> 0;if ("[object Function]" != {}.toString.call(t)) throw new TypeError(t + " is not a function");for (o && (n = o), i = 0; i < s;) {
      var p;i in r && (p = r[i], t.call(n, p, i, r)), i++;
    }
  }, e.merge = function (t, o, n) {
    return e.forEach(Object.keys(o), function (e) {
      (!n || e in t) && (t[e] = o[e]);
    }), t;
  }, e.attempt = function (e, t) {
    try {
      return e();
    } catch (e) {
      return t(e);
    }
  }, e.Error = function (e, t) {
    this.message = e, this.name = "TwigException", this.type = "TwigException", this.file = t;
  }, e.Error.prototype.toString = function () {
    return this.name + ": " + this.message;
  }, e.log = { trace: function trace() {
      e.trace && console && console.log(Array.prototype.slice.call(arguments));
    }, debug: function debug() {
      e.debug && console && console.log(Array.prototype.slice.call(arguments));
    } }, "undefined" != typeof console ? void 0 !== console.error ? e.log.error = function () {
    console.error.apply(console, arguments);
  } : void 0 !== console.log && (e.log.error = function () {
    console.log.apply(console, arguments);
  }) : e.log.error = function () {}, e.ChildContext = function (t) {
    return e.lib.copy(t);
  }, e.token = {}, e.token.type = { output: "output", logic: "logic", comment: "comment", raw: "raw", output_whitespace_pre: "output_whitespace_pre", output_whitespace_post: "output_whitespace_post", output_whitespace_both: "output_whitespace_both", logic_whitespace_pre: "logic_whitespace_pre", logic_whitespace_post: "logic_whitespace_post", logic_whitespace_both: "logic_whitespace_both" }, e.token.definitions = [{ type: e.token.type.raw, open: "{% raw %}", close: "{% endraw %}" }, { type: e.token.type.raw, open: "{% verbatim %}", close: "{% endverbatim %}" }, { type: e.token.type.output_whitespace_pre, open: "{{-", close: "}}" }, { type: e.token.type.output_whitespace_post, open: "{{", close: "-}}" }, { type: e.token.type.output_whitespace_both, open: "{{-", close: "-}}" }, { type: e.token.type.logic_whitespace_pre, open: "{%-", close: "%}" }, { type: e.token.type.logic_whitespace_post, open: "{%", close: "-%}" }, { type: e.token.type.logic_whitespace_both, open: "{%-", close: "-%}" }, { type: e.token.type.output, open: "{{", close: "}}" }, { type: e.token.type.logic, open: "{%", close: "%}" }, { type: e.token.type.comment, open: "{#", close: "#}" }], e.token.strings = ['"', "'"], e.token.findStart = function (t) {
    var o,
        n,
        i,
        r,
        s = { position: null, def: null },
        p = null,
        l = e.token.definitions.length;for (o = 0; o < l; o++) {
      n = e.token.definitions[o], i = t.indexOf(n.open), r = t.indexOf(n.close), e.log.trace("Twig.token.findStart: ", "Searching for ", n.open, " found at ", i), i >= 0 && n.open.length !== n.close.length && r < 0 || (i >= 0 && (null === s.position || i < s.position) ? (s.position = i, s.def = n, p = r) : i >= 0 && null !== s.position && i === s.position && (n.open.length > s.def.open.length ? (s.position = i, s.def = n, p = r) : n.open.length === s.def.open.length && (n.close.length, s.def.close.length, r >= 0 && r < p && (s.position = i, s.def = n, p = r))));
    }return s;
  }, e.token.findEnd = function (t, o, n) {
    for (var i, r, s = null, p = !1, l = 0, a = null, c = null, u = null, h = null, g = null, f = null; !p;) {
      if (a = null, c = null, !((u = t.indexOf(o.close, l)) >= 0)) throw new e.Error("Unable to find closing bracket '" + o.close + "' opened near template position " + n);if (s = u, p = !0, o.type === e.token.type.comment) break;if (o.type === e.token.type.raw) break;for (r = e.token.strings.length, i = 0; i < r; i += 1) {
        (g = t.indexOf(e.token.strings[i], l)) > 0 && g < u && (null === a || g < a) && (a = g, c = e.token.strings[i]);
      }if (null !== a) for (h = a + 1, s = null, p = !1;;) {
        if ((f = t.indexOf(c, h)) < 0) throw "Unclosed string in template";if ("\\" !== t.substr(f - 1, 1)) {
          l = f + 1;break;
        }h = f + 1;
      }
    }return s;
  }, e.tokenize = function (t) {
    for (var o = [], n = 0, i = null, r = null; t.length > 0;) {
      if (i = e.token.findStart(t), e.log.trace("Twig.tokenize: ", "Found token: ", i), null !== i.position) {
        if (i.position > 0 && o.push({ type: e.token.type.raw, value: t.substring(0, i.position) }), t = t.substr(i.position + i.def.open.length), n += i.position + i.def.open.length, r = e.token.findEnd(t, i.def, n), e.log.trace("Twig.tokenize: ", "Token ends at ", r), o.push({ type: i.def.type, value: t.substring(0, r).trim() }), "\n" === t.substr(r + i.def.close.length, 1)) switch (i.def.type) {case "logic_whitespace_pre":case "logic_whitespace_post":case "logic_whitespace_both":case "logic":
            r += 1;}t = t.substr(r + i.def.close.length), n += r + i.def.close.length;
      } else o.push({ type: e.token.type.raw, value: t }), t = "";
    }return o;
  }, e.compile = function (t) {
    var o = this;return e.attempt(function () {
      for (var n = [], i = [], r = [], s = null, p = null, l = null, a = null, c = null, u = null, h = null, g = null, f = null, d = null, y = null, w = null, k = function k(t) {
        e.expression.compile.call(o, t), i.length > 0 ? r.push(t) : n.push(t);
      }, m = function m(t) {
        if (p = e.logic.compile.call(o, t), d = p.type, y = e.logic.handler[d].open, w = e.logic.handler[d].next, e.log.trace("Twig.compile: ", "Compiled logic token to ", p, " next is: ", w, " open is : ", y), void 0 !== y && !y) {
          if (a = i.pop(), h = e.logic.handler[a.type], e.indexOf(h.next, d) < 0) throw new Error(d + " not expected after a " + a.type);a.output = a.output || [], a.output = a.output.concat(r), r = [], f = { type: e.token.type.logic, token: a }, i.length > 0 ? r.push(f) : n.push(f);
        }void 0 !== w && w.length > 0 ? (e.log.trace("Twig.compile: ", "Pushing ", p, " to logic stack."), i.length > 0 && ((a = i.pop()).output = a.output || [], a.output = a.output.concat(r), i.push(a), r = []), i.push(p)) : void 0 !== y && y && (f = { type: e.token.type.logic, token: p }, i.length > 0 ? r.push(f) : n.push(f));
      }; t.length > 0;) {
        switch (s = t.shift(), c = n[n.length - 1], u = r[r.length - 1], g = t[0], e.log.trace("Compiling token ", s), s.type) {case e.token.type.raw:
            i.length > 0 ? r.push(s) : n.push(s);break;case e.token.type.logic:
            m.call(o, s);break;case e.token.type.comment:
            break;case e.token.type.output:
            k.call(o, s);break;case e.token.type.logic_whitespace_pre:case e.token.type.logic_whitespace_post:case e.token.type.logic_whitespace_both:case e.token.type.output_whitespace_pre:case e.token.type.output_whitespace_post:case e.token.type.output_whitespace_both:
            switch (s.type !== e.token.type.output_whitespace_post && s.type !== e.token.type.logic_whitespace_post && (c && c.type === e.token.type.raw && (n.pop(), null === c.value.match(/^\s*$/) && (c.value = c.value.trim(), n.push(c))), u && u.type === e.token.type.raw && (r.pop(), null === u.value.match(/^\s*$/) && (u.value = u.value.trim(), r.push(u)))), s.type) {case e.token.type.output_whitespace_pre:case e.token.type.output_whitespace_post:case e.token.type.output_whitespace_both:
                k.call(o, s);break;case e.token.type.logic_whitespace_pre:case e.token.type.logic_whitespace_post:case e.token.type.logic_whitespace_both:
                m.call(o, s);}s.type !== e.token.type.output_whitespace_pre && s.type !== e.token.type.logic_whitespace_pre && g && g.type === e.token.type.raw && (t.shift(), null === g.value.match(/^\s*$/) && (g.value = g.value.trim(), t.unshift(g)));}e.log.trace("Twig.compile: ", " Output: ", n, " Logic Stack: ", i, " Pending Output: ", r);
      }if (i.length > 0) throw l = i.pop(), new Error("Unable to find an end tag for " + l.type + ", expecting one of " + l.next);return n;
    }, function (t) {
      if (o.options.rethrow) throw "TwigException" != t.type || t.file || (t.file = o.id), t;e.log.error("Error compiling twig template " + o.id + ": "), t.stack ? e.log.error(t.stack) : e.log.error(t.toString());
    });
  }, e.parse = function (o, n, i) {
    var r,
        s = this,
        p = [],
        l = null,
        a = !0,
        c = !0;function u(e) {
      p.push(e);
    }function h(e) {
      void 0 !== e.chain && (c = e.chain), void 0 !== e.context && (n = e.context), void 0 !== e.output && p.push(e.output);
    }if (r = e.async.forEach(o, function (t) {
      switch (e.log.debug("Twig.parse: ", "Parsing token: ", t), t.type) {case e.token.type.raw:
          p.push(e.filters.raw(t.value));break;case e.token.type.logic:
          return e.logic.parseAsync.call(s, t.token, n, c).then(h);case e.token.type.comment:
          break;case e.token.type.output_whitespace_pre:case e.token.type.output_whitespace_post:case e.token.type.output_whitespace_both:case e.token.type.output:
          return e.log.debug("Twig.parse: ", "Output token: ", t.stack), e.expression.parseAsync.call(s, t.stack, n).then(u);}
    }).then(function () {
      return p = e.output.call(s, p), a = !1, p;
    }).catch(function (e) {
      i && t(s, e), l = e;
    }), i) return r;if (null !== l) return t(this, l);if (a) throw new e.Error("You are using Twig.js in sync mode in combination with async extensions.");return p;
  }, e.prepare = function (t) {
    var o, n;return e.log.debug("Twig.prepare: ", "Tokenizing ", t), n = e.tokenize.call(this, t), e.log.debug("Twig.prepare: ", "Compiling ", n), o = e.compile.call(this, n), e.log.debug("Twig.prepare: ", "Compiled ", o), o;
  }, e.output = function (t) {
    var o = this.options.autoescape;if (!o) return t.join("");var n = "string" == typeof o ? o : "html",
        i = 0,
        r = t.length,
        s = "",
        p = new Array(r);for (i = 0; i < r; i++) {
      (s = t[i]) && !0 !== s.twig_markup && s.twig_markup != n && (s = e.filters.escape(s, [n])), p[i] = s;
    }return p.length < 1 ? "" : e.Markup(p.join(""), !0);
  }, e.Templates = { loaders: {}, parsers: {}, registry: {} }, e.validateId = function (t) {
    if ("prototype" === t) throw new e.Error(t + " is not a valid twig identifier");if (e.cache && e.Templates.registry.hasOwnProperty(t)) throw new e.Error("There is already a template with the ID " + t);return !0;
  }, e.Templates.registerLoader = function (t, o, n) {
    if ("function" != typeof o) throw new e.Error("Unable to add loader for " + t + ": Invalid function reference given.");n && (o = o.bind(n)), this.loaders[t] = o;
  }, e.Templates.unRegisterLoader = function (e) {
    this.isRegisteredLoader(e) && delete this.loaders[e];
  }, e.Templates.isRegisteredLoader = function (e) {
    return this.loaders.hasOwnProperty(e);
  }, e.Templates.registerParser = function (t, o, n) {
    if ("function" != typeof o) throw new e.Error("Unable to add parser for " + t + ": Invalid function regerence given.");n && (o = o.bind(n)), this.parsers[t] = o;
  }, e.Templates.unRegisterParser = function (e) {
    this.isRegisteredParser(e) && delete this.parsers[e];
  }, e.Templates.isRegisteredParser = function (e) {
    return this.parsers.hasOwnProperty(e);
  }, e.Templates.save = function (t) {
    if (void 0 === t.id) throw new e.Error("Unable to save template with no id");e.Templates.registry[t.id] = t;
  }, e.Templates.load = function (t) {
    return e.Templates.registry.hasOwnProperty(t) ? e.Templates.registry[t] : null;
  }, e.Templates.loadRemote = function (t, o, n, i) {
    var r = void 0 === o.id ? t : o.id,
        s = e.Templates.registry[r];return e.cache && void 0 !== s ? ("function" == typeof n && n(s), s) : (o.parser = o.parser || "twig", o.id = r, void 0 === o.async && (o.async = !0), (this.loaders[o.method] || this.loaders.fs).call(this, t, o, n, i));
  }, e.Template = function (t) {
    var o,
        n,
        i,
        r = t.data,
        s = t.id,
        p = t.blocks,
        l = t.macros || {},
        a = t.base,
        c = t.path,
        u = t.url,
        h = t.name,
        g = t.method,
        f = t.options;this.id = s, this.method = g, this.base = a, this.path = c, this.url = u, this.name = h, this.macros = l, this.options = f, this.reset(p), o = "String", n = r, i = Object.prototype.toString.call(n).slice(8, -1), this.tokens = void 0 !== n && null !== n && i === o ? e.prepare.call(this, r) : r, void 0 !== s && e.Templates.save(this);
  }, e.Template.prototype.reset = function (t) {
    e.log.debug("Twig.Template.reset", "Reseting template " + this.id), this.blocks = {}, this.importedBlocks = [], this.originalBlockTokens = {}, this.child = { blocks: t || {} }, this.extend = null;
  }, e.Template.prototype.render = function (t, o, n) {
    var i = this;return this.context = t || {}, this.reset(), o && o.blocks && (this.blocks = o.blocks), o && o.macros && (this.macros = o.macros), e.async.potentiallyAsync(this, n, function () {
      return e.parseAsync.call(this, this.tokens, this.context).then(function (t) {
        var n, r;return i.extend ? (i.options.allowInlineIncludes && (n = e.Templates.load(i.extend)) && (n.options = i.options), n || (r = e.path.parsePath(i, i.extend), n = e.Templates.loadRemote(r, { method: i.getLoaderMethod(), base: i.base, async: !1, id: r, options: i.options })), i.parent = n, i.parent.renderAsync(i.context, { blocks: i.blocks })) : o ? "blocks" == o.output ? i.blocks : "macros" == o.output ? i.macros : t : t;
      });
    });
  }, e.Template.prototype.importFile = function (t) {
    var o, n;if (!this.url && this.options.allowInlineIncludes) {
      if (t = this.path ? e.path.parsePath(this, t) : t, !(n = e.Templates.load(t)) && !(n = e.Templates.loadRemote(o, { id: t, method: this.getLoaderMethod(), async: !1, path: t, options: this.options }))) throw new e.Error("Unable to find the template " + t);return n.options = this.options, n;
    }return o = e.path.parsePath(this, t), n = e.Templates.loadRemote(o, { method: this.getLoaderMethod(), base: this.base, async: !1, options: this.options, id: o });
  }, e.Template.prototype.importBlocks = function (t, o) {
    var n = this.importFile(t),
        i = this.context,
        r = this;o = o || !1, n.render(i), e.forEach(Object.keys(n.blocks), function (e) {
      (o || void 0 === r.blocks[e]) && (r.blocks[e] = n.blocks[e], r.importedBlocks.push(e));
    });
  }, e.Template.prototype.importMacros = function (t) {
    var o = e.path.parsePath(this, t);return e.Templates.loadRemote(o, { method: this.getLoaderMethod(), async: !1, id: o });
  }, e.Template.prototype.getLoaderMethod = function () {
    return this.path ? "fs" : this.url ? "ajax" : this.method || "fs";
  }, e.Template.prototype.compile = function (t) {
    return e.compiler.compile(this, t);
  }, e.Markup = function (e, t) {
    if ("string" != typeof e || e.length < 1) return e;var o = new String(e);return o.twig_markup = void 0 === t || t, o;
  }, e;
};
},{}]},{},[1])