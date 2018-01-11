(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";
$(document).ready(function () {
  $(".js-hours"), $(".js-hours-current"), $(".js-hours-item");var e = $(".js-calendar-container"),
      t = $(".js-calendar-toggle"),
      s = $(".js-calendar-prev"),
      a = $(".js-calendar-next"),
      n = ($(".js-add-event-btn"), new Date());n.getHours(), n.getMinutes();!function () {
    a.on("click", function () {
      var t = e.datepicker("getDate");t.setTime(t.getTime() + 864e5), e.datepicker("setDate", t), e.datepicker("refresh");
    }), s.on("click", function () {
      var t = e.datepicker("getDate");t.setTime(t.getTime() - 864e5), e.datepicker("setDate", t), e.datepicker("refresh");
    }), t.on("click", function () {
      $(this).hasClass("open") ? ($(this).removeClass("open"), e.datepicker("hide").hide()) : ($(this).addClass("open"), e.datepicker("show").show());
    }), $(document).mouseup(function (s) {
      t.is(s.target) || 0 !== e.has(s.target).length || (t.removeClass("open"), e.datepicker("hide").hide());
    });var n = $.extend({}, $.datepicker.regional.ru, { showOtherMonths: !0, selectOtherMonths: !0, onSelect: function onSelect(e, t) {} });e.datepicker(n);
  }();
});
},{}]},{},[1])