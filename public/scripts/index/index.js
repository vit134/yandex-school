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
        $eventRow = $('.js-main-events-row'),
        $eventRoom = $('.js-main-events-room'),
        $schedule = $('.js-schedule'),
        $eventsRoom = $('.js-events-room'),
        $eventsFloor = $('.js-events-floor'),
        $colLeft = $('.js-col-left'),

        $addEventBtn = $('.js-add-event-btn'),
        $editEventBtn = $('.js-edit-event-btn');

    //poup vars
    var $popup = $('.js-popup');

    var currentTime = new Date(),
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
        $editeventSaveBtn,
        $deleteEventBtn,

        $popupDeleteCanselBtn,
        $popupDeleteSaveBtn,

        $removeRoom,
        $roomRecommendBlock,
        $roomCurrentBlock,
        $roomRecommendItem,

        scrollBar;

    function init() {
        updateIndexVars();
        bindEvents();
        bindCalendarIndexEvents();
        setCurrentTime();

        var datepickekerOptions = $.extend(
            {},
            $.datepicker.regional[ "ru" ],
            {
                showOtherMonths: true,
                selectOtherMonths: true,
                defaultDate: new Date(),
                onSelect: function(date, obj) {

                    var selectDate = obj.selectedDay + '-' + obj.selectedMonth + '-' + obj.selectedYear;
                    var currentDate = obj.currentDay + '-' + obj.currentMonth + '-' + obj.currentYear;

                    $calendarToogle.html(date).removeClass('open');
                    $calendarContainer.datepicker('hide').hide();

                    changeSchedule($calendarContainer.datepicker('getDate'));
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
                    $neweventFrom.find($calendarContainer).append($(instance.dpDiv)).show();
                },
                onClose: function() {
                    $neweventFrom.find($calendarContainer).hide();
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
        $editeventSaveBtn = $('.js-saveedit-event-btn');
        $deleteEventBtn = $('.js-delete-event-btn');

        $popupDeleteCanselBtn = $('.js-popup-delete-cansel-btn');
        $popupDeleteSaveBtn = $('.js-popup-delete-save-btn');

        $removeRoom = $('.js-newevent-remove-room');
        $roomRecommendBlock = $('.js-room-recommend');
        $roomCurrentBlock = $('.js-room-current');
        $roomRecommendItem = $('.js-room-recommend-item');
    }

    function bindNeweventEvents() {
        $('.js-newevent-time-start').on('blur', function() {
            console.log('start blur')
            var validate = validateForm();

            if (validate) {

                var data = getNeweventData();
                console.log(data);
                getRecommendation(data);
            }
        })

        $('.js-newevent-time-end').on('blur', function() {
            console.log('end blur')
            var validate = validateForm(); 

            if (validate) {
                var data = getNeweventData();
                console.log(data);
                getRecommendation(data);
            }
        })

        $dropdownSelect.on('change', function() {
            console.log('users change')
            var validate = validateForm();

            if (validate) {
                var data = getNeweventData();
                console.log(data);
                getRecommendation(data);
            }
        })

        $('body').on('click', '.js-room-recommend-item', function(e) {
            e.preventDefault();
            $roomRecommendItem.removeClass('active');

            if (!$(this).hasClass('active')) {
                $(this).addClass('active');
                $neweventFrom.find('input[name="newevent_room"]').val($(this).data('room-id'));
            } else {
                $(this).removeClass('active');
                $neweventFrom.find('input[name="newevent_room"]').val('');
            }

        })
        $removeRoom.on('click' ,function(e) {
            e.preventDefault();

            $roomCurrentBlock.hide();
            $roomRecommendBlock.removeClass('hidden');

            $neweventFrom.find('input[name="newevent_room"]').val('');
        })

        $neweventSaveBtn.on('click', function(e) {
            e.preventDefault();
            var data = getNeweventData();

            //validateForm($neweventFrom);

            $.ajax({
                url: '/createevent',
                type: 'POST',
                data: data,
                success: function(data){
                    var scheduleHtml = data.scheduleHtml,
                        poupHtml = data.popupHtml;

                    $('.js-schedule-wrapper').html(scheduleHtml);

                    $popup.html(poupHtml).addClass('small')//.show();
                    updateIndexVars();
                    bindEvents();
                }
            });
        })

        $editeventSaveBtn.on('click', function(e) {
            e.preventDefault();
            var data = getNeweventData();
            console.log(data);
            $.ajax({
                url: '/editeventSave',
                type: 'POST',
                data: data,
                success: function(data){
                    var scheduleHtml = data.scheduleHtml,
                        poupHtml = data.popupHtml;

                    $('.js-schedule-wrapper').html(scheduleHtml);

                    $popup.html(poupHtml).addClass('small')//.show();
                    updateIndexVars();
                    bindEvents();
                }
            });
        })

        $deleteEventBtn.on('click', function(e) {
            e.preventDefault();

            var eventID = $neweventFrom.find('input[name="event_id"]').val();

            $('.js-popup-wrapper').addClass('active');
            $('.js-popup-delete').show().find('input[name="event_id"]').val(eventID);
        })

        $popupDeleteCanselBtn.on('click', function(e) {
            e.preventDefault();

            $('.js-popup-wrapper').removeClass('active');
            $('.js-popup-delete').hide().find('input[name="event_id"]').val('');
        })

        $popupDeleteSaveBtn.on('click', function(e) {
            e.preventDefault();

            var eventId = $(this).closest('.js-popup-delete').find('input[name="event_id"]').val();
            console.log(eventId);

            $.ajax({
                url: '/deleteEvent',
                type: 'POST',
                data: {eventId: eventId},
                success: function(data){
                    var scheduleHtml = data.scheduleHtml;

                    $('.js-schedule-wrapper').html(scheduleHtml);

                    $popup.html('').hide();
                    $('.js-popup-wrapper').removeClass('active');
                    $('.js-popup-delete').hide().find('input[name="event_id"]').val('');
                    updateIndexVars();
                    bindEvents();
                }
            });



            $('.js-popup-wrapper').removeClass('active');
            $('.js-popup-delete').hide().find('input[name="event_id"]').val('');
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
    function getRecommendation(data) {
        $.ajax({
            url: '/getRecommendation',
            type: 'POST',
            data: data,
            beforeSend: function() {
                console.log('before send', data)
            },
            success: function(data){
                console.log('data getRecommendation',data);
                $('.js-room-recommend').html(data.recommendHtml).removeClass('hidden');
                $('.js-room-current').addClass('hidden');
                $neweventFrom.find('input[name="newevent_room"]').val('');
                // closeTooltip();
                // $body.addClass('overflow');
                // $('.js-popup').html(data.html).show();
                // neweventInit();
            }
        });
    }

    function validateForm() {
        var timeRegExp = /^(([0,1][0-9])|(2[0-3])):[0-5][0-9]$/;

        var $eventStart = $neweventFrom.find('input[name="newevent_start"]');
        var $eventEnd = $neweventFrom.find('input[name="newevent_end"]');
        var $eventRoom = $neweventFrom.find('input[name="newevent_room"]');
        var $eventTitle = $neweventFrom.find('input[name="newevent_topic"]');
        var status = 0;

        if (!timeRegExp.test($eventStart.val())) {
            $eventStart.addClass('error');
        } else {
            $eventStart.removeClass('error');
            status++;
        }

        if (!timeRegExp.test($eventEnd.val())) {
            $eventEnd.addClass('error');
        } else {
            $eventEnd.removeClass('error');
            status++;
        }

        // if ($eventRoom.val() === '') {
        //     alert('вы не выбрали переговорку');
        // } else {
        //     status++;
        // }

        // if ($eventTitle.val() === '') {
        //     $eventTitle.addClass('error');
        //     alert('вы не указали тему встречи');
        // } else {
        //     $eventTitle.removeClass('error');
        //     status++;
        // }

        if (status === 2) {
            return true;
        } else {
            return false;
        }
    }

    function getNeweventData() {
        var data = {};
        data.eventId = $neweventFrom.find('input[name="event_id"]').val();
        data.eventTitle = $neweventFrom.find('input[name="newevent_topic"]').val();
        data.members = [];
        $neweventFrom.find('.js-newevent-select-option').map((i, elem) => {
            if ($(elem).is(":selected")) {
                data.members.push({id:$(elem).val(), homeFloor: $(elem).data('floor')});
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

        $dropdownSelect.trigger('change');

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
        $dropdownSelect.trigger('change');

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

    function updateIndexVars() {
        _colLeftWidth = $colLeft.outerWidth(true);

        $hours = $('.js-hours');
        $hoursCurrentItem = $('.js-hours-current');
        $hoursItem = $('.js-hours-item');
        $calendarContainer = $('.js-calendar-container');
        $calendarToogle = $('.js-calendar-toggle');
        $calendarPrevDay = $('.js-calendar-prev');
        $calendarNextDay = $('.js-calendar-next');
        $tooltip = $('.js-tooltip');
        $tooltipWrapper = $('.js-tooltip-wrapper');
        $tooltipTriangle = $('.js-tooltip-triangle');
        $eventItem = $('.js-event-item');
        $eventRow = $('.js-main-events-row'),
        $eventRoom = $('.js-main-events-room'),
        $schedule = $('.js-schedule');
        $eventsRoom = $('.js-events-room');
        $eventsFloor = $('.js-events-floor');
        $colLeft = $('.js-col-left');

        $addEventBtn = $('.js-add-event-btn'),
        $editEventBtn = $('.js-edit-event-btn');
    }

    function bindCalendarIndexEvents() {
        $calendarNextDay.on("click", function () {
            var date = $calendarContainer.datepicker('getDate');
            date.setTime(date.getTime() + (1000*60*60*24))
            console.log(date);
            $calendarContainer.datepicker("setDate", date);
            $('.ui-datepicker-current-day').click();
            $calendarContainer.datepicker( "refresh" );

        });

        $calendarPrevDay.on("click", function () {
            var date = $calendarContainer.datepicker('getDate');
            date.setTime(date.getTime() - (1000*60*60*24))
            $calendarContainer.datepicker("setDate", date);
            $('.ui-datepicker-current-day').click();
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
        })
    }

    function bindEvents() {
        $eventItem.on('mouseover', function() {
            var roomId = $(this).closest($eventRow).data('room-id');
            $eventRoom.filter('[data-room-id="'+ roomId +'"]').addClass('active');
        })

        $eventItem.on('mouseout', function() {
            var roomId = $(this).closest($eventRow).data('room-id');
            $eventRoom.filter('[data-room-id="'+ roomId +'"]').removeClass('active');
        })

        $eventItem.on('click', function() {
            console.log('$eventItem click');
            var position = getEventItemPosition($(this));
            var eventId = $(this).data('eventid');
            var $this = $(this);

            var data = {
                eventId: eventId
            }

            if ($this.hasClass('busy')) {
                if ($this.hasClass('active')) {
                    console.log('close')
                    closeTooltip();
                } else {
                    console.log('open');

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

                            updateIndexVars();

                            $editEventBtn.on('click', function(e) {
                                console.log('editeventbtn click');
                                e.preventDefault();
                                var eventId = $(this).parent().data('eventid');
                                var from = $(this).data('from');

                                $.ajax({
                                    url: '/editevent',
                                    type: 'POST',
                                    data: {eventId: eventId, from: from},
                                    success: function(data){
                                        console.log('data edit',data);
                                        closeTooltip();
                                        $body.addClass('overflow');
                                        $('.js-popup').html(data.html).show();
                                        neweventInit();
                                    }
                                });
                            })
                        }
                    });
                }
            }
        })

        $addEventBtn.on('click', function(e) {
            e.preventDefault();
            var $this = $(this),
                $thisParent = $(this).parent();

            if (!$this.hasClass('busy')) {
                console.log('$addEventBtn click');
                var from = $this.data('from')
                var data = {
                    from: from
                };

                data.dateStart = $this.data('timestart'),
                data.dateEnd = $this.data('timeend'),
                data.roomId = $this.data('roomid')


                $.ajax({
                    url: '/newevent',
                    type: 'POST',
                    data: data,
                    success: function(data){
                        console.log('data add', data);
                        $body.addClass('overflow');
                        $('.js-popup').html(data.html).show();
                        closeTooltip();
                        neweventInit();
                    }
                });
            }
        })

        //popup buttons action
        $('body').on('click', '.js-popup-close', function(e) {
            e.preventDefault();
            $popup.removeClass('small').html('');
            $body.removeClass('overflow');
        })

        $(document).mouseup(function(e) {
            if (!$eventItem.is(e.target) && $eventItem.has(e.target).length === 0 && !$editEventBtn.is(e.target)) {
                $eventItem.removeClass('active');
                closeTooltip();
            } /*else if ($editEventBtn.is(e.target)) {
                $editEventBtn.trigger('click');
            }*/
        });

        $schedule.on('scroll', function() {
            var scrollLeft = $(this).scrollLeft();
            closeTooltip();
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
            updateIndexVars();
            closeTooltip();

        });
    }


    //index functions

    function changeSchedule(date) {
        $.ajax({
            url: '/getFloors',
            type: 'POST',
            data: {date: date},
            success: function(data){
                console.log(data);
                var scheduleHtml = data.scheduleHtml;

                $('.js-schedule-wrapper').html(scheduleHtml);

                updateIndexVars();
                bindEvents();
                setCurrentTime();
            }
        });
    }

    function setCurrentTime() {
        if (currentHour > 8 && currentHour < 23 ) {

            $hoursCurrentItem.css({left: currentHour * _oneHour + currentMinute * _oneMinute - _startPoint + '%'}).show();

            $hoursItem.map((key, item) => {
                var $item = $(item),
                    _itemTime = $(item).data('time').split(':')[0];

                if (currentHour >= _itemTime) {
                    $item.addClass('past');
                }

            });
        }
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

            if (position.left + position.width > $(window).width()) {
                $('.js-tooltip-triangle').css({
                    left: position.left + 20  + 'px'
                })
            } else {
                $('.js-tooltip-triangle').css({
                    left: position.left + position.width / 2 - 4 + 'px'
                })
            }
        }

        $tooltip.fadeIn(200);
    }

    function closeTooltip() {
        $tooltipWrapper.html('').removeClass('active');;
        $eventItem.removeClass('active');
    }

    init();

})