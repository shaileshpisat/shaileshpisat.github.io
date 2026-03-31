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
			return '' +
				'<div class="about-experience-item">' +
					'<div class="icon">' +
						'<i class="fa fa-briefcase"></i>' +
					'</div>' +
					'<span class="time open-sans-font text-uppercase">' + item.period + '</span>' +
					'<h5 class="poppins-font text-uppercase">' + item.title + ' <span class="place open-sans-font">' + item.place + '</span></h5>' +
					'<p class="open-sans-font">' + item.description + '</p>' +
				'</div>';
		}).join('');
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

		if (data.resumeFile && $('#resume-button').length) {
			$('#resume-button').attr('href', data.resumeFile);
		}
	}

	function loadProfileData() {
		var source = document.body.getAttribute('data-profile-source');
		if (!source || !$('#profile-name').length) {
			return;
		}

		fetch(source)
			.then(function(response) {
				if (!response.ok) {
					throw new Error('Failed to load profile data');
				}
				return response.json();
			})
			.then(function(data) {
				applyProfileData(data);
			})
			.catch(function(error) {
				console.warn('Failed to load profile data', error);
			});
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
