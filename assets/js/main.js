/*
	Massively by HTML5 UP
	html5up.net | @ajlkn
	Free for personal and commercial use under the CCA 3.0 license (html5up.net/license)
*/
//Get the button:
mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

(function($) {

	var	$window = $(window),
		$body = $('body'),
		$wrapper = $('#wrapper'),
		$header = $('#header'),
		$nav = $('#nav'),
		$main = $('#main'),
		$navPanelToggle, $navPanel, $navPanelInner;

	// Breakpoints.
		breakpoints({
			default:   ['1681px',   null       ],
			xlarge:    ['1281px',   '1680px'   ],
			large:     ['981px',    '1280px'   ],
			medium:    ['737px',    '980px'    ],
			small:     ['481px',    '736px'    ],
			xsmall:    ['361px',    '480px'    ],
			xxsmall:   [null,       '360px'    ]
		});

	/**
	 * Applies parallax scrolling to an element's background image.
	 * @return {jQuery} jQuery object.
	 */
	$.fn._parallax = function(intensity) {

		var	$window = $(window),
			$this = $(this);

		if (this.length == 0 || intensity === 0)
			return $this;

		if (this.length > 1) {

			for (var i=0; i < this.length; i++)
				$(this[i])._parallax(intensity);

			return $this;

		}

		if (!intensity)
			intensity = 0.25;

		$this.each(function() {

			var $t = $(this),
				$bg = $('<div class="bg"></div>').appendTo($t),
				on, off;

			on = function() {

				$bg
					.removeClass('fixed')
					.css('transform', 'matrix(1,0,0,1,0,0)');

				$window
					.on('scroll._parallax', function() {

						var pos = parseInt($window.scrollTop()) - parseInt($t.position().top);

						$bg.css('transform', 'matrix(1,0,0,1,0,' + (pos * intensity) + ')');

					});

			};

			off = function() {

				$bg
					.addClass('fixed')
					.css('transform', 'none');

				$window
					.off('scroll._parallax');

			};

			// Disable parallax on ..
				if (browser.name == 'ie'			// IE
				||	browser.name == 'edge'			// Edge
				||	window.devicePixelRatio > 1		// Retina/HiDPI (= poor performance)
				||	browser.mobile)					// Mobile devices
					off();

			// Enable everywhere else.
				else {

					breakpoints.on('>large', on);
					breakpoints.on('<=large', off);

				}

		});

		$window
			.off('load._parallax resize._parallax')
			.on('load._parallax resize._parallax', function() {
				$window.trigger('scroll');
			});

		return $(this);

	};

	// Play initial animations on page load.
		$window.on('load', function() {
			window.setTimeout(function() {
				$body.removeClass('is-preload');
			}, 100);
		});

	// Scrolly.
		$('.scrolly').scrolly();

	// Background.
		$wrapper._parallax(0.925);

	// Nav Panel.

		// Toggle.
			$navPanelToggle = $(
				'<a href="#navPanel" id="navPanelToggle">Menu</a>'
			)
				.appendTo($wrapper);

			// Change toggle styling once we've scrolled past the header.
				$header.scrollex({
					bottom: '5vh',
					enter: function() {
						$navPanelToggle.removeClass('alt');
					},
					leave: function() {
						$navPanelToggle.addClass('alt');
					}
				});

		// Panel.
			$navPanel = $(
				'<div id="navPanel">' +
					'<nav>' +
					'</nav>' +
					'<a href="#navPanel" class="close"></a>' +
				'</div>'
			)
				.appendTo($body)
				.panel({
					delay: 500,
					hideOnClick: true,
					hideOnSwipe: true,
					resetScroll: true,
					resetForms: true,
					side: 'right',
					target: $body,
					visibleClass: 'is-navPanel-visible'
				});

			// Get inner.
				$navPanelInner = $navPanel.children('nav');

			// Move nav content on breakpoint change.
				var $navContent = $nav.children();

				breakpoints.on('>medium', function() {

					// NavPanel -> Nav.
						$navContent.appendTo($nav);

					// Flip icon classes.
						$nav.find('.icons, .icon')
							.removeClass('alt');

				});

				breakpoints.on('<=medium', function() {

					// Nav -> NavPanel.
						$navContent.appendTo($navPanelInner);

					// Flip icon classes.
						$navPanelInner.find('.icons, .icon')
							.addClass('alt');

				});

			// Hack: Disable transitions on WP.
				if (browser.os == 'wp'
				&&	browser.osVersion < 10)
					$navPanel
						.css('transition', 'none');

	// Intro.
		var $intro = $('#intro');

		if ($intro.length > 0) {

			// Hack: Fix flex min-height on IE.
				if (browser.name == 'ie') {
					$window.on('resize.ie-intro-fix', function() {

						var h = $intro.height();

						if (h > $window.height())
							$intro.css('height', 'auto');
						else
							$intro.css('height', h);

					}).trigger('resize.ie-intro-fix');
				}

			// Hide intro on scroll (> small).
				breakpoints.on('>small', function() {

					$main.unscrollex();

					$main.scrollex({
						mode: 'bottom',
						top: '25vh',
						bottom: '-50vh',
						enter: function() {
							$intro.addClass('hidden');
						},
						leave: function() {
							$intro.removeClass('hidden');
						}
					});

				});

			// Hide intro on scroll (<= small).
				breakpoints.on('<=small', function() {

					$main.unscrollex();

					$main.scrollex({
						mode: 'middle',
						top: '15vh',
						bottom: '-15vh',
						enter: function() {
							$intro.addClass('hidden');
						},
						leave: function() {
							$intro.removeClass('hidden');
						}
					});

			});

		}

})(jQuery);

 var prev=0;


$("#quotebutton").on("click", update);
  $("dl").css("fontSize", "16px");
 $("dt").css("fontSize", "19px");

function update(){
  change();
 createButton(); 
}
function createButton() {

  // Remove Whatever is in the tweeetbox div if theres somethign 
  //there to avoid adding multiple tweetbuttons
 $("#twtbox").empty();
 
  // Create a New Tweet Element

  var link = document.createElement('a');
  link.setAttribute('href', 'https://twitter.com/share');
  link.setAttribute('class', 'twitter-share-button');
  link.setAttribute('style', 'margin-top:5px;');
  link.setAttribute('id', 'twitterbutton');
  link.setAttribute("data-text", tweettext);
  link.setAttribute("data-size", "large");

  // Put it inside the twtbox div
  tweetdiv = document.getElementById('twtbox');
  tweetdiv.appendChild(link);

  twttr.widgets.load(); //very important
}



function change() {
  var quotes = ["Don't cry because it's over, smile because it happened@Dr. Seuss", "In the end, it's not the years in your life that count. It's the life in your years.@Abraham Lincoln", "Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.@Albert Einstein", "Be who you are and say what you feel, because those who mind don't matter, and those who matter don't mind.@Bernard M. Baruch", "A room without books is like a body without a soul.@Marcus Tullius Cicero", "So many books, so little time.” @Frank Zappa", "Be the change that you wish to see in the world.@Mahatma Gandhi", "If you tell the truth, you don't have to remember anything.@Mark Twain"];
var num=Math.floor(Math.random() * quotes.length);
  while(num==prev){
    num=Math.floor(Math.random() * quotes.length);
  }
  prev=num;
  var quotedisplay = quotes[num].split("@");
  //console.log(quotedisplay[0]);
  //console.log(quotedisplay[1]);

  tweettext = quotedisplay[0] + " --"+ quotedisplay[1] ;
  document.getElementById('quote').innerHTML =quotedisplay[0];
  document.getElementById('author').innerHTML = "--" + quotedisplay[1];

}

$(document).ready(function() {

  var tweettext = "";

  change();
  createButton();

  $("dt").css("fontSize", "19px");
  $("dl").css("fontSize", "16px");

  /**Be who you are and say what you feel, because those who mind don't matter, and those who matter don't mind.@Bernard M. Baruch
  A room without books is like a body without a soul.@Marcus Tullius Cicero
  So many books, so little time.” @Frank Zappa
  Be the change that you wish to see in the world.@Mahatma Gandhi
  If you tell the truth, you don't have to remember anything.@Mark Twain
  Always forgive your enemies; nothing annoys them so much. @Oscar Wilde
  Live as if you were to die tomorrow. Learn as if you were to live forever.@Mahatma Gandhi
  Don't think or judge, just listen.@Sarah Dessen
  One day, in retrospect, the years of struggle will strike you as the most beautiful.@Sigmund Freud
  Don't be afraid of your fears. They're not there to scare you. They're there to let you know that something is worth it.@C JoyBell C
  For great men, religion is a way of making friends; small people make religion a fighting tool.@A.P.J. Abdul Kalam
  Dreams are not those which comes while we are sleeping, but dreams are those when u don't sleep before fulfilling them.@A.P.J. Abdul Kalam
  **/
});