

var skrollrInst;

var skrollerDynamic = function () {
	

	var windowHeight = $(window).height(),
		sectionHomeHeight = $('.section-home').height(),
		sectionMainHeight = $('.section-main').height(),
		sectionBlackHeight = $('.section-black').height(),
		sectionWhiteHeight = $('.section-white').height(),
		footerHeight = $('footer').height(),

		sectionAboutVideoHeight = $('.top-video').height(),
		sectionAboutTrustHeight = $('.about-trust').height();

	//console.log(sectionAboutVideoHeight);


	if ($('#bg-animation').length) {
		//skroller dynamic position calculation

		var attrs = {};
		attrs['data-' + ( windowHeight + sectionMainHeight - 200)] = 'background-color:rgb(255,255,255);';
		attrs['data-' + (windowHeight + sectionMainHeight)] = 'background-color:rgb(27,27,27);';
		attrs['data-' + ($(document).height() - windowHeight - sectionWhiteHeight)] = 'background-color:rgb(27,27,27);';
		attrs['data-' + ($(document).height() - windowHeight - sectionWhiteHeight / 2)] = 'background-color:rgb(255,255,255);';

		$('#bg-animation').attr(attrs);

		var attrsWave = {};
		attrsWave['data-' + ($(document).height() - windowHeight - footerHeight - 110)] = 'transform:translate(0,0px);';
		attrsWave['data-' + ($(document).height() - windowHeight)] = 'transform:translate(0, 343px);';

		$('.articles-wrap .music-wave').attr(attrsWave);

		var attrsLang = {};
		attrsLang['data-' + (windowHeight - 50)] = 'color:rgb(255,255,255)';
		attrsLang['data-' + (windowHeight)] = 'color:rgb(27,27,27);';
		attrsLang['data-' + (sectionHomeHeight + sectionMainHeight - 50)] = 'color:rgb(27,27,27);';
		attrsLang['data-' + (sectionHomeHeight + sectionMainHeight + 50)] = 'color:rgb(255,255,255);';
		attrsLang['data-' + (sectionHomeHeight + sectionMainHeight + sectionBlackHeight - 200)] = 'color:rgb(255,255,255);';
		attrsLang['data-' + (sectionHomeHeight + sectionMainHeight + sectionBlackHeight + 100)] = 'color:rgb(27,27,27);';
		$('.lang a').attr(attrsLang);

		var attrsLogo = {};
		attrsLogo['data-' + 100] = 'opacity:0;';
		attrsLogo['data-' + 150] = 'opacity:1;color:rgb(27,27,27);';
		attrsLogo['data-' + (sectionHomeHeight + sectionMainHeight - 50)] = 'color:rgb(27,27,27);';
		attrsLogo['data-' + (sectionHomeHeight + sectionMainHeight + 50)] = 'color:rgb(255,255,255);';
		attrsLogo['data-' + ($(document).height() - windowHeight - sectionWhiteHeight)] = 'color:rgb(255,255,255);';
		attrsLogo['data-' + ($(document).height() - windowHeight - sectionWhiteHeight / 2)] = 'color:rgb(27,27,27);';
		attrsLogo['data-' + ($(document).height() - windowHeight)] = 'color:rgb(255,255,255);';
		$('.logo a').attr(attrsLogo);

		var attrsWave = {};
		attrsWave['data-' + (windowHeight - 150)] = 'background-color:rgb(255,255,255)';
		attrsWave['data-' + (windowHeight - 50)] = 'background-color:rgb(27,27,27);';
		attrsWave['data-' + (sectionHomeHeight + sectionMainHeight - 50)] = 'background-color:rgb(27,27,27);';
		attrsWave['data-' + (sectionHomeHeight + sectionMainHeight + 50)] = 'background-color:rgb(255,255,255);';
		attrsWave['data-' + (sectionHomeHeight + sectionMainHeight + sectionBlackHeight - 200)] = 'background-color:rgb(255,255,255);';
		attrsWave['data-' + (sectionHomeHeight + sectionMainHeight + sectionBlackHeight + 100)] = 'background-color:rgb(27,27,27);';
		$('.music-wave span').attr(attrsWave);

		var attrsBorder = {};
		attrsBorder['data-' + ($(window).height() / 4)] = 'border-color:rgb(255,255,255)';
		attrsBorder['data-' + ($(window).height() / 3)] = 'border-color:rgb(204,204,204);';
		attrsBorder['data-' + ($(document).height() - windowHeight - footerHeight - 110)] = 'transform:translate(0,0px);';
		attrsBorder['data-' + ($(document).height() - windowHeight)] = 'transform:translate(0, -343px);';
		$('.articles').attr(attrsBorder);

	} else {

		if ($('#bg-animation-2').length) {
			//About page animation
			var attrs = {};
			attrs['data-0'] = 'background-color:rgb(255,255,255);';
			attrs['data-' + (sectionAboutVideoHeight + sectionMainHeight / 3 )] = 'background-color:rgb(255,255,255);';
			attrs['data-' + (sectionAboutVideoHeight + sectionMainHeight / 2)] = 'background-color:rgb(27,27,27);';
			attrs['data-' + (sectionAboutVideoHeight + sectionMainHeight + sectionBlackHeight + sectionAboutTrustHeight / 4)] = 'background-color:rgb(27,27,27);';
			attrs['data-' + (sectionAboutVideoHeight + sectionMainHeight + sectionBlackHeight + sectionAboutTrustHeight / 3)] = 'background-color:rgb(255,255,255);';
			$('#bg-animation-2').removeAttrs().attr(attrs);

			var attrs2 = {};
			attrs2['data-0'] = 'opacity:0;';
			attrs2['data-' + (sectionAboutVideoHeight + sectionMainHeight / 3 )] = 'opacity:0;';
			attrs2['data-' + (sectionAboutVideoHeight + sectionMainHeight / 2)] = 'opacity:1;';
			attrs2['data-' + (sectionAboutVideoHeight + sectionMainHeight + sectionBlackHeight + sectionAboutTrustHeight / 4)] = 'opacity:1;';
			attrs2['data-' + (sectionAboutVideoHeight + sectionMainHeight + sectionBlackHeight + sectionAboutTrustHeight / 3)] = 'opacity:0;';
			$('#map-animation').removeAttrs().attr(attrs2);

			var attrsWave = {};
			attrsWave['data-' + ($(document).height() - windowHeight - footerHeight - 110)] = 'transform:translate(0,0px);';
			attrsWave['data-' + ($(document).height() - windowHeight)] = 'transform:translate(0, 343px);';
			$('.articles-wrap .music-wave').removeAttrs().attr(attrsWave);

			attrsWave = {};
			if ($('.top-video').hasClass('played')) {
				attrsWave['data-0'] = 'background-color:rgb(27,27,27)';
			} else {
				attrsWave['data-0'] = 'background-color:rgb(255,255,255)';
				attrsWave['data-' + (sectionAboutVideoHeight - 100)] = 'background-color:rgb(255,255,255);';
				attrsWave['data-' + (sectionAboutVideoHeight)] = 'background-color:rgb(27,27,27);';
			}

			attrsWave['data-' + (sectionAboutVideoHeight + sectionMainHeight - 200 )] = 'background-color:rgb(27,27,27);';
			attrsWave['data-' + (sectionAboutVideoHeight + sectionMainHeight - 100)] = 'background-color:rgb(255,255,255);';
			attrsWave['data-' + (sectionAboutVideoHeight + sectionMainHeight + sectionBlackHeight + sectionAboutTrustHeight)] = 'background-color:rgb(255,255,255);';
			attrsWave['data-' + (sectionAboutVideoHeight + sectionMainHeight + sectionBlackHeight + sectionAboutTrustHeight + 100)] = 'background-color:rgb(27,27,27);';
			$('.music-wave span').removeAttrs().attr(attrsWave);


			var attrsLang = {},
				attrsLangDrop = {};

			attrsLang['data-0'] = 'color:rgb(255,255,255);';
			attrsLang['data-' + (sectionAboutVideoHeight - 100)] = 'color:rgb(255,255,255);';
			attrsLang['data-' + (sectionAboutVideoHeight)] = 'color:rgb(0,0,0);';
			attrsLang['data-' + (sectionAboutVideoHeight + sectionMainHeight - 200 )] = 'color:rgb(0,0,0);';
			attrsLang['data-' + (sectionAboutVideoHeight + sectionMainHeight - 100)] = 'color:rgb(255,255,255);';
			attrsLang['data-' + (sectionAboutVideoHeight + sectionMainHeight + sectionBlackHeight + sectionAboutTrustHeight)] = 'color:rgb(255,255,255);';
			attrsLang['data-' + (sectionAboutVideoHeight + sectionMainHeight + sectionBlackHeight + sectionAboutTrustHeight + 100)] = 'color:rgb(0,0,0);';


			if (!$('.top-video').hasClass('played')) {
				attrsLangDrop['data-0'] = 'color:rgb(255,255,255);';
				attrsLangDrop['data-' + (sectionAboutVideoHeight - 100)] = 'color:rgb(255,255,255);';
				attrsLangDrop['data-' + (sectionAboutVideoHeight)] = 'color:rgb(0,0,0);';
			} else {
				attrsLangDrop['data-0'] = 'color:rgb(0,0,0);';
			}
			attrsLangDrop['data-' + (sectionAboutVideoHeight + sectionMainHeight - 200)] = 'color:rgb(0,0,0);';
			attrsLangDrop['data-' + (sectionAboutVideoHeight + sectionMainHeight - 100)] = 'color:rgb(255,255,255);';
			attrsLangDrop['data-' + (sectionAboutVideoHeight + sectionMainHeight + sectionBlackHeight + sectionAboutTrustHeight)] = 'color:rgb(255,255,255);';
			attrsLangDrop['data-' + (sectionAboutVideoHeight + sectionMainHeight + sectionBlackHeight + sectionAboutTrustHeight + 100)] = 'color:rgb(0,0,0);';

			$('.lang_i > a').removeAttrs().attr(attrsLang);
			$('.lang ul li a').removeAttrs().attr(attrsLangDrop);

			var attrsLogo = {};
			if (!$('.top-video').hasClass('played')) {
				attrsLogo['data-0'] = 'color:rgb(255,255,255);';
				attrsLogo['data-100'] = 'color:rgb(27,27,27);';
			} else {
				attrsLogo['data-0'] = 'color:rgb(27,27,27);';
			}
			attrsLogo['data-' + (sectionAboutVideoHeight + sectionMainHeight / 3 )] = 'color:rgb(27,26,27);';
			attrsLogo['data-' + (sectionAboutVideoHeight + sectionMainHeight / 2)] = 'color:rgb(255,255,255);';
			attrsLogo['data-' + (sectionAboutVideoHeight + sectionMainHeight + sectionBlackHeight)] = 'color:rgb(255,255,255);';
			attrsLogo['data-' + (sectionAboutVideoHeight + sectionMainHeight + sectionBlackHeight + 200)] = 'color:rgb(27,27,27);';
			attrsLogo['data-' + ($(document).height() - windowHeight - 110)] = 'color:rgb(27,27,27);';
			attrsLogo['data-' + ($(document).height() - windowHeight)] = 'color:rgb(255,255,255);';

			$('.logo a').removeAttrs().attr(attrsLogo);


			var attrsBorder = {};
			attrsBorder['data-0'] = 'border-color:rgb(204,204,204)';
			attrsBorder['data-' + (sectionAboutVideoHeight + sectionMainHeight / 3 )] = 'border-color:rgb(204,204,204)';
			attrsBorder['data-' + (sectionAboutVideoHeight + sectionMainHeight / 2 )] = 'border-color:rgb(255,255,255)';
			attrsBorder['data-' + (sectionAboutVideoHeight + sectionMainHeight + sectionBlackHeight)] = 'border-color:rgb(255,255,255)';
			attrsBorder['data-' + (sectionAboutVideoHeight + sectionMainHeight + sectionBlackHeight + 200)] = 'border-color:rgb(204,204,204)';
			attrsBorder['data-' + ($(document).height() - windowHeight - footerHeight - 110)] = 'transform:translate(0,0px);';
			attrsBorder['data-' + ($(document).height() - windowHeight)] = 'transform:translate(0, -343px);';

			$('.articles').removeAttrs().attr(attrsBorder);

		} else {

			//IF NOT HOMEPAGE and has top video open
			var topVideo = $('.top-video');
			if (topVideo.length && !topVideo.hasClass('played')) {

				//console.log('part 2');

				var attrsLang = {};
				attrsLang['data-' + (windowHeight - 50)] = 'color:rgb(255,255,255)';
				attrsLang['data-' + (windowHeight)] = 'color:rgb(27,27,27);';

				$('.lang a').removeAttrs().attr(attrsLang);

				var attrsLogo = {};
				attrsLogo['data-0'] = 'color:rgb(255,255,255);';
				attrsLogo['data-' + 150] = 'color:rgb(27,27,27);';
				attrsLogo['data-' + ($(document).height() - windowHeight - footerHeight - 150 )] = 'color:rgb(27,27,27);';
				attrsLogo['data-' + ($(document).height() - windowHeight - footerHeight)] = 'color:rgb(255,255,255);';
				$('.logo a').removeAttrs().attr(attrsLogo);

				var attrsBorder = {};
				attrsBorder['data-0'] = 'border-color:rgb(204,204,204);';
				attrsBorder['data-' + ($(document).height() - windowHeight - footerHeight - 110)] = 'transform:translate(0,0px);';
				attrsBorder['data-' + ($(document).height() - windowHeight)] = 'transform:translate(0, -343px);';
				$('.articles').removeAttrs().attr(attrsBorder);

				var attrsWave = {};
				attrsWave['data-' + ($(document).height() - windowHeight - footerHeight - 110)] = 'transform:translate(0,0px);';
				attrsWave['data-' + ($(document).height() - windowHeight)] = 'transform:translate(0, 343px);';

				$('.articles-wrap .music-wave').removeAttrs().attr(attrsWave);

				attrsWave = {};
				attrsWave['data-0'] = 'background-color:rgb(255,255,255)';
				attrsWave['data-' + (windowHeight - 50)] = 'background-color:rgb(27,27,27);';

				$('.music-wave span').attr(attrsWave);

			} else {
				//console.log('part 3');
				var attrsLang = {};
				attrsLang['data-0'] = 'color:rgb(27,27,27)';
				$('.lang a').removeAttrs().attr(attrsLang);

				var attrsLogo = {};
				attrsLogo['data-0'] = 'color:rgb(27,27,27);';
				attrsLogo['data-' + ($(document).height() - windowHeight - 150 )] = 'color:rgb(27,27,27);';
				attrsLogo['data-' + ($(document).height() - windowHeight)] = 'color:rgb(255,255,255);';
				$('.logo a').removeAttrs().attr(attrsLogo);

				var attrsBorder = {};
				attrsBorder['data-0'] = 'border-color:rgb(204,204,204);';
				attrsBorder['data-' + ($(document).height() - windowHeight - footerHeight - 110)] = 'transform:translate(0,0px);';
				attrsBorder['data-' + ($(document).height() - windowHeight)] = 'transform:translate(0, -343px);';
				$('.articles').removeAttrs().attr(attrsBorder);

				var attrsWave = {};
				attrsWave['data-' + ($(document).height() - windowHeight - footerHeight - 110)] = 'transform:translate(0,0px);';
				attrsWave['data-' + ($(document).height() - windowHeight)] = 'transform:translate(0, 343px);';

				$('.articles-wrap .music-wave').removeAttrs().attr(attrsWave);

				attrsWave = {};
				attrsWave['data-0'] = 'background-color:rgb(27,27,27)';
				$('.music-wave span').attr(attrsWave);

			}

			if (topVideo.length && topVideo.hasClass('played')) {
				//console.log('part 4');
				var attrsLang = {};
				attrsLang['data-0'] = 'color:rgb(255,255,255)';
				attrsLang['data-50'] = 'color:rgb(27,27,27)';
				$('.lang a').removeAttrs().attr(attrsLang);
			}
		}
	}
	if (skrollrInst == undefined) {
		skrollrInst = skrollr.init({
			forceHeight: false
		});
	} else {
		skrollrInst.refresh();
	}
}

var touch = $('.touch').length;

jQuery.extend(verge);
var desktop = true,
	tablet = false,
	mobile = false,
	tabletPortrait = false;

$(window).resize(function () {
	if ($.viewportW() > 1240) {
		desktop = true;
		tablet = false;
		mobile = false;
		tabletPortrait = false;
	}
	if ($.viewportW() >= 768 && $.viewportW() <= 1240) {
		desktop = false;
		tablet = true;
		tabletPortrait = false;
		mobile = false;
	}
	if ($.viewportW() < 1000) {
		tabletPortrait = true;
	}
	if ($.viewportW() <= 767) {
		desktop = false;
		tablet = false;
		mobile = true;
		tabletPortrait = false;
	}

}).resize();


$(function () {

	var body = $('body');
	$(window).load(function () {
		setTimeout(function () {
			console.log('test loading');
			if (!$('.preloader').length) {
				$('html').addClass('loaded');
			}
			setTimeout(function () {
				$(window).trigger('canplayvideo');
			}, 2000);

			setTimeout(function () {
				var block = $(window.location.hash);
				if (block.length) {
					$('body, html').animate({
						scrollTop: block.offset().top - 20
					}, 1000);
				}
			}, 400);
		}, 1500);
	});


//preloader animation
	var preloader = $('.preloader');
	preloader.find('.preloader__logo').addClass('loading');

	var loadingScreen = function (progress) {
		if (progress < 100) {
			preloader.find('.preloader__progress span').html(progress + '%').css('bottom', progress + '%');
			preloader.find('.preloader__progress i').css('height', progress + '%');
		} else {
			preloader.find('.preloader__progress span').html('100%').css('bottom', '100%');
			preloader.find('.preloader__progress i').css('height', '100%');
			body.addClass('offpreloader');

			$('html').addClass('loaded');

			setTimeout(function () {
				preloader.css('display', 'none');
				setTimeout(function () {
					if ($('#bg-animation').length) {
						// $('.nav-main_i').addClass('open');
					}
					body.addClass('activate-home-page');
					if (!touch) {
						setTimeout(function () {
							$('#logo').removeClass('inv');
							var paths = $('#logo path');
							setTimeout(function () {
								paths.each(function () {
									renderTraceLogo($(this).get(0));
								});
							}, 500);
						});
					}
				}, 200);
			}, 2000);
		}
	};


	$('path').each(function () {
		var path = $(this).get(0);
		var length = path.getTotalLength();
		path.style.strokeDashoffset = length;
		path.style.strokeDasharray = length + ' ' + length;
	});

	var renderTrace = function (path) {
//		var length = path.getTotalLength();

		path.style.transition = path.style.WebkitTransition =
			'stroke-dashoffset 2s ease-in-out, fill-opacity 2s ease 1.5s';
		path.style.fillOpacity = '1';
		path.style.strokeDashoffset = '0';

	};

	var renderTraceLogo = function (path) {
//		var length = path.getTotalLength();
		path.style.transition = path.style.WebkitTransition =
			'stroke-dashoffset 10s ease-in-out, fill-opacity 2s ease 2s';

		path.style.fillOpacity = '1';
		path.style.strokeDashoffset = '0';

	};

//logo animation


	if (preloader.length) {//example of how loading must be implemented, delete and implement your function for ajax loading
		var progress = 1;
		setTimeout(function () {
			loadingScreen(progress++);
			progress <= 100 && setTimeout(arguments.callee, 25);
		}, 100);
	} else {
		body.addClass('activate-home-page');
	}


	if (touch) {
		$('.numbers strong').each(function () {
			var el = $(this);
			el.html(el.attr('data-num'));
		});
	}

	var backgroundAnimation = function () {

		var width, height, largeHeader, canvas, ctx, points, target, animateHeader = true;

		// Main
		initHeader();
		initAnimation();
		addListeners();

		function initHeader() {
			width = $('.out').width();
			height = window.innerHeight;
			target = {x: width / 2, y: height / 2};

			canvas = document.getElementById('bg-animation');
			canvas.width = width;
			canvas.height = height;
			ctx = canvas.getContext('2d');

			// create points
			points = [];
			for (var x = 0; x < width; x = x + width / 10) {
				for (var y = 0; y < height; y = y + height / 10) {
					var px = x + Math.random() * width / 10;
					var py = y + Math.random() * height / 10;
					var p = {x: px, originX: px, y: py, originY: py};
					points.push(p);
				}
			}

			// for each point find the 5 closest points
			for (var i = 0; i < points.length; i++) {
				var closest = [];
				var p1 = points[i];
				for (var j = 0; j < points.length; j++) {
					var p2 = points[j]
					if (!(p1 == p2)) {
						var placed = false;
						for (var k = 0; k < 5; k++) {
							if (!placed) {
								if (closest[k] == undefined) {
									closest[k] = p2;
									placed = true;
								}
							}
						}
						for (var k = 0; k < 5; k++) {
							if (!placed) {
								if (getDistance(p1, p2) < getDistance(p1, closest[k])) {
									closest[k] = p2;
									placed = true;
								}
							}
						}
					}
				}
				p1.closest = closest;
			}

			// assign a circle to each point
			for (var i in points) {
				var c = new Circle(points[i], 2 + Math.random() * 2, 'rgba(0,0,0,0.2)');
				points[i].circle = c;
			}
		}

		// Event handling
		function addListeners() {
			if (!('ontouchstart' in window)) {
				window.addEventListener('mousemove', mouseMove);
			}
			window.addEventListener('scroll', scrollCheck);
			window.addEventListener('resize', resize);
		}

		function mouseMove(e) {
			var posx = posy = 0;
			if (e.pageX || e.pageY) {
				posx = e.pageX - (document.body.scrollLeft + document.documentElement.scrollLeft);
				posy = e.pageY - (document.body.scrollTop + document.documentElement.scrollTop);
			}
			else if (e.clientX || e.clientY) {
				posx = e.clientX;
				posy = e.clientY;
			}
			target.x = posx;
			target.y = posy;
		}

		function scrollCheck() {
			if ($(document).scrollTop() > height / 2) animateHeader = true;
			else animateHeader = false;
		}

		function resize() {
			width = $('.out').width();
			height = window.innerHeight;
			canvas.width = width;
			canvas.height = height;
		}

		// animation
		function initAnimation() {
			animate();
			for (var i in points) {
				shiftPoint(points[i]);
			}
		}

		function animate() {
			if (animateHeader) {
				ctx.clearRect(0, 0, width, height);
				for (var i in points) {
					// detect points in range
					if (Math.abs(getDistance(target, points[i])) < 4000) {
						points[i].active = 0.3;
						points[i].circle.active = 0.6;
					} else if (Math.abs(getDistance(target, points[i])) < 20000) {
						points[i].active = 0.1;
						points[i].circle.active = 0.3;
					} else if (Math.abs(getDistance(target, points[i])) < 40000) {
						points[i].active = 0.02;
						points[i].circle.active = 0.1;
					} else {
						points[i].active = 0;
						points[i].circle.active = 0;
					}

					drawLines(points[i]);
					points[i].circle.draw();
				}
			}
			requestAnimationFrame(animate);
		}

		function shiftPoint(p) {
			TweenLite.to(p, 1 + 1 * Math.random(), {
				x: p.originX - 50 + Math.random() * 100,
				y: p.originY - 50 + Math.random() * 100, ease: Circ.easeInOut,
				onComplete: function () {
					shiftPoint(p);
				}
			});
		}

		// Canvas manipulation
		function drawLines(p) {
			if (!p.active) return;
			for (var i in p.closest) {
				ctx.beginPath();
				ctx.moveTo(p.x, p.y);
				ctx.lineTo(p.closest[i].x, p.closest[i].y);
				ctx.strokeStyle = 'rgba(164,164,164,' + p.active + ')';
				ctx.stroke();
			}
		}

		function Circle(pos, rad, color) {
			var _this = this;

			// constructor
			(function () {
				_this.pos = pos || null;
				_this.radius = rad || null;
				_this.color = color || null;
			})();

			this.draw = function () {
				if (!_this.active) return;
				ctx.beginPath();
				ctx.arc(_this.pos.x, _this.pos.y, _this.radius, 0, 2 * Math.PI, false);
				ctx.fillStyle = 'rgba(164,164,164,' + _this.active + ')';
				ctx.fill();
			};
		}

		// Util
		function getDistance(p1, p2) {
			return Math.pow(p1.x - p2.x, 2) + Math.pow(p1.y - p2.y, 2);
		}
	}

//main

	var resizeCalc = function () {
		var wh = $(window).height();
		var ww = $(window).width();
		if (!touch) {
			$('.section-home, .articles, .video-box, .video-box_i, .nav-main, .about-trust').height(wh);
			$('.logo').css('top', wh - 183);
		}
		$('.bg-slider__item').css({'width': ww, 'height': wh});
		if (!tabletPortrait) {
			$('.section-home').height(wh);
		} else {
			$('.section-home').height('auto');
		}
		$('.page-404').height($(window).height());
	}

	if (!mobile) {
		$('.bg-slider__item').each(function () {
			var el = $(this);
			el.css('background-image', 'url(' + el.attr('data-src') + ')');
		});
	}

	window.addEventListener("orientationchange", resizeCalc);

	if (!mobile) {
		$(window).resize(resizeCalc);
		resizeCalc();
	}

	$(window).on('load', function () {
		$('.articles_i img').each(function () {
			var el = $(this);
			el.attr('src', el.attr('data-src'));
		});
	});

	$('.btn-menu_touch').on('click', function (e) {
		e.preventDefault();
		$('body').toggleClass('menu-open');
	});

	$('.lang_i > a').on('click', function (e) {
		e.preventDefault();
		$('.lang_i').toggleClass('open');
	});

	body.on('click', function (e) {
		if (!$(e.target).closest('.lang').length) {
			$('.lang_i').removeClass('open');
		}
	});

	if (!touch) {
		$('.nav-main').on('mouseenter', function () {
			// $('.nav-main_i').addClass('open');
		}).on('mouseleave', function () {
			// $('.nav-main_i').removeClass('open');
		});

		// $('.btn-menu').on('click', function () {
		// 	$('.nav-main_i').toggleClass('open');
		// });

		
		

		//canvas animation
		if ($('#bg-animation').length) {
			backgroundAnimation();
		}

		//Detect is element in viewport
		var videoBg = $('.video-inner'),
			scrollTimeout;
		var detectInview = function () {
			var wh = $(window).height();
			var scrollTop = $(window).scrollTop();

			$('.detect-inview').each(function () {
				var el = $(this);
				// console.log(el);
				if (el.offset().top - wh + 100 <= scrollTop && scrollTop <= el.offset().top + el.height()) {
					el.addClass('inview');
					var path = el.find('path');
					if (path.length) {
						renderTrace(path.get(0));
					}
				} else {
					el.removeClass('inview');
				}
			});
			$('.detect-inview-2').each(function () {
				var el = $(this);
				if (el.offset().top - wh + 100 <= scrollTop && scrollTop <= el.offset().top + el.height()) {
					el.addClass('inview');
				}
			});
		}

		detectInview();

		$(window).on('scroll', function () {
			var wh = $(window).height();
			var scrollTop = $(window).scrollTop();
			var topVideo = $('.top-video video');

			scrollTimeout = setTimeout(function () {
				clearTimeout(scrollTimeout);
				// $('.nav-main_i').removeClass('open');
				// $('body').removeClass('half-menu');
			}, 300);

			if (videoBg.length) {
				if (videoBg.parent().offset().top - wh <= scrollTop && videoBg.parent().offset().top + wh >= scrollTop) {
					videoBg.get(0).play();
				} else {
					videoBg.get(0).pause();
				}
			}
			if (topVideo.length && !topVideo.parent().hasClass('played')) {
				if (scrollTop >= wh) {
					topVideo.get(0).pause();
				} else {
					topVideo.get(0).play();
				}
			}
			detectInview();

			if ($('.numbers').hasClass('inview')) {
				$('.numbers strong').each(function () {
					var el = $(this);
					var number = parseInt(el.attr('data-num'));
					var step = parseInt(el.attr('data-step'));
					var counter = function () {
						var num = parseInt(el.text());
						setTimeout(function () {
							if (num + 1 <= number) {
								el.html(num + step);
								counter();
							}
						}, 50);
					}
					counter();
				});
			}
		});

		$(window).load(function () {
			skrollerDynamic();
		});

		$('.btn-next').on('click', function (e) {
			e.preventDefault();
			$('body, html').animate({
				scrollTop: $('.section-main').offset().top
			}, 1000);
		});
	}

	$(document).on('click', '.about-design a', function (e) {
		e.preventDefault();
		$('.about-design .hide').slideDown();
		if (touch) {
			$('.about-design td').css('display', 'block');
		}
	});

	if (desktop) {
		$('.video-carousel__list').owlCarousel({
			items: 1,
			animateOut: 'fadeOut',
			margin: 0,
			loop: true,
			autoplay: true,
			smartSpeed: 1000
		});
	}

})
;

var isotopeResizeSizeCalc = function (box) {
	$(window).resize(function () {
		var columnWidth = 0;
		if (tablet || box.hasClass('blog-list')) {
			columnWidth = box.width() / 3;
		}
		if (mobile) {
			columnWidth = box.width();
		}
		if (tabletPortrait && box.hasClass('blog-list')) {
			columnWidth = box.width() / 2;
		}
		if (desktop && !box.hasClass('blog-list')) {
			columnWidth = box.width() / 4;
		}
		box = box.isotope({
			masonry: {
				columnWidth: columnWidth
			}
		});
	}).resize();
}

//Inner pages
$(function () {
	var topVideo = $('.top-video');

	$(window).resize(function () {
		var wh = $(window).height();
		if (topVideo.length) {
			topVideo.height(wh);
		}
	}).resize();

	topVideo.find('video').on('ended', function () {
		$(this).closest('.top-video').addClass('played');
		if (!$('#bg-animation-2').length) {
			$('.lang').addClass('drop-black');
		}
		setTimeout(function () {
			skrollerDynamic();
		}, 800);
	});

	if (touch) {
		var videoMuteScroll;

		if (topVideo.length) {
			$(window).on('scroll', function () {
				clearTimeout(videoMuteScroll);
				videoMuteScroll = setTimeout(function () {
					var scrollTop = $(window).scrollTop(),
						videoOffset = topVideo.offset().top;
					if (videoOffset + topVideo.height()) {
						topVideo.find('video').prop('muted', true);
					} else {
						topVideo.find('video').prop('muted', true);
					}
				}, 100);
			});
		}
	}


	setIsotopeList($('.product-list'));
	setIsotopeList($('.team-list'));

	function setIsotopeList(productList) {
		if (productList.length) {

			$(window).on('load', function () {

				productList = productList.isotope({
					layoutMode: 'packery',
					itemSelector: '.item',
					animationOptions: {
						duration: 750,
						easing: 'ease',
						queue: false
					}
				});
				//fillSpaces(productList);
				isotopeResizeSizeCalc(productList);
				setTimeout(function () {
					skrollerDynamic();
				}, 1500);

				setTimeout(function () {
					productList.height(productList.height() - 2);
					$(window).resize();
					// console.log('test height', productList.height());
				}, 100);

				if (!touch) {
					productList.isotope('on', 'arrangeComplete', function () {
						setTimeout(function () {
							productList.removeClass('white');
							productList.height(productList.height() - 1);
						}, 400);
						setTimeout(function () {
							skrollerDynamic();
						}, 1000)
					});
				}
				productList.find('.item').addClass('vis');
			});
		}
	}

	if ($('.blog-list').length) {
		var blogList = $('.blog-list');

		$(window).on('load', function () {
			blogList = blogList.isotope({
				itemSelector: '.item',
				layoutMode: 'packery',
				percentPosition: true,
				animationOptions: {
					duration: 750,
					easing: 'ease',
					queue: false
				}
			});
			setTimeout(function () {
				blogList.addClass('loaded')
			}, 500);
			//fillSpaces(blogList);
			isotopeResizeSizeCalc(blogList);
			blogList.isotope('on', 'arrangeComplete', function () {
				blogList.height(blogList.height() - 1);
			});
			if (!touch) {
				blogList.isotope('on', 'arrangeComplete', function () {
					setTimeout(function () {
						blogList.height(blogList.height() - 1);
						skrollerDynamic();
					}, 1000);
				});
			}
			blogList.find('.item').addClass('vis');
		});
	}

	/*----------- filtering -----------*/
	$('.filter-list').addClass('fix-padding');
	var filterGroup = $('.filter-list, .filter-selected__list');
	// filterGroup.on('touchstart click', 'a', function (e) {
	// 	e.preventDefault();
	// 	var el = $(this);
	// 	$('.filter-selected').removeClass('open');
	// 	$('.filter-selected__title span').html(el.text());
	// 	filterGroup.find('li').removeClass('active');
	// 	el.parent().addClass('active');
	// 	var selector = '.' + el.attr('data-type');
	// 	var list;
	// 	if ($('.product-list').length) {
	// 		list = $('.product-list');
	// 	}
	// 	if ($('.blog-list').length) {
	// 		list = $('.blog-list');
	// 	}
	// 	if ($('.done-list').length) {
	// 		list = $('.done-list');
	// 	}
	// 	if (selector == '.item') {
	// 		filterGroup.addClass('fix-padding');
	// 	} else {
	// 		filterGroup.removeClass('fix-padding');
	// 	}
	// 	if (list.hasClass('done-list')) {
	// 		var visible = list.find(selector);
	// 		var hiddenElements = list.find('.item').not(visible).addClass('inv');
	// 		setTimeout(function () {
	// 			hiddenElements.slideUp();
	// 			visible.slideDown();
	// 			setTimeout(function () {
	// 				visible.removeClass('inv');
	// 				skrollerDynamic();
	// 			}, 400);
	// 		}, 700);
	// 	} else {
	// 		list.addClass('white');
	// 		list.isotope({
	// 			filter: selector,
	// 			animationOptions: {
	// 				duration: 750,
	// 				easing: 'linear',
	// 				queue: false
	// 			}
	// 		});
	// 	}
	// 	return false;
	// });

	// $('.filter-selected__title').on('touchstart click', function (e) {
	// 	e.preventDefault();
	// 	var el = $(this);
	// 	var filter = el.closest('.filter-selected');
	// 	if (filter.hasClass('open')) {
	// 		// filter.removeClass('open');
	// 	} else {
    //         // filter.addClass('open');
	// 	}
	// });

	var videoControls = $('.video-controls'),
		videoBox = $('.top-video video');

	if (videoControls.length) {
		var bar = '';
		for (i = 0; i < 183; i++) {
			if (!(i % 8)) {
				bar += '<div class="item item-9"></div>';
			}
			if (!(i % 2)) {
				bar += '<div class="item item-2"></div>';
			}
			if (!(i % 3)) {
				bar += '<div class="item item-3"></div>';
			}
		}
		videoControls.find('.video-controls__progress').append(bar);
		videoControls.find('.btn-play-2').on('click', function (e) {
			e.preventDefault();
			var el = $(this);
			el.toggleClass('pause');
			if (el.hasClass('pause')) {
				videoBox.get(0).pause();
			} else {
				videoBox.get(0).play();
				$('body, html').animate({
					scrollTop: 0
				}, 1000);
			}
		});

		videoControls.find('.btn-mute').on('click', function (e) {
			e.preventDefault();
			var el = $(this);
			el.toggleClass('mute');
			if (el.hasClass('mute')) {
				videoBox.get(0).volume = 0;
			} else {
				videoBox.get(0).volume = 1;
			}
		});
	}

	
	if ($('.product-carousel__list').length) {

		var prodList = $('.product-carousel__list');

		$(window).resize(function () {
			prodList.height(prodList.width() * .67);
		}).resize();

		prodList.each(function () {
			var list = $(this);
			if (list.find('.item').length > 1) {
				list.find('.item').each(function () {
					var el = $(this);
					el.attr('rel', el.index());
				});
				list.owlCarousel({
					items: 1,
					lazyLoad: true,
					dots: true,
					loop: true,
					autoplay: false,
					autoplayTimeout: 5000,
					onTranslated: function () {
						list.find('.product-carousel__count b').html(parseInt(list.find('.active .item').attr('rel')) + 1);
					},
					onInitialized: function () {
						var itemsCount = list.find('.item').length;
						if (itemsCount >= 20) {
							list.find('.owl-dots').remove();
							list.find('.owl-controls').append('<div class="product-carousel__count"><b>1</b>/<i>' + itemsCount + '</i></div>');
						}
						list.removeClass('hide-elements');
						if (list.find('.owl-item').length == 1) {
							list.find('.owl-controls').css('display', 'none');
							list.parent().addClass('no-slides');
						}
						list.siblings('.product-carousel__last').find('a').on('click', function (e) {
							e.preventDefault();
							list.trigger('to.owl.carousel', [-1]);
						});
						setTimeout(function () {
							list.find('.active').siblings().not(list.find('.cloned')).find('img').slice(0, 2).each(function () {
								var el = $(this);
								el.attr('src', el.attr('data-src')).css('opacity', 1);
							});
						}, 200);
					},

				});
				$('.product-carousel__btn-next').click(function() {
					list.trigger('next.owl.carousel');
				})
				$('.product-carousel__btn-prev').click(function() {
					list.trigger('prev.owl.carousel');
				})
			} else {
				list.find('.item img').each(function () {
					var el = $(this);
					el.attr('src', el.attr('data-src')).css('opacity', 1);
				});
			}
		})
	}

	if ($('.team-carousel__list').length) {

		var prodList = $('.team-carousel__list');

		$(window).resize(function () {
			prodList.height(prodList.width() * .67);
		}).resize();

		prodList.each(function () {
			var list = $(this);
			if (list.find('.item').length > 1) {
				list.find('.item').each(function () {
					var el = $(this);
					el.attr('rel', el.index());
				});
				list.owlCarousel({
					items: 1,
					lazyLoad: true,
					dots: true,
					loop: true,
					autoplay: false,
					autoplayTimeout: 5000,
					onTranslated: function () {
						list.find('.team-carousel__count b').html(parseInt(list.find('.active .item').attr('rel')) + 1);
					},
					onInitialized: function () {
						var itemsCount = list.find('.item').length;
						if (itemsCount >= 20) {
							list.find('.owl-dots').remove();
							list.find('.owl-controls').append('<div class="team-carousel__count"><b>1</b>/<i>' + itemsCount + '</i></div>');
						}
						list.removeClass('hide-elements');
						if (list.find('.owl-item').length == 1) {
							list.find('.owl-controls').css('display', 'none');
							list.parent().addClass('no-slides');
						}
						list.siblings('.team-carousel__last').find('a').on('click', function (e) {
							e.preventDefault();
							list.trigger('to.owl.carousel', [-1]);
						});
						setTimeout(function () {
							list.find('.active').siblings().not(list.find('.cloned')).find('img').slice(0, 2).each(function () {
								var el = $(this);
								el.attr('src', el.attr('data-src')).css('opacity', 1);
							});
						}, 200);
					},

				});
				$('.team-carousel__btn-next').click(function() {
					list.trigger('next.owl.carousel');
				})
				$('.team-carousel__btn-prev').click(function() {
					list.trigger('prev.owl.carousel');
				})
			} else {
				list.find('.item img').each(function () {
					var el = $(this);
					el.attr('src', el.attr('data-src')).css('opacity', 1);
				});
			}
		})
	}

	


	//lazy load for images
	var promises = [];

	$('.img-box .item img').each(function () {
		var img = new Image();
		var el = $(this);
		var d = $.Deferred();
		promises.push(d.promise());
		img.onload = function () {
			el.attr('src', img.src).parent().addClass('loaded');
			d.resolve();
		};
		img.onerror = function () {
			d.resolve();
		}
		img.src = el.attr('data-src');
	});

	if ($('.img-box').length) {
		$.when.apply($, promises).then(function () {
			setTimeout(function () {
				skrollerDynamic();
			}, 1500);
		});
	}


	//contact form and subscribe input focus
	$('.contact-form_i input[type="text"], .contact-form_i textarea, .subscribe__input input').add('.js-price-calc-form').find('input[type="text"]')
		.on('focus', function () {
		var el = $(this);
		el.parent().removeClass('error');
		var label = el.siblings('label');
		label.css('left', label.parent().width() - label.width());
		el.addClass('filled');
	}).on('blur', function () {
		var el = $(this);
		if (el.val() == '') {
			el.siblings('label').css('left', 0);
			el.removeClass('filled');
		}
	});

	//open contact form
	$('.open-contact-form').on('click', function (e) {
		e.preventDefault();
		$('body').addClass('contact-form-open');
	});

	$('.contact-form .close').on('click', function (e) {
		e.preventDefault();
		$('body').removeClass('contact-form-open');
	});


	//open team-card
	var $teamCardPopup = $('.js-team-card');
	// $('.team-list').children('.item').on('click', function (e) {
	// 	e.preventDefault();
	// 	e.stopPropagation();
	// 	var $thisParent = $(this).parent();
	// 	$('body').addClass('team-card-open');
	// 	$teamCardPopup
	// 		.css('top', $thisParent.offset().top)
	// 		.css('left', $thisParent.offset().left)
	// 		.css('opacity', 1)
	// 		.css('width', $thisParent.outerWidth() + (window.innerWidth > 1024 ? 10 : 0));
    //
	// 	if(window.innerWidth<768){
	// 		$teamCardPopup.css('left', 0).css('width', window.innerWidth);
	// 	}
    //
	// 	$('html, body').stop(true, true).animate({'scrollTop': $thisParent.offset().top - 30}, 400);
	// });

	$teamCardPopup.find('.close').on('click', function (e) {
		e.preventDefault();
		e.stopPropagation();
		$('body').removeClass('team-card-open');
		$teamCardPopup.css('left', -$teamCardPopup.width()-100).css('opacity', 0);
	});

	//open calc-form
	var $calcPriceForm = $('.js-price-calc-form');
	if($calcPriceForm.length){
		$calcPriceForm.css('bottom', $('.footer').height()).css('width', $('.content-wrap').width()).css('left', -$calcPriceForm.width()-100);
	}
	$('.js-open-calc-form').on('click', function (e) {
		e.preventDefault();
		e.stopPropagation();
		$('body').addClass('price-calc-form-open');
		var contentWidth = $('.content-wrap').width();
		var mainNavWidth = $('.nav-main_i').width();
		$calcPriceForm
			.css('bottom', $('.footer').height())
			// .css('left', (window.innerWidth - contentWidth) / 2)
			.css('opacity', 1)
			// .css('width', contentWidth);
		if(window.innerWidth>1024){
			$calcPriceForm
				.css('left', mainNavWidth)
				.css('width', (window.innerWidth - mainNavWidth - 100));
		} else {
			$calcPriceForm
				.css('left', (window.innerWidth - contentWidth) / 2)
				.css('width', contentWidth);
		}


		if(window.innerWidth<768){
			$calcPriceForm.css('left', 0).css('width', window.innerWidth);
		}

		$('html, body').stop(true, true).animate({'scrollTop': $calcPriceForm.offset().top - 10}, 400);
	});

	$calcPriceForm.find('.close').on('click', function (e) {
		e.preventDefault();
		e.stopPropagation();
		$('body').removeClass('price-calc-form-open');
		$calcPriceForm.css('left', -$calcPriceForm.width()-100).css('opacity', 0);
	});

	$('body').on('click', function (e) {
		var el = $(e.target);
		if (!el.closest('.contact-form').length && !el.closest('.open-contact-form').length) {
			$('body').removeClass('contact-form-open');
		}
		if (!el.closest('.js-team-card').length) {
			$teamCardPopup.find('.close').trigger('click');
		}
		if (!el.closest('.js-price-calc-form').length) {
			$calcPriceForm.find('.close').trigger('click');
		}
	});

	$('.about-honors__right .btn-transparent').on('click', function (e) {
		e.preventDefault();
		var el = $(this);
		if (el.hasClass('active')) {
			el.removeClass('active');
			$('.about-honors__list__item').slideUp(function () {
				setTimeout(function () {
					skrollerDynamic();
				}, 500)
			});
		} else {
			$('.about-honors__right .btn-transparent').removeClass('active');
			el = el.addClass('active').attr('href');
			el = $(el);
			$('.about-honors__list__item').slideUp();
			el.slideDown(function () {
				setTimeout(function () {
					skrollerDynamic();
				}, 500);
			});
		}
	});

	$('.about-honors__list__item .close').on('click', function (e) {
		e.preventDefault();
		$('.about-honors__list__item').slideUp(function () {
			setTimeout(function () {
				skrollerDynamic();
			}, 500)
		});
		$('.about-honors__right .btn-transparent').removeClass('active');
	});

	//price page show by links
	

	
	
	$(document).on('click', '.social-post__subscribe', function (e) {
		e.preventDefault();
		$('.subscribe_single').slideToggle();
	});

	$(document).on('click', '.back-top', function (e) {
		e.preventDefault();
		$('html, body').animate({'scrollTop': 0}, 1000);
	});

	function matrixStyleRounding(inObj) {
		if(inObj.length){
			for(var i = 0; i < inObj.length; ++i){
				var tmpObj = $(inObj[i]);
				var matrix = tmpObj.css('transform');
				matrix = matrix.slice(7, -1).split(' ').map(function(item) {
					return parseInt(item);
				});
				tmpObj.css('transform', 'matrix(' + matrix.join(',') + ')');
			}
		}
	}
	matrixStyleRounding($('.js-matrix-r'));
    //
	// $.cookie("example", "foo", { expires: 1 }); // Sample 2
    //
	// if($.cookie("example") == 'foo'){
	// 	alert(1)
	// 	$(this).closest('.top-video').addClass('played');
	// 	if (!$('#bg-animation-2').length) {
	// 		$('.lang').addClass('drop-black');
	// 	}
	// }
	if($('.sub-page_cookies').length){
		Cookies.set('video-played-' + $('.top-video source').attr('src'), true, {expires: 1, domain: document.domain, path: "/"});
	}

});
