/*
	Author       : Theme-Family
	Template Name: Muydi -Photograph & Videography Html5 Website Template
	Version      : 1.0.2
	
/***************************************************
==================== JS ======================
****************************************************
01. PRELOADER JS
02. Header Search js
03.	STICKY HEADER JS
04. MOBILE MENU 
05. BACK TO TOP
06. LightCase jQuery Active
07. MAILCHAMP JS
08. Porfolio isotope
09. WOW SCROLL
10. GSAP JS

****************************************************/
(function($) {
    "use strict";

	/*--------------------------------------------------------------
     01.  PRELOADER
      --------------------------------------------------------------*/
	/*PRELOADER JS*/
		$(window).on("load", function () {
			$(".atf-status").fadeOut();
			$(".atf-preloader").delay(350).fadeOut("slow");
		});
	/*END PRELOADER JS*/
	
	/*--------------------------------------------------------------
	02.	Header Search js
	--------------------------------------------------------------*/
    $(".atf-searching-btn").on("click", function () {
        $(".atf-searching-area").addClass("active");
    });

    $(".atf-searching-close-btn").on("click", function () {
        $(".atf-searching-area").removeClass("active");
    });

	// Header Sticky
	$(window).on('scroll',function() {
		if ($(this).scrollTop() > 10){  
			$('.navbar-area').addClass("atf-sticky-header");
		}
		else{
			$('.navbar-area').removeClass("atf-sticky-header");
		}
	});

	/* --------------------------------------------------------
	 03. STICKY HEADER JS
		--------------------------------------------------------- */
	$(window).on('scroll', function() {
		if ($(window).scrollTop() > 50) {
			$('.navbar-expand-md').addClass('navbar-collaps');
			$('.atf-back-to-top').addClass('open');
		} else {
			$('.atf-header-area').removeClass('navbar-collaps');
			$('.atf-back-to-top').removeClass('open');
		}
	});
	/* --------------------------------------------------------
	04.	MOBILE MENU 
		--------------------------------------------------------- */
	jQuery('.mean-menu').meanmenu({
		meanScreenWidth: "991"
	});
	/* --------------------------------------------------------
	05.	BACK TO TOP
		--------------------------------------------------------- */
	if ($('.atf-back-to-top').length) {
	  $(".atf-back-to-top").on('click', function () {
		var target = $(this).attr('data-targets');
		// animate
		$('html, body').animate({
		  scrollTop: $(target).offset().top
		}, 1000);

	  });
	}
	/* --------------------------------------------------------
	06.	LightCase jQuery Active
		--------------------------------------------------------- */
	$('a[data-rel^=lightcase]').lightcase({
		transition: 'elastic', /* none, fade, fadeInline, elastic, scrollTop, scrollRight, scrollBottom, scrollLeft, scrollHorizontal and scrollVertical */
		swipe: true,
		maxWidth: 1170,
		maxHeight: 600,
	});
			
	/*--------------------------------------------------------------
	07.	MAILCHAMP JS
      --------------------------------------------------------------*/		
			
	$("#mc-form").ajaxChimp({
		url: "https://themesfamily.us22.list-manage.com/subscribe/post?u=e056d9c3aeb53b20aff997467&amp;id=e307d7e1b8&amp;f_id=0012cee1f0",
		/* Replace Your AjaxChimp Subscription Link */
	});
		
	/*--------------------------------------------------------------
	08.	Porfolio isotope
      --------------------------------------------------------------*/
	 var portfolioIsotope = $(".atf-portfolio-grid").isotope({
        itemSelector: ".grid-item",
    });

    $(".portfolio-filter button").on("click", function () {
        $(".portfolio-filter button").removeClass("active");
        $(this).addClass("filter-active");

        portfolioIsotope.isotope({
            filter: $(this).data("filter"),
        });
    });
	

	/*--------------------------------------------------------------
	09.	WOW SCROLL
      --------------------------------------------------------------*/
	 var wow = new WOW({
		  //disabled for mobile
			mobile: false
		});

	wow.init();
	
	/* --------------------------------------------------------
	10.	GSAP JS
	--------------------------------------------------------- */

    document.addEventListener("DOMContentLoaded", function () {
        // Split Content animation
        if ($(".split-content").length > 0) {
            let st = $(".split-content");
            if (st.length == 0) return;
            gsap.registerPlugin(SplitText);
            st.each(function (index, el) {
                el.split = new SplitText(el, {
                    type: "lines,words,chars",
                    linesClass: "atf-split-line",
                });
                gsap.set(el, {
                    perspective: 400,
                });
                if ($(el).hasClass("end")) {
                    gsap.set(el.split.chars, {
                        opacity: 0,
                        x: "50",
                        ease: "Back.easeOut",
                    });
                }
                if ($(el).hasClass("start")) {
                    gsap.set(el.split.chars, {
                        opacity: 0,
                        x: "-50",
                        ease: "circ.out",
                    });
                }
                if ($(el).hasClass("up")) {
                    gsap.set(el.split.chars, {
                        opacity: 0,
                        y: "80",
                        ease: "circ.out",
                    });
                }
                if ($(el).hasClass("down")) {
                    gsap.set(el.split.chars, {
                        opacity: 0,
                        y: "-80",
                        ease: "circ.out",
                    });
                }
                el.anim = gsap.to(el.split.chars, {
                    scrollTrigger: {
                        trigger: el,
                        start: "top 90%",
                    },
                    x: "0",
                    y: "0",
                    rotateX: "0",
                    scale: 1,
                    opacity: 1,
                    duration: 0.6,
                    stagger: 0.04,
                });
            });
        }

        // Image spread js
        let revealContainers = document.querySelectorAll(".spread");
        revealContainers.forEach((container) => {
            let image = container.querySelector("img");
            let tl = gsap.timeline({
                scrollTrigger: {
                    trigger: container,
                    toggleActions: "play none none none",
                },
            });

            tl.set(container, {
                autoAlpha: 1,
            });

            if (container.classList.contains("zoom-out")) {
                // Zoom-out effect
                tl.from(image, 1.5, {
                    scale: 1.4,
                    ease: Power2.out,
                });
            } else if (container.classList.contains("start") || container.classList.contains("end")) {
                let xPercent = container.classList.contains("start") ? -100 : 100;
                tl.from(container, 1.5, {
                    xPercent,
                    ease: Power2.out,
                });
                tl.from(image, 1.5, {
                    xPercent: -xPercent,
                    scale: 1,
                    delay: -1.5,
                    ease: Power2.out,
                });
            }
        });
    });
			

    
})(jQuery);

