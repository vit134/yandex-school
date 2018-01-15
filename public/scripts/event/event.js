import SimpleBar from 'SimpleBar';

console.log('newevent');

var $body = $('body');

var $dropdowmContainer = $('#js-dropdown-container'),
    $dropdownItem = $('.js-dropdown-item'),
    $dropdowmInput = $('.js-dropdown-input'),
    $dropdownSelect = $('.js-newevent-select'),
    $dropdownSelectOption = $dropdownSelect.find('option'),
    $membersItem = $('.js-members-item'),
    $removeMemberBtn = $('.js-remove-member'),
    $calendarContainer = $('.js-calendar-container'),
    $inputArrow = $('.js-input-arrow'),
    $inputClear = $('.js-input-clear'),
    $footerButton = $('.js-event-btn');

var $popupWrapper = $('.js-popup-wrapper'),
    $popup = $('.js-popup'),
    $popupCanselBtn = $('.js-popup-close-button');

var scrollBar;

function init() {
    bindEvents();

    scrollBar = new SimpleBar($dropdowmContainer[0], {
        autoHide: false
    });

    var datepickekerOptions = $.extend(
        {},
        $.datepicker.regional[ "ru" ],
        {
            showOn: "both",
            buttonImage: "/public/styles/blocks/calendar/images/calendar.svg",
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

function bindEvents() {

    $dropdowmInput.on('click', function() {
        $dropdowmContainer.addClass('active');
    })

    $(document).mouseup(function(e) {
        if ($dropdowmContainer.is(':visible') && !$dropdowmContainer.is(e.target) && $dropdowmContainer.has(e.target).length === 0) {
            $dropdowmContainer.removeClass('active');
            $inputArrow.hide();
        }
    });

    $dropdownItem.on('click', function(e) {
        e.preventDefault();
        $inputArrow.hide();
        getMember($(this).data('id'));
        $(this).addClass('hidden')
    });

    $removeMemberBtn.on('click', function(e) {
        e.preventDefault();
        removemembers($(this).parent().data('id'));
        $(this).parent().addClass('hidden');
    })

    $dropdowmInput.on('click keyup paste', liveSearch);

    $inputClear.on('click', function() {
        $dropdowmInput.val('').trigger('click');
        $(this).hide();

    })

    $footerButton.on('click', function(e) {
        e.preventDefault();
        var _target = $(this).data('target')
        console.log('[data-target="' + _target + '"]');

        $body.addClass('overflow');
        $popup.filter('[data-target="' + _target + '"]').show();
        $popupWrapper.fadeIn(200);

    })

    $popupCanselBtn.on('click', function() {
        $popup.hide();
        $popupWrapper.hide();
        $body.removeClass('overflow');
    })
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

init();



