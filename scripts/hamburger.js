$(function () {

    $(".hamburger").on('click',function () {
        $(this).toggleClass('is-active');

        if($(this).hasClass('is-active')){
            $('.menu_top').slideDown(300)
        }else{
            $('.menu_top').slideUp(300)
        }
    });
});