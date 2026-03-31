(function($) {

	"use strict";

	/* ----------------------------------------------------------- */
	/*  FUNCTION TO STOP LOCAL AND YOUTUBE VIDEOS IN SLIDESHOW
    /* ----------------------------------------------------------- */

	function stop_videos() {
		var video = document.getElementById("video");
		if (video.paused !== true && video.ended !== true) {
			video.pause();
		}
		$('.youtube-video')[0].contentWindow.postMessage('{"event":"command","func":"' + 'pauseVideo' + '","args":""}', '*');
	}

	function renderProfileList(items) {
		return items.map(function(item) {
			return '<li><span class="title">' + item.title + '</span><span class="value">' + item.value + '</span></li>';
		}).join('');
	}

	function renderProfileStats(items) {
		return items.map(function(item, index) {
			var marginClass = index < 2 ? ' with-margin' : '';
			return '' +
				'<div class="col-6">' +
					'<div class="box-stats' + marginClass + '">' +
						'<h3 class="poppins-font position-relative">' + item.value + '</h3>' +
						'<p class="open-sans-font m-0 position-relative text-uppercase">' + item.label + ' <span class="d-block">' + item.labelAccent + '</span></p>' +
					'</div>' +
				'</div>';
		}).join('');
	}

	function renderSkills(items) {
		return items.map(function(item) {
			return '<span class="about-skill-chip open-sans-font">' + item + '</span>';
		}).join('');
	}

	function renderExperience(items) {
		return items.map(function(item) {
			var descriptionMarkup = '';
			if (Array.isArray(item.description)) {
				descriptionMarkup = '<ul class="about-experience-points open-sans-font">' + item.description.map(function(point) {
					return '<li>' + point + '</li>';
				}).join('') + '</ul>';
			} else if (item.description) {
				descriptionMarkup = '<p class="open-sans-font">' + item.description + '</p>';
			}

			return '' +
				'<div class="about-experience-item">' +
					'<div class="icon">' +
						'<i class="fa fa-briefcase"></i>' +
					'</div>' +
					'<span class="time open-sans-font text-uppercase">' + item.period + '</span>' +
					'<h5 class="poppins-font text-uppercase">' + item.title + ' <span class="place open-sans-font">' + item.place + '</span></h5>' +
					descriptionMarkup +
				'</div>';
		}).join('');
	}

	function renderPortfolio(items) {
		return items.map(function(item) {
			var stackMarkup = '';
			if (Array.isArray(item.stack)) {
				stackMarkup = item.stack.map(function(tag) {
					return '<span class="portfolio-tag open-sans-font">' + tag + '</span>';
				}).join('');
			}

			var linkMarkup = '';
			if (item.link) {
				linkMarkup =
					'<a class="button portfolio-card-link" href="' + item.link + '">' +
						'<span class="button-text">' + (item.linkLabel || 'View Project') + '</span>' +
						'<span class="button-icon fa fa-arrow-right"></span>' +
					'</a>';
			}

			return '' +
				'<article class="portfolio-card">' +
					'<div class="portfolio-card-image-wrap">' +
						'<img class="portfolio-card-image" src="' + item.image + '" alt="' + item.title + '">' +
						'<span class="portfolio-card-category open-sans-font">' + item.category + '</span>' +
					'</div>' +
					'<div class="portfolio-card-body">' +
						'<h3 class="poppins-font">' + item.title + '</h3>' +
						'<p class="open-sans-font">' + item.summary + '</p>' +
						'<div class="portfolio-card-tags">' + stackMarkup + '</div>' +
						linkMarkup +
					'</div>' +
				'</article>';
		}).join('');
	}

	function renderToolsTemplates(items) {
		return items.map(function(item) {
			return '' +
				'<article class="portfolio-card portfolio-tool-card">' +
					'<div class="portfolio-card-image-wrap">' +
						'<img class="portfolio-card-image" src="' + item.image + '" alt="' + item.title + '">' +
						'<span class="portfolio-card-category open-sans-font">' + item.category + '</span>' +
					'</div>' +
					'<div class="portfolio-card-body">' +
						'<h3 class="poppins-font">' + item.title + '</h3>' +
						'<p class="open-sans-font">' + item.summary + '</p>' +
					'</div>' +
				'</article>';
		}).join('');
	}

	function renderProjectCarousel(items) {
		if (!items.length) {
			return '';
		}

		var slides = items.map(function(item, index) {
			var detailMarkup = '';
			if (Array.isArray(item.details)) {
				detailMarkup = '<ul class="project-slide-details open-sans-font">' + item.details.map(function(point) {
					return '<li>' + point + '</li>';
				}).join('') + '</ul>';
			}

			var stackMarkup = '';
			if (Array.isArray(item.stack)) {
				stackMarkup = item.stack.map(function(tag) {
					return '<span class="portfolio-tag open-sans-font">' + tag + '</span>';
				}).join('');
			}

			var linkMarkup = '';
			if (item.link) {
				linkMarkup =
					'<a class="button portfolio-card-link" href="' + item.link + '">' +
						'<span class="button-text">' + (item.linkLabel || 'View Project') + '</span>' +
						'<span class="button-icon fa fa-arrow-right"></span>' +
					'</a>';
			}

			return '' +
				'<div class="carousel-item' + (index === 0 ? ' active' : '') + '">' +
					'<div class="project-slide">' +
						'<div class="project-slide-visual">' +
							'<img class="project-slide-image" src="' + item.image + '" alt="' + item.title + '">' +
							'<span class="portfolio-card-category open-sans-font">' + item.category + '</span>' +
						'</div>' +
						'<div class="project-slide-content">' +
							'<h3 class="poppins-font">' + item.title + '</h3>' +
							'<p class="open-sans-font">' + item.summary + '</p>' +
							detailMarkup +
							'<div class="portfolio-card-tags">' + stackMarkup + '</div>' +
							linkMarkup +
						'</div>' +
					'</div>' +
				'</div>';
		}).join('');

		var indicators = items.map(function(item, index) {
			return '<li data-target="#projectsCarousel" data-slide-to="' + index + '"' + (index === 0 ? ' class="active"' : '') + '></li>';
		}).join('');

		return '' +
			'<div id="projectsCarousel" class="carousel slide project-carousel" data-ride="carousel" data-interval="false">' +
				'<ol class="carousel-indicators">' + indicators + '</ol>' +
				'<div class="carousel-inner">' + slides + '</div>' +
				'<a class="carousel-control-prev" href="#projectsCarousel" role="button" data-slide="prev">' +
					'<span class="carousel-control-prev-icon" aria-hidden="true"></span>' +
					'<span class="sr-only">Previous</span>' +
				'</a>' +
				'<a class="carousel-control-next" href="#projectsCarousel" role="button" data-slide="next">' +
					'<span class="carousel-control-next-icon" aria-hidden="true"></span>' +
					'<span class="sr-only">Next</span>' +
				'</a>' +
			'</div>';
	}

	function renderClients(items) {
		var cards = items.map(function(item) {
			var highlights = '';
			if (Array.isArray(item.highlights)) {
				highlights = item.highlights.map(function(point) {
					return '<span class="portfolio-tag open-sans-font">' + point + '</span>';
				}).join('');
			}

			return '' +
				'<article class="portfolio-client-card">' +
					'<h3 class="poppins-font">' + item.name + '</h3>' +
					'<p class="open-sans-font">' + item.summary + '</p>' +
					'<div class="portfolio-card-tags">' + highlights + '</div>' +
				'</article>';
		}).join('');

		return '' +
			'<div class="portfolio-marquee">' +
				'<div class="portfolio-marquee-track">' +
					cards +
					cards +
				'</div>' +
			'</div>';
	}

	function applyProfileData(data) {
		if (!data) {
			return;
		}

		if (data.name) {
			$('#profile-name').text(data.name);
		}

		if (Array.isArray(data.profile) && $('#profile-info-list').length) {
			$('#profile-info-list').html(renderProfileList(data.profile));
		}

		if (Array.isArray(data.stats) && $('#profile-stats-grid').length) {
			$('#profile-stats-grid').html(renderProfileStats(data.stats));
		}

		if (Array.isArray(data.skills) && $('#profile-skills-grid').length) {
			$('#profile-skills-grid').html(renderSkills(data.skills));
		}

		if (Array.isArray(data.experience) && $('#profile-experience-list').length) {
			$('#profile-experience-list').html(renderExperience(data.experience));
		}

		if (data.portfolioSections) {
			if (Array.isArray(data.portfolioSections.projects) && $('#portfolio-projects-grid').length) {
				$('#portfolio-projects-grid').html(renderProjectCarousel(data.portfolioSections.projects));
			}

			if (Array.isArray(data.portfolioSections.products) && $('#portfolio-products-grid').length) {
				$('#portfolio-products-grid').html(renderPortfolio(data.portfolioSections.products));
			}

			if (Array.isArray(data.portfolioSections.clients) && $('#portfolio-clients-grid').length) {
				$('#portfolio-clients-grid').html(renderClients(data.portfolioSections.clients));
			}

			if (Array.isArray(data.portfolioSections.toolsTemplates) && $('#portfolio-tools-grid').length) {
				$('#portfolio-tools-grid').html(renderToolsTemplates(data.portfolioSections.toolsTemplates));
			}
		}

		if (data.resumeFile && $('#resume-button').length) {
			$('#resume-button').attr('href', data.resumeFile);
		}

		if ($('#contact-email-text').length) {
			if (data.contact && data.contact.intro && $('#contact-intro-text').length) {
				$('#contact-intro-text').text(data.contact.intro);
			}

			if (data.contact && data.contact.response && $('#contact-response-text').length) {
				$('#contact-response-text').text(data.contact.response);
			}

			if (data.email) {
				$('#contact-email-text').text(data.email);
				$('#contact-email-link').attr('href', 'mailto:' + data.email);
				if ($('#contact-direct-email').length) {
					$('#contact-direct-email').attr('href', 'mailto:' + data.email);
				}
			}

			if (data.phone) {
				var normalizedPhone = data.phone.replace(/\s+/g, '').replace(/^\+/, '');
				$('#contact-phone-text').text(data.phone);
				$('#contact-phone-link').attr('href', 'tel:+' + normalizedPhone);
				if ($('#contact-direct-call').length) {
					$('#contact-direct-call').attr('href', 'tel:+' + normalizedPhone);
				}
				if ($('#contact-direct-whatsapp').length) {
					$('#contact-direct-whatsapp').attr('href', 'https://wa.me/' + normalizedPhone);
				}
			}

			if (data.location && $('#contact-location-text').length) {
				$('#contact-location-text').text(data.location);
			}

			if (Array.isArray(data.socialLinks)) {
				data.socialLinks.forEach(function(item) {
					var key = item.label.toLowerCase();
					var selector = '#contact-social-' + key;
					if ($(selector).length) {
						$(selector).attr('href', item.url);
					}
				});
			}
		}
	}

	function loadProfileData() {
		var isAboutPage = $('#profile-name').length ||
			$('#profile-info-list').length ||
			$('#profile-stats-grid').length ||
			$('#profile-skills-grid').length ||
			$('#profile-experience-list').length;
		var isContactPage = $('#contact-email-text').length ||
			$('#contact-phone-text').length ||
			$('#contact-location-text').length;
		var isPortfolioPage = $('#portfolio-projects-grid').length ||
			$('#portfolio-products-grid').length ||
			$('#portfolio-clients-grid').length ||
			$('#portfolio-tools-grid').length;

		if (!isAboutPage && !isContactPage && !isPortfolioPage) {
			return;
		}

		if ((isAboutPage || isContactPage) && window.PROFILE_DATA) {
			applyProfileData(window.PROFILE_DATA);
			return;
		}

		if (isPortfolioPage && window.PORTFOLIO_DATA) {
			applyProfileData(window.PORTFOLIO_DATA);
			return;
		}

		console.warn('Expected page data is not available');
	}

	$(document).ready(function() {

		/* ----------------------------------------------------------- */
		/*  STOP VIDEOS
        /* ----------------------------------------------------------- */

		$('.slideshow nav span').on('click', function () {
			stop_videos();
		});

		/* ----------------------------------------------------------- */
		/*  FIX REVEALATOR ISSUE AFTER PAGE LOADED
        /* ----------------------------------------------------------- */

		$(".revealator-delay1").addClass('no-transform');

		/* ----------------------------------------------------------- */
		/*  PROFILE DATA
        /* ----------------------------------------------------------- */

		loadProfileData();

		/* ----------------------------------------------------------- */
		/*  PORTFOLIO GALLERY
        /* ----------------------------------------------------------- */

		if ($('.grid').length) {
			new CBPGridGallery( document.getElementById( 'grid-gallery' ) );
		}

		/* ----------------------------------------------------------- */
		/*  HIDE HEADER WHEN PORTFOLIO SLIDESHOW OPENED
        /* ----------------------------------------------------------- */

		$(".grid figure").on('click', function() {
			$("#navbar-collapse-toggle").addClass('hide-header');
		});

		/* ----------------------------------------------------------- */
		/*  SHOW HEADER WHEN PORTFOLIO SLIDESHOW CLOSED
        /* ----------------------------------------------------------- */

		$(".nav-close").on('click', function() {
			$("#navbar-collapse-toggle").removeClass('hide-header');
		});
		$(".nav-prev").on('click', function() {
			if ($('.slideshow ul li:first-child').hasClass('current')) {
				$("#navbar-collapse-toggle").removeClass('hide-header');
			}
		});
		$(".nav-next").on('click', function() {
			if ($('.slideshow ul li:last-child').hasClass('current')) {
				$("#navbar-collapse-toggle").removeClass('hide-header');
			}
		});

		/* ----------------------------------------------------------- */
		/*  PORTFOLIO DIRECTION AWARE HOVER EFFECT
        /* ----------------------------------------------------------- */

		var item = $(".grid li figure");
		var elementsLength = item.length;
		for (var i = 0; i < elementsLength; i++) {
			$(item[i]).hoverdir();
		}

		/* ----------------------------------------------------------- */
		/*  AJAX CONTACT FORM
        /* ----------------------------------------------------------- */

		$(".contactform").on("submit", function() {
			$(".output_message").text("Sending...");

			var form = $(this);
			$.ajax({
				url: form.attr("action"),
				method: form.attr("method"),
				data: form.serialize(),
				success: function(result) {
					if (result == "success") {
						$(".form-inputs").css("display", "none");
						$(".box p").css("display", "none");
						$(".contactform").find(".output_message").addClass("success");
						$(".output_message").text("Message Sent!");
					} else {
						$(".tabs-container").css("height", "440px");

						$(".contactform").find(".output_message").addClass("error");
						$(".output_message").text("Error Sending!");
					}
				}
			});

			return false;
		});

	});

	$(document).keyup(function(e) {

		/* ----------------------------------------------------------- */
		/*  KEYBOARD NAVIGATION IN PORTFOLIO SLIDESHOW
        /* ----------------------------------------------------------- */
		if (e.keyCode === 27) {
			stop_videos();
			$('.close-content').click();
			$("#navbar-collapse-toggle").removeClass('hide-header');
		}
		if ((e.keyCode === 37) || (e.keyCode === 39)) {
			stop_videos();
		}
	});


})(jQuery);
