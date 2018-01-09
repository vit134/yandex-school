import SimpleBar from 'SimpleBar';

console.log('newevent');

var $dropdowmContainer = $('#js-dropdown-container'),
    $dropdownItem = $('.js-dropdown-item'),
    $dropdowmInput = $('.js-dropdown-input'),
    $dropdownSelect = $('.js-newevent-select'),
    $dropdownSelectOption = $dropdownSelect.find('option'),
    $membersItem = $('.js-members-item'),
    $removeMemberBtn = $('.js-remove-member');

var scrollBar;

function init() {
    bindEvents();

    scrollBar = new SimpleBar($dropdowmContainer[0], {
        autoHide: false
    });

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

init();



