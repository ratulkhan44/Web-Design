/*====================================
Preloader
====================================*/
$(window).on("load", function () { //make sure that whole site is loaded
    $("#status").fadeOut();
    $("#preloader").delay(350).fadeOut("slow");
})

/*====================================
Team Slide
====================================*/

$(function () {
    $("#team-members").owlCarousel({
        items: 2,
        autoplay: true,
        smartSpeed: 700,
        loop: true,
        autoplayHoverPause: true,
        nav: true,
        dots: false,
        navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
      
    });
});

/*====================================
        progress bar
====================================*/
$(function(){
    
    $("#progress-element").waypoint(function() {
        
        $(".progress-bar").each(function() {
      
            $(this).animate({
                width: $(this).attr("aria-valuenow")+"%"
            },1000); 
        });
        this.destroy();
        
    }, {
        offset: "bottom-in-view" 
    });
    
    
  });

/*====================================
       Responsive Tabs
====================================*/
$(function() {
    $('#services-tabs').responsiveTabs({
    startCollapsed: 'accordion',
    animation: 'slide'
});
    
});

/*====================================
      Isotop filtering
====================================*/

// init Isotope
$(window).on("load", function() {
    $('#isotop-container').isotope({
  
});

// filter items on button click
$('#isotop-filters').on( 'click', 'button', function() {
  var filterValue = $(this).attr('data-filter');
    $('#isotop-container').isotope({ filter: filterValue });
    
    $('#isotop-filters').find(".active").removeClass("active");
    $(this).addClass("active");
    
    });    
 
});

/*====================================
      Magnific-Popup
====================================*/

$(function() {
   $('#portfolio-wrapper').magnificPopup({
        delegate: 'a', // child items selector, by clicking on it popup will open
        type: 'image',
        gallery: {
            enabled:true    
        }      
  
}); 
});

/*====================================
            Testimonial
====================================*/

$(function () {
    $("#testimonial-slider").owlCarousel({
        items: 1,
        autoplay: false,
        smartSpeed: 700,
        loop: true,
        autoplayHoverPause: true,
        nav: true,
        dots: false,
        navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
      
    });
});

/*====================================
            Counter-up
====================================*/
$(function () {
	$('.counter').counterUp({
                delay: 10,
                time: 2000
            });
})

/*====================================
            Client
====================================*/

$(function () {
    $("#client-list").owlCarousel({
        items: 6,
        autoplay: false,
        smartSpeed: 700,
        loop: true,
        autoplayHoverPause: true,
        nav: true,
        dots: false,
        navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
      
    });
});




























