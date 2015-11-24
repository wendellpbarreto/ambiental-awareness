(function() {
    var clickable = {
        elements: document.querySelectorAll('[data-href]'),

        redirect_to: function(href, target) {
            target = target || "";
            clickable.simulate_anchor(href, target);
        },

        simulate_anchor: function(href, target) {
            var anchor = document.createElement("a");
            anchor.setAttribute('href', href);
            anchor.setAttribute('target', target);
            anchor.click();
        },

        init: function() {
            for (var i = 0; i < this.elements.length; i++) {
                var element = this.elements[i];
                element.style.cursor = 'pointer';
                element.addEventListener('click', function() {
                    if ($(this).attr('data-target') == "_blank") {
                        var win = window.open($(this).attr('data-href'), '_blank');
                        win.focus();
                    } else {
                        window.location = $(this).attr('data-href');
                    }
                    // clickable.redirect_to(
                    //     this.getAttribute('data-href'),
                    //     this.getAttribute('data-target')
                    // );
                }, false);
            }
        }
    };

    clickable.init();
})();
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


function scrollHandler() {
  var scrollTop = $(window).scrollTop();

  var topbar = $('#topbar');
  var topbarHeight = topbar.outerHeight();

	if (scrollTop > topbarHeight) {
		classie.add(topbar[0], 'fixed-topbar');
	} else {
		classie.remove(topbar[0], 'fixed-topbar');
	}
}

$(window).scroll(scrollHandler);

/*
 * Scroll To
 *
 * When a 'data-scroll-to' element is
 * activated (by click), scroll page to
 * his element.
 *
 * data-scroll-to="#<id>"
 * data-offset="<offset>"
 * data-time="<time>"
 *
 * ------------------------------ */

 $(document).ready(function(ev){
   $('[data-scroll-to]').css('cursor', 'pointer');
 });

 $(document).on('click', '[data-scroll-to]', function(ev) {
  ev.preventDefault();

  var $scope = $('html, body');
  var $target = $($(this).attr('data-scroll-to'));
  var diff = $(this).attr('data-scroll-diff');
  console.log(diff);

  if (!diff) {
  	diff = 0;
	}

  if ( $(this).closest('.fixed-navbar').length > 0 ) {
  	diff = 94;
  }
  $scope.animate({
    scrollTop: $target.offset().top - diff
  }, 500);
});
