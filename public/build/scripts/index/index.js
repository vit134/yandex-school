(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";
$(document).ready(function () {
  $(".js-hours");var e = $(".js-hours-current"),
      t = $(".js-hours-item"),
      a = $(".js-calendar-container"),
      r = $(".js-calendar-toggle"),
      s = $(".js-calendar-prev"),
      n = $(".js-calendar-next"),
      i = ($(".js-add-event-btn"), new Date()),
      c = i.getHours(),
      o = i.getMinutes(),
      d = 6.25,
      h = d / 60,
      l = 8 * d;!function () {
    n.on("click", function () {
      var e = a.datepicker("getDate");e.setTime(e.getTime() + 864e5), a.datepicker("setDate", e), a.datepicker("refresh");
    }), s.on("click", function () {
      var e = a.datepicker("getDate");e.setTime(e.getTime() - 864e5), a.datepicker("setDate", e), a.datepicker("refresh");
    }), r.on("click", function () {
      $(this).hasClass("open") ? ($(this).removeClass("open"), a.datepicker("hide").hide()) : ($(this).addClass("open"), a.datepicker("show").show());
    }), $(document).mouseup(function (e) {
      r.is(e.target) || 0 !== a.has(e.target).length || (r.removeClass("open"), a.datepicker("hide").hide());
    }), e.animate({ left: c * d + o * h - l + "%" }, 500), t.map(function (e, t) {
      var a = $(t),
          r = $(t).data("time").split(":")[0];c > r && a.addClass("past");
    });var i = $.extend({}, $.datepicker.regional.ru, { showOtherMonths: !0, selectOtherMonths: !0, onSelect: function onSelect(e, t) {
        t.selectedDay, t.selectedMonth, t.selectedYear, t.currentDay, t.currentMonth, t.currentYear, r.html(e).removeClass("open"), a.datepicker("hide").hide();
      } });a.datepicker(i);
  }();
});
},{}]},{},[1])