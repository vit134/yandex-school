import SimpleBar from 'SimpleBar';

console.log('newevent');

var $dropdowmContainer = $('#js-dropdown-container'),
    $dropdowmItem = $('.js-dropdown-item'),
    $dropdowmInput = $('.js-dropdown-input');

function init() {

    var scrollBar = new SimpleBar($dropdowmContainer[0], {
        autoHide: false
    });

    bindEvents();
}

function bindEvents() {

    $dropdowmInput.on('click', function() {
        $dropdowmContainer.addClass('active');
    })

    $(document).mouseup(function(e) {
        if (!$dropdowmContainer.is(e.target) && $dropdowmContainer.has(e.target).length === 0) {
            $dropdowmContainer.removeClass('active');
        }
    });

    $dropdowmItem.on('click', function(e) {
        e.preventDefault();

        console.log('click');
    });
}

init();



