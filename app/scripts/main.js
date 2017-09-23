$(document).ready(function() {

	// Fades in whole page on load
	// move to css
	// $('body').css('display', 'none');
	//$('body').fadeIn(1500);

	// Fades out the whole page when clicking links
	var newLocation;
	$('.link-page-fade').click(function(e) {
		e.preventDefault();
		newLocation = this.href;
		$('a.animation-zoom').addClass('animation-zoom-out');
		$('body').delay(400).fadeOut(1000, newpage);
	});
	function newpage() {
		window.location = newLocation;
	}
	
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

		// auto load content
		/*$('.lazy-load').slice(0, 2).show();
		$('.show-more-btn').click(function(event) {
			event.preventDefault();
			$('.lazy-load:hidden').slice(0, 1).slideDown(200);
			if ($('.lazy-load:hidden').length == 0) {
				$('.show-more-btn').addClass('inactive-btn');
			};
		});*/

		//jScroll activate
		$('.scroll').jscroll({
			autoTrigger: false,
			//loadingHtml: '<img src="../images/load.gif" alt="Loading" />'
			loadingHtml: '<p class="">Загрузка ...</p>'
		});

	});
