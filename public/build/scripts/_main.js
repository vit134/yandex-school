"use strict";
$(document).ready(function () {
  $(".js-hours");var t = $(".js-hours-current"),
      e = $(".js-hours-item"),
      s = ($(".js-add-event-btn"), new Date()),
      a = s.getHours(),
      n = s.getMinutes(),
      o = 6.25,
      r = o / 60,
      u = 8 * o;t.animate({ left: a * o + n * r - u + "%" }, 500), e.map(function (t, e) {
    var s = $(e),
        n = $(e).data("time").split(":")[0];a > n && s.addClass("past");
  });
}), console.log("no it realy works!");