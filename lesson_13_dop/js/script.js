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

        $('.modal').css('top', '-700px').show().animate({ top: '150px', left: '-5%' }, 700, function() {
            $('.modal').animate({ top: '-=100', left: '0' }, 300);
        });
    }

    function modalDisAppearence() {
        $('.modal').animate({ top: '+=100px', left: '5%' }, 300, function() {
            $('.modal').animate({ top: '-700px', left: '0' }, 700, () => {
                $('.modal').hide();
            });
            $('.overlay').fadeToggle('slow');
        });
    }

    //Отправка c формы
   
   $('.form-inline').submit( (e) => {
    e.preventDefault();
    $.post( 'server.php', $('.form-inline').serialize(), function() {
      console.log('Отравка...');
       })
          .done( () => {
           console.log('Отправлено!');
          })
          .fail(() => {
            console.log('Что-то пошло не так!');
          });
});
});