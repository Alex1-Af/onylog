if ($('#back-to-top').length) {
    var scrollTrigger = 100, // px
        backToTop = function () {
            var scrollTop = $(window).scrollTop();
            if (scrollTop > scrollTrigger) {
                $('#back-to-top').addClass('show');
            } else {
                $('#back-to-top').removeClass('show');
            }
        };
    backToTop();
    $(window).on('scroll', function () {
        backToTop();
    });
    $('#back-to-top').on('click', function (e) {
        e.preventDefault();
        $('html,body').animate({
            scrollTop: 0
        }, 1000);
    });
}
$(function(){
    $('a[href^="#"]').click(function(){
       var target = $(this).attr('href');
       $('html, body').animate({scrollTop: $(target).offset().top}, 1000);
       return false;
    });
 });
 
        
            //for counter up
            $('.counter').counterUp({
                delay: 10,
                time: 1000
            });
        
