/*
 *
 * Foundation
 * ----------------------- */
$(document).foundation();

/*
 *
 * Functions
 * ----------------------- */
var engineCarousel = function(){
	var heroCarouselImage = $('#hero .hero__carousel-image');
	var heroCarouselInfo = $('#hero .hero__carousel-info');
	var bookingCarousel = $('#booking .booking__carousel');

	heroCarouselImage.owlCarousel({
		items: 1,
		lazyLoad: true,
		loop: true,
		autoplay: true,
		autoplayTimeout: 7000,
		animateOut: 'fadeOut',
		animateIn: 'fadeIn',
		dotsClass: 'hero__carousel-dots',
		dotClass: 'hero__carousel-dot',
	}).on('changed.owl.carousel', function (e) {
      heroCarouselInfo.trigger('to.owl.carousel', [e.item.index, 100]);
  });

	heroCarouselInfo.owlCarousel({
		items: 1,
		loop: true,
		lazyLoad: true,
		autoplay: true,
		autoplayTimeout: 7000,
		animateOut: 'fadeOut',
		animateIn: 'fadeIn',
	});

	bookingCarousel.owlCarousel({
		lazyLoad: true,
		autoplay: false,
		loop: true,
		pagination: false,
    stagePadding: 0,
    dots: true,
    margin: 5,
		dotsClass: 'booking__carousel-dots',
		dotClass: 'booking__carousel-dot',
		responsive:{
      0:{
          items:1
      },
      500:{
          items:2
      },
      800:{
          items:3
      }
    }
	});
}

/*
 *
 * Document Ready
 * ----------------------- */
$(document).ready(function() {
	
});


/*
 *
 * Window Resize
 * ----------------------- */
$(window).resize(function(){

});
