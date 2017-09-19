$(document).ready(function() {
	
	//Mobile menu
	$('.hamburger').click(function() {
		$(this).toggleClass('is-active');
		$('.menu, .search').fadeToggle(400);
		$('.header-bottom').toggleClass('bg-mob-menu');
	});

	$(window).resize(function() {
		$('.header-bottom').removeClass('bg-mob-menu');
		if ($(window).width() < 1024) {
			$('.menu, .search').fadeOut(400);
			$('.hamburger').removeClass('is-active');
			// $('.menu a').click(function() {
			// 	$('.menu, .search').fadeOut(400);
			// });
		} else {
			$('.search, .menu').show();
			// $('.menu a').click(function() {
			// 	$('.menu, .search').show();
			// });
		}
	});

	if ($(window).width() > 1024) {
		$('.menu, .search').show();
	}

	// $('.menu a').click(function() {
	// 	$('.hamburger').removeClass('is-active');
	// 	$('.header-bottom').removeClass('bg-mob-menu');
	// });

	//Sliders
	$('.slider-home-1').slick({
		infinite: false,
		slidesToShow: 3,
		slidesToScroll: 1,
		dots: false,
		prevArrow: '<button type="button" class="slick-prev"></button>',
		nextArrow: '<button type="button" class="slick-next"></button>',
		responsive: [
		{
			breakpoint: 1024,
			settings: {
				slidesToShow: 1,
				slidesToScroll: 1
			}
		}
		]
	});

});
