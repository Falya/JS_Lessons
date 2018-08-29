$(document).ready(function() {
    $('.main_nav li:eq(1)').on('click', modalAppearence);
    $('.main_btn').on('click', modalAppearence);
    $('a[href="#tour"]').on('click', modalAppearence);
    $('.close').on('click', modalDisAppearence);

    function modalAppearence() {
        $('.overlay').css({
            display: 'block',
            opacity: '0'
        }).animate({ opacity: 1 }, 1000);

        $('.modal').css('top', '-700px').show().animate({ top: '150px' }, 700, function() {
            $('.modal').animate({ top: '-=100' }, 300);
        });
    }

    function modalDisAppearence() {
        $('.modal').animate({ top: '+=100px' }, 300, function() {
            $('.modal').animate({ top: '-700px' }, 700, () => {
                $('.modal').hide();
            });
            $('.overlay').fadeToggle('slow');
        });

    }
});