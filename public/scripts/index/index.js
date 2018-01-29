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


    var SaveEditEventStart,
        SaveEditEventEnd;

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
        $roomRecommendReplaceItem,

        $validationBlock,
        $validationText,

        $inputArrow,
        $inputClear,

        scrollBar;

    var curentTime = new Date(),
        timeOffset = curentTime.getTimezoneOffset() / 60;

    function init() {
        updateIndexVars();
        bindEvents();
        bindCalendarIndexEvents();
        setCurrentTime();
        indexDatepickerInit();
        
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
                buttonImage: "../../../styles/blocks/event/images/calendar.svg",
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
        $roomRecommendReplaceItem = $('.js-room-recommend-replace');

        $validationBlock = $('.js-validation');
        $validationText = $('.js-validation-text');

        $inputArrow = $('.js-input-arrow'),
        $inputClear = $('.js-input-clear');
    }

    function bindNeweventEvents() {
        $('body').on('click', '.js-room-recommend-replace', function(e) {
            e.preventDefault();
            $('.js-room-recommend-replace').removeClass('active');

            var eventBusyId = $(this).data('eventbusy-id');
            var roomEmptyId = $(this).data('roomempty-id');
            var roomToNew = $(this).data('room-to-new');

            if (!$(this).hasClass('active')) {
                $(this).addClass('active');
                $neweventFrom.find('input[name="room_replace"]').val(eventBusyId + '_' + roomEmptyId);
                $neweventFrom.find('input[name="newevent_room"]').val(roomToNew);
            } else {
                $(this).removeClass('active');
                $neweventFrom.find('input[name="room_replace"]').val('');
                $neweventFrom.find('input[name="newevent_room"]').val('');
            }
        })

        $('#datepicker').on('click', function() {
            $neweventFrom.find($calendarContainer).show();
        })

        $('.js-newevent-time-start').on('blur', function() {
            var validate = validateForm();
            if (validate) {

                var data = getNeweventData();
                var getRecommend = checkEditRange();

                getRecommendation(data);
            }
        })

        $('.js-newevent-time-end').on('blur', function() {
            var validate = validateForm();

            if (validate) {
                var data = getNeweventData();

                var getRecommend = checkEditRange();
                getRecommendation(data);
            }
        })

        $('.js-newevent-date').on('change', function() {
            var validate = validateForm();
            if (validate) {

                var data = getNeweventData();
                var getRecommend = checkEditRange();

                getRecommendation(data);
            }
        })

        $('.js-newevent-theme').on('blur', validateForm)

        $dropdownSelect.on('change', function() {
            var validate = validateForm();

            if (validate) {
                var data = getNeweventData();

                var getRecommend = checkEditRange();

                getRecommendation(data);
            }
        })

        $('body').on('click', '.js-room-recommend-item', function(e) {
            e.preventDefault();
            $('.js-room-recommend-item').removeClass('active');

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

        $neweventFrom.on('submit', function(e, url) {
            e.preventDefault();
            var data = getNeweventData();
            var validate = validateForm();

            if ($(this)[0].checkValidity() && validate) {
                $.ajax({
                    url: url,
                    type: 'POST',
                    data: data,
                    beforeSend: function() {
                        console.log(data);
                    },
                    success: function success(data) {
                        $('.js-popup-wrapper').addClass('active');
                        var scheduleHtml = data.scheduleHtml,
                            poupHtml = data.popupHtml;

                        $('.js-schedule-wrapper').html(scheduleHtml);

                        $popup.html(poupHtml).addClass('small'); //.show();
                        $body.addClass('popup-open');
                        updateIndexVars();
                        bindEvents();
                        indexDatepickerInit();
                    }
                });
            }
        })

        $neweventSaveBtn.on('click', function(e) {
            e.preventDefault();
            var data = getNeweventData();
            $neweventFrom.trigger('submit', ['/createevent']);
        })

        $('input[name="newevent_topic"]').on('invalid', function() {
            $(this).addClass('error');
            openValidation($(this).data('validation-text'));
        })

        $('input[name="newevent_room"]').on('invalid', function() {
            openValidation($(this).data('validation-text'));
        })

        $('input[name="newevent_start"]').on('invalid', function() {
            $(this).addClass('error');
            openValidation($(this).data('validation-text'));
        })

        $('input[name="newevent_end"]').on('invalid', function() {
            $(this).addClass('error');
            openValidation($(this).data('validation-text'));
        })

        $('input[name="newevent_members_count"]').on('invalid', function() {
            openValidation($(this).data('validation-text'));
        })

        $('input[required]').on('change', function() {
            $(this).removeClass('error');
            closeValidation();
        })

        $editeventSaveBtn.on('click', function(e) {
            e.preventDefault();

            $neweventFrom.trigger('submit', ['/editeventSave']);
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
                $inputArrow.hide();
            }
        });

        $dropdownItem.on('click', function(e) {
            e.preventDefault();
            getMember($(this).data('id'));
            $inputArrow.hide();
            $(this).addClass('hidden');
            setCountMembers();
        });

        $inputClear.on('click', function() {
            $dropdowmInput.val('').trigger('click');
            $(this).hide();
        })

        $removeMemberBtn.on('click', function(e) {
            e.preventDefault();
            removemembers($(this).parent().data('id'));
            $(this).parent().addClass('hidden');
            setCountMembers();
        })

        $dropdowmInput.on('click keyup paste', liveSearch);
    }

    // -- newevent Functions -- //

    function openValidation(text) {
        $validationText.html(text);
        $validationBlock.addClass('active');
    }

    function closeValidation(text) {
        $validationBlock.removeClass('active');
    }

    function checkEditRange() {
        var status = false;

        var timeStatus = false,
            userStatus = false;

        var inputStartHour = parseInt($('.js-newevent-time-start').val().split(':')[0]),
            inputEndHour = $('.js-newevent-time-end').val().split(':')[0],
            initialStartValue = new Date(SaveEditEventStart).getHours() - 3,
            initialEndValue = new Date(SaveEditEventStart).getHours() - 3;

        var capMin = $('input[name="cap_min"]').val(),
            capMax = $('input[name="cap_max"]').val();

        var users = [];

        $.each($('.js-newevent-select-option'), function(i, el) {
            if ($(el).is(':selected')) {
                users.push(el);
            }
        })

        if (inputStartHour >= initialStartValue && inputEndHour >= initialEndValue) {
            timeStatus = true;
        }

        if (users.length <= capMax && users.length >= capMin) {
            userStatus = true;
        }

        if (timeStatus && userStatus) {
            return false;
        } else {
            return true;
        }

    }

    function getRecommendation(data) {
        $.ajax({
            url: '/getRecommendation',
            type: 'POST',
            data: data,
            beforeSend: function() {},
            success: function(data){
                $('.js-room-recommend').html(data.recommendHtml).removeClass('hidden');
                $('.js-room-current').addClass('hidden');
                $neweventFrom.find('input[name="newevent_room"]').val('');
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

        var startHour = parseInt($eventStart.val().split(':')[0]),
            endHour = parseInt($eventEnd.val().split(':')[0]),
            startMinute = parseInt($eventStart.val().split(':')[1]),
            endMinute = parseInt($eventEnd.val().split(':')[1]);

        var startTime = startHour + '.' + startMinute,
            endTime = endHour + '.' + endMinute;

        if (!timeRegExp.test($eventStart.val())) {
            $eventStart.addClass('error');
            openValidation('Неверный формат времени')
        } else if (startTime < 8 || startTime > 22.45) {
            $eventStart.addClass('error');
            openValidation('Встреча может быть с 8:00 до 23:00')
        } else if (startMinute%15 != 0) {
            $eventStart.addClass('error');
            openValidation('Время начала и конца встречи должны быть кратны 15 минутам')
        } else {
            $eventStart.removeClass('error');
            status++;
        }

        if (!timeRegExp.test($eventEnd.val())) {
            $eventEnd.addClass('error');
            openValidation('Неверный формат времени')
        } else if (endTime < 8.15 || endTime > 23) {
            $eventEnd.addClass('error');
            openValidation('Встреча может быть с 8:00 до 23:00')
        } else if (endMinute%15 != 0) {
            $eventEnd.addClass('error');
            openValidation('Время начала и конца встречи должны быть кратны 15 минутам')
        } else {
            $eventEnd.removeClass('error');
            status++;
        }

        if (status === 2) {
            $neweventSaveBtn.removeClass('disabled')
            return true;
        } else {
            $neweventSaveBtn.addClass('disabled')
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

        var $roomReplace = $neweventFrom.find('input[name="room_replace"]'),
            busyEventId,
            emptyRoomId;

        if ($roomReplace.length > 0 && $roomReplace.val() != '') {
            busyEventId = $roomReplace.val().split('_')[0],
            emptyRoomId = $roomReplace.val().split('_')[1];

            data.roomReplace = {
                busyEventId: busyEventId,
                emptyRoomId: emptyRoomId
            }
        }


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

    function setCountMembers() {
        var selectedMembers =  $neweventFrom.find('.js-newevent-select-option').map((i, elem) => {
            if ($(elem).is(":selected")) {
                return elem;
            }
        });

        $('input[name="newevent_members_count"]').val(selectedMembers.length);
    }

    function liveSearch() {
        var filter = $dropdowmInput.val(),
            count = 0;

        $dropdownItem.each(function(){
            if ($(this).text().search(new RegExp(filter, "i")) < 0) {
                $(this).fadeOut();
            } else {
                $(this).show();
                count++;
            }
        });

        if (count === 0) {
            $dropdowmInput.addClass('can-clear');
            $inputArrow.hide();
            $inputClear.show();
        } else {
            $dropdowmInput.removeClass('can-clear');
            $inputArrow.show();
        }

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

    function bindEditEventEvents() {
        $editEventBtn.on('click', function(e) {
            e.preventDefault();
            var eventId = $(this).parent().data('eventid');
            var roomId = $(this).parent().data('roomid');
            var from = $(this).data('from');

            $.ajax({
                url: '/editevent',
                type: 'POST',
                data: {eventId: eventId, roomId: roomId, from: from},
                success: function(data){

                    closeTooltip();
                    $('body').addClass('overflow popup-open');
                    $('.js-popup').html(data.html).show();
                    neweventInit();

                    var editEventDate = getNeweventData();
                    SaveEditEventStart = editEventDate.dateStart
                    SaveEditEventEnd = editEventDate.dateEnd
                }
            });
        })
    }

    function indexDatepickerInit() {
        var datepickekerOptions = $.extend(
            {},
            $.datepicker.regional[ "ru" ],
            {
                showOtherMonths: true,
                selectOtherMonths: true,
                defaultDate: new Date(),
                numberOfMonths: 3,
                showCurrentAtPos: 1,
                onSelect: function(date, obj) {

                    var selectDate = obj.selectedDay + '-' + obj.selectedMonth + '-' + obj.selectedYear;
                    var currentDate = obj.currentDay + '-' + obj.currentMonth + '-' + obj.currentYear;

                    $calendarToogle.html(date).removeClass('open');
                    $calendarContainer.datepicker('hide').hide();

                    changeSchedule($calendarContainer.datepicker('getDate'));
                    updateIndexVars();
                    bindEvents();
                }
            }
        )

        $calendarContainer.datepicker(datepickekerOptions);
    }

    function bindCalendarIndexEvents() {
        $calendarNextDay.on("click", function () {
            var date = $calendarContainer.datepicker('getDate');
            date.setTime(date.getTime() + (1000*60*60*24))
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
                    $.ajax({
                        url: '/tooltip',
                        type: 'POST',
                        data: data,
                        success: function(data){
                            $tooltipWrapper.html(data.html).addClass('active');
                            $eventItem.removeClass('active');
                            $this.addClass('active');
                            openTooltip(position);
                            updateIndexVars();
                            bindEditEventEvents()
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
                var from = $this.data('from')
                var data = {
                    from: from
                };

                data.dateStart = $this.data('timestart'),
                data.dateEnd = $this.data('timeend'),
                data.roomId = $this.data('roomid');

                $.ajax({
                    url: '/newevent',
                    type: 'POST',
                    data: data,
                    success: function(data){
                        $body.addClass('overflow popup-open');
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
            $popup.removeClass('small').html('').hide();
            $body.removeClass('overflow popup-open');
            $('.js-popup-wrapper').removeClass('active');
            updateIndexVars();
        })

        $(document).mouseup(function(e) {
            if (!$eventItem.is(e.target) && $eventItem.has(e.target).length === 0 && !$editEventBtn.is(e.target)) {
                $eventItem.removeClass('active');
                closeTooltip();
            }
        });

        $schedule.on('scroll', function() {
            var scrollLeft = $(this).scrollLeft();
            _colLeftWidth = $colLeft.outerWidth(true);
            closeTooltip();

            if (scrollLeft > _colLeftWidth && !scheduleScrollFlag) {
                $eventsRoom.show();
                $eventsFloor.show();
                scheduleScrollFlag = true;
            } else if (scrollLeft <= _colLeftWidth && scheduleScrollFlag) {
                $eventsRoom.hide().css({left: 0});
                $eventsFloor.hide().css({left: 0});
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

        var tooltipHeight;

        $('.js-tooltip').css({
            top: position.top + 26 + 'px',
            left: position.left + position.width / 2 - 338 / 2 + 'px',
            visibility: 'hidden'
        }).show();

        tooltipHeight = $('.js-tooltip').outerHeight();

        if ($(window).scrollTop() + $(window).outerHeight() < position.top + tooltipHeight + 20 + 26) {
            $('.js-tooltip').css({
                top: position.top - tooltipHeight
            }).addClass('bottom');
        }

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

        $('.js-tooltip').css({visibility: 'visible'});
    }

    function closeTooltip() {
        $tooltipWrapper.html('').removeClass('active');;
        $eventItem.removeClass('active');
    }

    init();

})