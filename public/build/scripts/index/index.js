(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";
$(document).ready(function () {
  $(".js-hours");var t = $(".js-hours-current"),
      e = $(".js-hours-item"),
      s = ($(".js-add-event-btn"), new Date()),
      a = s.getHours(),
      n = s.getMinutes(),
      r = 6.25,
      u = r / 60,
      i = 8 * r;t.animate({ left: a * r + n * u - i + "%" }, 500), e.map(function (t, e) {
    var s = $(e),
        n = $(e).data("time").split(":")[0];a > n && s.addClass("past");
  });
});
},{}]},{},[1])