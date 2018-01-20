import SimpleBar from 'SimpleBar';

$(document).ready(function() {
    var twig = require('twig'); 
    var $body = $('body');


    // index vars
    var $hours = $('.js-hours'),
        $hoursCurrentItem = $('.js-hours-current'),
        $hoursItem = $('.js-hours-item'),
        $calendarContainer = $('.js-calendar-container'),
        $calendarToogle = $('.js-calendar-toggle'),
        $calendarPrevDay = $('.js-calendar-prev'),
        $calendarNextDay = $('.js-calendar-next'),
        $tooltip = $('.js-tooltip'),
        $tooltipWrapper = $('.js-tooltip-wrapper'),
        $tooltipTriangle = $('.js-tooltip-triangle'),
        $eventItem = $('.js-event-item'),
        $schedule = $('.js-schedule'),
        $eventsRoom = $('.js-events-room'),
        $eventsFloor = $('.js-events-floor'),
        $colLeft = $('.js-col-left');

    //poup vars
    var $popup = $('.js-popup');

    var $addEventBtn = $('.js-add-event-btn');

    var currentTime = new Date,
        currentHour = currentTime.getHours(),
        currentMinute = currentTime.getMinutes();

    var _oneHour = 6.25,
        _oneMinute = _oneHour / 60,
        _startPoint = 8 * _oneHour;

    var _colLeftWidth;

    var scheduleScrollFlag = false;


    //newevent vars 
    var $dropdowmContainer,
        $dropdownItem,
        $dropdowmInput,
        $dropdownSelect,
        $dropdownSelectOption,
        $membersItem,
        $removeMemberBtn,
        $calendarContainer,
        $neweventFrom,
        $neweventSaveBtn,

        scrollBar;

    function init() {
        updateChangeblVars();
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

    function neweventInit() {
        updateNeweventVars();
        bindNeweventEvents();

        scrollBar = new SimpleBar($dropdowmContainer[0], {
            autoHide: false
        });

        var datepickekerOptions = $.extend(
            {},
            $.datepicker.regional[ "ru" ],
            {
                showOn: "both",
                buttonImage: "../../../styles/blocks/newevent/images/calendar.svg",
                defaultDate: new Date($('#datepicker').val()),
                buttonImageOnly: true,
                showOtherMonths: true,
                selectOtherMonths: true,
                beforeShow:function(textbox, instance){
                    $calendarContainer.append($(instance.dpDiv)).show();
                },
                onClose: function() {
                    $calendarContainer.hide();
                }
            }
        )

        $('#datepicker').datepicker(datepickekerOptions);
    }

    function updateNeweventVars() {
        $dropdowmContainer = $('#js-dropdown-container');
        $dropdownItem = $('.js-dropdown-item');
        $dropdowmInput = $('.js-dropdown-input');
        $dropdownSelect = $('.js-newevent-select');
        $dropdownSelectOption = $dropdownSelect.find('option');
        $membersItem = $('.js-members-item');
        $removeMemberBtn = $('.js-remove-member');
        $calendarContainer = $('.js-calendar-container');
        $neweventFrom = $('.js-newevent-form');

        $neweventSaveBtn = $('.js-create-event-btn');
    }

    function bindNeweventEvents() {
        $neweventSaveBtn.on('click', function(e) {
            e.preventDefault();
            var data = getNeweventData();
            console.log(data);

            $.ajax({
                url: '/createevent',
                type: 'POST',
                data: data,
                beforeSend: function() {
                    console.log('beforesend')
                },
                success: function(data){
                    console.log(data);
                }
            });
        })

        $dropdowmInput.on('click', function() {
            $dropdowmContainer.addClass('active');
        })

        $(document).mouseup(function(e) {
            if (!$dropdowmContainer.is(e.target) && $dropdowmContainer.has(e.target).length === 0) {
                $dropdowmContainer.removeClass('active');
            }
        });

        $dropdownItem.on('click', function(e) {
            e.preventDefault();
            getMember($(this).data('id'));
            $(this).addClass('hidden')
        });

        $removeMemberBtn.on('click', function(e) {
            e.preventDefault();
            removemembers($(this).parent().data('id'));
            $(this).parent().addClass('hidden');
        })

        $dropdowmInput.on('click keyup paste', liveSearch);
    }

    // -- newevent Functions -- //
    function getNeweventData() {
        var data = {};

        data.eventTitle = $neweventFrom.find('input[name="newevent_topic"]').val();
        data.members = [];
        $neweventFrom.find('.js-newevent-select-option').map((i, elem) => {
            if ($(elem).is(":selected")) {
                data.members.push($(elem).val());
            }
        });

        var DATE = new Date($('#datepicker').datepicker( "getDate" ));
        var year = DATE.getFullYear(),
            month = DATE.getMonth() < 10 ? 0 + '' + (DATE.getMonth() + 1) : DATE.getMonth(),
            date = DATE.getDate();

        var timeStart = $neweventFrom.find('input[name="newevent_start"]').val(),
            timeEnd = $neweventFrom.find('input[name="newevent_end"]').val();

        data.dateStart  = year + '-' + (month) + '-' + date + 'T' + timeStart + ':00.000Z';
        data.dateEnd  = year + '-' + (month) + '-' + date + 'T' + timeEnd + ':00.000Z';

        data.room = $neweventFrom.find('input[name="newevent_room"]').val();
        
        return data;
    }

    function getMember(id) {
        $(this).addClass('hidden');

        $dropdownSelectOption.filter(function(){
            return $(this).val() == id
        }).attr('selected', 'selected');

        $membersItem.filter(function(){
            return $(this).data('id') == id
        }).removeClass('hidden');

        $dropdowmContainer.removeClass('active');
        $dropdowmInput.val('');
    }

    function removemembers(id) {
        $dropdownSelectOption.filter(function(){
            return $(this).val() == id
        }).attr('selected', false);

        $dropdownItem.filter(function(){
            return $(this).data('id') == id
        }).removeClass('hidden');
    }

    function liveSearch() {
        var filter = $dropdowmInput.val();

        $dropdownItem.each(function(){
            if ($(this).text().search(new RegExp(filter, "i")) < 0) {
                $(this).fadeOut();
            } else {
                $(this).show();
            }
        });

        scrollBar.recalculate();
    }
    // -- newevent Functions -- //

    function updateChangeblVars() {
        _colLeftWidth = $colLeft.outerWidth(true);
    }

    function bindEvents() {
        $addEventBtn.on('click', function(e) {
            e.preventDefault();
            var $this = $(this),
                $thisParent = $(this).parent();

            var empty = $this.data('type') ? true : false;

            var data = {
                empty: empty
            };

            if (!empty) {
                data.dateStart = $thisParent.data('timestart'),
                data.dateEnd = $thisParent.data('timeend'),
                data.roomId = $thisParent.data('roomid')
            }

            $.ajax({
                url: '/newevent',
                type: 'POST',
                data: data,
                success: function(data){
                    $body.addClass('overflow');
                    $('.js-popup').html(data.html).show();
                    neweventInit();
                }
            });
        })

        //popup buttons action 
        $('body').on('click', '.js-popup-close', function(e) {
            e.preventDefault();
            $popup.html('');
            $body.removeClass('overflow');
        })

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
            var eventId = $(this).data('eventid');
            var $this = $(this);

            var data = {
                eventId: eventId
            }

            if ($this.hasClass('busy')) {
                if ($this.hasClass('active')) {
                    closeTooltip();
                } else {
                    console.log(data);

                    $.ajax({
                        url: '/tooltip',
                        type: 'POST',
                        data: data,
                        success: function(data){
                            console.log(data);
                            $tooltipWrapper.html(data.html).addClass('active');
                            $eventItem.removeClass('active');
                            $this.addClass('active');
                            openTooltip(position);
                        }
                    });
                }
            } 
        })

        $schedule.on('scroll', function() {
            var scrollLeft = $(this).scrollLeft();

            if (scrollLeft > _colLeftWidth && !scheduleScrollFlag) {
                $eventsRoom.show();
                $eventsFloor.show();
                scheduleScrollFlag = true;
            } else if (scrollLeft <= _colLeftWidth && scheduleScrollFlag) {
                $eventsRoom.hide();
                $eventsFloor.hide();
                scheduleScrollFlag = false;
            }

            $eventsRoom.css({
                left: scrollLeft - _colLeftWidth + 5 + 'px'
            });

            $eventsFloor.css({
                left: scrollLeft - _colLeftWidth + 5 + 'px'
            });
        })

        $(window).on('resize', function() {
            updateChangeblVars();
            closeTooltip();

        });
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
        $('.js-tooltip').css({
            top: position.top + 26 + 'px',
            left: position.left + position.width / 2 - 338 / 2 + 'px'
        })
        if ($(window).width() < 415) {
            $('.js-tooltip-triangle').css({
                left: position.left + position.width / 2 - 4 + 'px'
            })
        }

        $tooltip.fadeIn(200);
    }

    function closeTooltip() {
        console.log(123);
        $tooltipWrapper.html('').removeClass('active');;
        $eventItem.removeClass('active');
    }

    // function removeScroll() {
    //     var _mainHeight = $('.main').height();
    //     console.log(_mainHeight);
    //     $('.main').css({
    //         overflow: 'hidden'
    //     })
    //     $('.js-schedule').css({
    //         'height': _mainHeight - 20 + 'px',
    //         'paddin-bottom': '20px'
    //     })
    // }

    init();

})