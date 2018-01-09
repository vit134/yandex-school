'use strict';

var _SimpleBar = require('SimpleBar');

var _SimpleBar2 = _interopRequireDefault(_SimpleBar);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

console.log('newevent');

var $dropdowmContainer = $('#js-dropdown-container'),
    $dropdowmItem = $('.js-dropdown-item'),
    $dropdowmInput = $('.js-dropdown-input');

var memberTmp = require('../../../app/blocks/calendar/main.twig');

function init() {

    var scrollBar = new _SimpleBar2.default($dropdowmContainer[0], {
        autoHide: false
    });

    bindEvents();
}

function bindEvents() {

    $dropdowmInput.on('click', function () {
        $dropdowmContainer.addClass('active');
    });

    $(document).mouseup(function (e) {
        if (!$dropdowmContainer.is(e.target) && $dropdowmContainer.has(e.target).length === 0) {
            $dropdowmContainer.removeClass('active');
        }
    });

    $dropdowmItem.on('click', function (e) {
        e.preventDefault();

        console.log('click');
        console.log(memberTmp);
        //$('.js-members-container').html(memberTmp.render());
    });
}

init();