$(document).ready(function() {
    $(".work-gallery").flickity({
          cellAlign: "left",
          contain: true,
          pageDots: false
    });
    $(".box").on("touchstart", function() {
        $(this).toggleClass("hover");
    });

    $(".navTrigger").click(function(){
        $(this).toggleClass("active");
        $("nav .menu").toggleClass("active");
        if($(this).hasClass("active"))
            $("nav .name").addClass("active");
        else if($(window).scrollTop() > 500)
            $("nav .name").removeClass("active");
    });

    $(window).scroll(function() {
        if($(this).scrollTop() > 500) {
            if(!$("nav .menu").hasClass("active"))
                $("nav .name").removeClass("active");
        } else {
            $("nav .name").addClass("active");
        }
    });
    $(document).on('click', 'a[href^="#"]', function(e) {
        // target element id
        var id = $(this).attr('href');

        // target element
        var $id = $(id);
        if ($id.length === 0) {
            return;
        }

        // prevent standard hash navigation (avoid blinking in IE)
        e.preventDefault();

        // top position relative to the document
        var pos = $id.offset().top;

        // animated top scrolling
        $('body, html').animate({scrollTop: pos});
    });
});
