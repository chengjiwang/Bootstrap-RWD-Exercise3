$(document).ready(function() {
    function upShowToggle() {
         var scrollValue = $(this).scrollTop(),
            windowHeight = $(window).height()*0.5;
        if(window.innerWidth > 992){
            if (scrollValue > windowHeight) {
                $('#up').fadeIn();
            } else {
                $('#up').fadeOut();
            }
        }
    }
    function animation() {
        $('.animation').each(function () {
            if ($(window).width() > 900) {
                var delay = $(this).attr("data-delay"),            
                    hasAnimated = $(this).hasClass("animated");
                if (!hasAnimated) {        
                    $(this).delay(delay).queue(function () {
                        $(this).addClass('animated')
                    });
                }
            } else {
                $(this).addClass('animated');
            }
        });
    }

    $(window).scroll(function(){
        upShowToggle();
        animation();
    });

    $('#up').click(function(){
        $('html,body').animate({scrollTop:0}, 1000);
    });


 	$("#owl-slider").owlCarousel({
        autoPlay: 5000,
        navigation: true, 
        navigationText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
        slideSpeed: 500,
        pagination: false,
        // paginationSpeed: 500,
        responsive: true,
        singleItem: true
    }); 

    $("#owl-works").owlCarousel({
        items: 4,
        itemsDesktop: [1199, 3],
        itemsDesktopSmall: [979, 3],
        itemsTablet: [768, 2],
        itemsMobile: [479, 1],
        navigation: true,
        navigationText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
        pagination: false, //分頁
        // paginationSpeed : 800,
        slideSpeed: 700    
    });
});


