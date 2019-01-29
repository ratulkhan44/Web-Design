/*===========================
			Services
=============================*/

$(function() {
	
	new WOW().init();
	
});


/*===========================
			Isotop
=============================*/

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

$(function() {
   $('#portfolio-wrapper').magnificPopup({
        delegate: 'a', // child items selector, by clicking on it popup will open
        type: 'image',
        gallery: {
            enabled:true    
        }      
  
}); 
});

/*===========================
			Team
=============================*/

$(function () {
	$("#team-members").owlCarousel({
		items: 3,
        autoplay: true,
        smartSpeed: 700,
        loop: true,
        autoplayHoverPause: true,
        dots: true,
	});
	
});

/*===========================
			Testimonual
=============================*/
$(function () {
	$("#cutomers-testimonials").owlCarousel({
		items: 1,
        autoplay: true,
        smartSpeed: 700,
        loop: true,
        autoplayHoverPause: true,
        dots: true,
	});
	
});


/*===========================
			Team
=============================*/

$(function () {
	$('.count').counterUp({
    delay: 10,
    time: 2000,
	});
});

/*===========================
			Clients
=============================*/

$(function () {
	$("#client-logo").owlCarousel({
		items: 6,
        autoplay: true,
        smartSpeed: 700,
        loop: true,
        autoplayHoverPause: true,
        dots: true,
	});
	
});




















