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