var forEach=function(t,o,r){if("[object Object]"===Object.prototype.toString.call(t))for(var c in t)Object.prototype.hasOwnProperty.call(t,c)&&o.call(r,t[c],c,t);else for(var e=0,l=t.length;l>e;e++)o.call(r,t[e],e,t)};
var hamburgers = document.querySelectorAll(".hamburger");
if (hamburgers.length > 0) {
  forEach(hamburgers, function(hamburger) {
    hamburger.addEventListener("click", function() {
      this.classList.toggle("is-active");
    }, false);
  });
}
$(document).ready(function() {
	$('.header__btn').click(function() {
		$('.header__mobile').toggleClass('header__mobile--open');
		$('body').toggleClass('overflow-heidden ');
	});

	$('.header-mobile__btn').click(function() {
		$('.header__mobile').toggleClass('header__mobile--open');
		$('body').toggleClass('overflow-heidden ');
	});

	let scrolled = 25;

	// changeScrolled();


$(window).scroll(function(){
	let $this = $(this),
		st = $this.scrollTop();

	menuScrollDesktop(st);
});

$(window).resize(function(){
	let st = $(window).width();

	menuDesktopShow(st);
});

function menuScrollDesktop(st) {
	if(st > scrolled){
		$('body').addClass('scrolled');
	}else{
		$('body').removeClass('scrolled');
	}
};

function menuDesktopShow(st) {
	if(st > 991) {
		if($('.overflow-heidden').length) {
			$('.header__mobile').toggleClass('header__mobile--open');
			$('body').toggleClass('overflow-heidden');
		}
	}
};

function changeScrolled() {
	scrolled = 0;
};

});
let slider = $('.slider').slick({
  arrows: false,
	dots: true,
	dotsClass: 'slider__dots',
	infinite: false,
	speed: 300,
  fade: true,
  cssEase: 'linear',
  slidesToScroll: 1
});