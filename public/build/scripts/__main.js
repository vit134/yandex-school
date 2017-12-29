'use strict';

$(document).ready(function () {
    var $hours = $('.js-hours'),
        $hoursCurrentItem = $('.js-hours-current'),
        $hoursItem = $('.js-hours-item');

    var $addEventBtn = $('.js-add-event-btn');

    var currentTime = new Date(),
        currentHour = currentTime.getHours(),
        currentMinute = currentTime.getMinutes();

    var _oneHour = 6.25,
        _oneMinute = _oneHour / 60,
        _startPoint = 8 * _oneHour;

    function init() {
        bindEvents();
        setCurrentTime();
    }

    function setCurrentTime() {
        $hoursCurrentItem.animate({
            left: currentHour * _oneHour + currentMinute * _oneMinute - _startPoint + '%'
        }, 500);

        $hoursItem.map(function (key, item) {
            var $item = $(item),
                _itemTime = $(item).data('time').split(':')[0];

            if (currentHour > _itemTime) {
                $item.addClass('past');
            }
        });
    }

    function bindEvents() {}

    init();
});
console.log('no it realy works!');