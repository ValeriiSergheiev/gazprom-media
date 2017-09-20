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
		} else {
			$('.search, .menu').show();
		}
	});

	if ($(window).width() > 1024) {
		$('.menu, .search').show();
	}

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

		$('.slider-2').slick({
			infinite: false,
			slidesToShow: 5,
			slidesToScroll: 1,
			dots: false,
			prevArrow: '<button type="button" class="slick-prev"></button>',
			nextArrow: '<button type="button" class="slick-next"></button>',
			responsive: [
			{
				breakpoint: 1024,
				settings: {
					slidesToShow: 3,
					slidesToScroll: 1
				}
			},
			{
				breakpoint: 640,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1
				}
			}
			]
		});

	});
