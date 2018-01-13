$(document).ready(function() {
    var $hours = $('.js-hours'),
        $hoursCurrentItem = $('.js-hours-current'),
        $hoursItem = $('.js-hours-item'),
        $calendarContainer = $('.js-calendar-container'),
        $calendarToogle = $('.js-calendar-toggle'),
        $calendarPrevDay = $('.js-calendar-prev'),
        $calendarNextDay = $('.js-calendar-next'),
        $tooltip = $('.js-tooltip'),
        $tooltipTriangle = $('.js-tooltip-triangle'),
        $eventItem = $('.js-event-item');

    var $addEventBtn = $('.js-add-event-btn');

    var currentTime = new Date,
        currentHour = currentTime.getHours(),
        currentMinute = currentTime.getMinutes();

    var _oneHour = 6.25,
        _oneMinute = _oneHour / 60,
        _startPoint = 8 * _oneHour;


    function init() {
        bindEvents();
        //setCurrentTime();

        var datepickekerOptions = $.extend(
            {},
            $.datepicker.regional[ "ru" ],
            {
                showOtherMonths: true,
                selectOtherMonths: true,
                onSelect: function(date, obj) {

                    /*var selectDate = obj.selectedDay + '-' + obj.selectedMonth + '-' + obj.selectedYear;
                    var currentDate = obj.currentDay + '-' + obj.currentMonth + '-' + obj.currentYear;

                    $calendarToogle.html(date).removeClass('open');
                    $calendarContainer.datepicker('hide').hide();*/
                }
            }
        )

        $calendarContainer.datepicker(datepickekerOptions);
    }

    function bindEvents() {
        $calendarNextDay.on("click", function () {
            var date = $calendarContainer.datepicker('getDate');
            date.setTime(date.getTime() + (1000*60*60*24))
            $calendarContainer.datepicker("setDate", date);
            $calendarContainer.datepicker( "refresh" );
        });

        $calendarPrevDay.on("click", function () {
            var date = $calendarContainer.datepicker('getDate');
            date.setTime(date.getTime() - (1000*60*60*24))
            $calendarContainer.datepicker("setDate", date);
            $calendarContainer.datepicker( "refresh" );
        });

        $calendarToogle.on('click', function() {
            if (!$(this).hasClass('open')) {
                $(this).addClass('open')
                $calendarContainer.datepicker('show').show();
            } else {
                $(this).removeClass('open')
                $calendarContainer.datepicker('hide').hide();
            }
        })

        $(document).mouseup(function(e) {
            if (!$calendarToogle.is(e.target) && $calendarContainer.has(e.target).length === 0) {
                $calendarToogle.removeClass('open')
                $calendarContainer.datepicker('hide').hide();
            }

            /*if (!$eventItem.is(e.target) && $eventItem.has(e.target).length === 0) {
                $eventItem.removeClass('active');
                closeTooltip();
            }*/
        });

        $eventItem.on('click', function() {
            var position = getEventItemPosition($(this));

            if ($(this).hasClass('can-open')) {
                if ($(this).hasClass('active')) {
                    closeTooltip();
                } else {
                    $eventItem.removeClass('active');
                    $(this).addClass('active');
                    openTooltip(position);
                }
            }
        })

        $(window).on('resize', closeTooltip);
    }

    function setCurrentTime() {
        $hoursCurrentItem.animate({
            left: currentHour * _oneHour + currentMinute * _oneMinute - _startPoint + '%'
        }, 500);

        $hoursItem.map((key, item) => {
            var $item = $(item),
                _itemTime = $(item).data('time').split(':')[0];

            if (currentHour > _itemTime) {
                $item.addClass('past');
            }

        });
    }

    function getEventItemPosition($item) {
        var top = $item.offset().top,
            left = $item.offset().left,
            width = $item.outerWidth(true),
            height = $item.outerHeight(true);

        return {top: top, left: left, width: width};
    }

    function openTooltip(position) {
        $tooltip.css({
            top: position.top + 26 + 'px',
            left: position.left + position.width / 2 - 338 / 2 + 'px'
        })
        if ($(window).width() < 415) {
            $tooltipTriangle.css({
                left: position.left + position.width / 2 - 4 + 'px'
            })
        }

        $tooltip.fadeIn(200);
    }

    function closeTooltip() {
        $tooltip.hide();
        $tooltipTriangle.css({left: 160})
        $eventItem.removeClass('active');
    }

    init();

})