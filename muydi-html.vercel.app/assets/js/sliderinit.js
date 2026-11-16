/*
Author       : Theme-Family
Template Name: Muydi -Photograph & Videography Html5 Website Template
Version      : 1.0.2
*/
(function($) {
    "use strict";
	

	// ParallaxSlider Slider Custom jQuery	
	var wind = $(window);
		var parallaxSlider;
		var parallaxSliderOptions = {
			speed: 1500,
			autoplay: true,
			parallax: false,
			loop: true,
			on: {
				init: function () {
					var swiper = this;
					for (var i = 0; i < swiper.slides.length; i++) {
						$(swiper.slides[i]).find('.atf-swiper-img').attr({
							'data-swiper-parallax': 0.75 * swiper.width
						});
					}
				},
				resize: function () {
					this.update();
				}
			},
			pagination: {
				el: '.atf-slider-parallax .atf-parallax-slider .swiper-pagination',
				dynamicBullets: true,
				clickable: true
			},
			navigation: {
				nextEl: '.atf-slider-parallax .atf-parallax-slider .next-control',
				prevEl: '.atf-slider-parallax .atf-parallax-slider .prev-control'
			}
		};
		parallaxSlider = new Swiper('.atf-slider-parallax .atf-parallax-slider', parallaxSliderOptions);
		// Var Background image
		var pageSection = $(".atf-swiper-img, section");
		pageSection.each(function (indx) {
			if ($(this).attr("data-background")) {
				$(this).css("background-image", "url(" + $(this).data("background") + ")");
			}
	});
				
			
	/*--------------------------------------------------------------
		START PROJECT SLIDER
	--------------------------------------------------------------*/	
	
	$("#atf-project-slider").owlCarousel({
		margin:20,
		nav:false,
		animateIn: 'fadeIn',
		animateOut: 'fadeOut',
		smartSpeed:450,
		autoplay:true,
		autoplayTimeout:6000,
		loop:true,
		dots:true,
		responsive:{
			0:{
				items:1
			},
			768:{
				items:2
			},
			1000:{
				items:3
			}
		}
	});
	
	/*START PARTNER LOGO*/
	$('.atf-brand-active').owlCarousel({
		margin:20,
		autoplay:true,
		items: 3,
		loop:true,
		nav:false,
		dot:false,
		responsive:{
			0:{
				items:1
			},
			600:{
				items:3
			},
			1000:{
				items:5
			}
		}
	})
	/*END PARTNER LOGO*/
			

	/*--------------------------------------------------------------
		TESTIMONIAL SLIDER
	--------------------------------------------------------------*/	

	$('#testimonial-slider').owlCarousel({
		margin: 20,
		navText:['<i class="fa fa-angle-left"></i>','<i class="fa fa-angle-right"></i>'],
		autoplay: true,
		autoplayTimeout: 4000,
		nav: true,
		smartSpeed: 1000,
		dots: false,
		autoplayHoverPause: true,
		loop: true,
		responsiveClass:true,
		responsive: {
			0: {
				items: 1
			},
			600: {
				items: 1
			},
			1000: {
				items: 2
			}
		}
	});

	/*END Testimonials LOGO*/
		
	/*--------------------------------------------------------------
	NEWS SLIDER
	--------------------------------------------------------------*/	
	$('#blog-slider').owlCarousel({
		margin: 20,
		autoplay: true,
		navText:['<i class="fa fa-angle-left"></i>','<i class="fa fa-angle-right"></i>'],
		autoplayTimeout: 4000,
		nav: true,
		smartSpeed: 1000,
		dots: false,
		autoplayHoverPause: true,
		loop: true,
		responsiveClass:true,
		responsive: {
			0: {
				items: 1
			},
			768: {
				items: 2
			},
			1000: {
				items: 3
			}
		}
	});

	/*END NEWS SLIDER */

    
})(jQuery);

