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
