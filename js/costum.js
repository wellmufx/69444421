

/* Please ❤ this if you like it! */



(function($) { "use strict";

	//Switch dark/light
	
	$(".switch").on('click', function () {
		if ($("body").hasClass("light")) {
			$("body").removeClass("light");
			$(".switch").removeClass("switched");
		}
		else {
			$("body").addClass("light");
			$(".switch").addClass("switched");
		}
	});
		
	$(document).ready(function(){"use strict";
	
		//Scroll back to top
		
		var progressPath = document.querySelector('.progress__wrap path');
		var pathLength = progressPath.getTotalLength();
		progressPath.style.transition = progressPath.style.WebkitTransition = 'none';
		progressPath.style.strokeDasharray = pathLength + ' ' + pathLength;
		progressPath.style.strokeDashoffset = pathLength;
		progressPath.getBoundingClientRect();
		progressPath.style.transition = progressPath.style.WebkitTransition = 'stroke-dashoffset 10ms linear';		
		var updateProgress = function () {
			var scroll = $(window).scrollTop();
			var height = $(document).height() - $(window).height();
			var progress = pathLength - (scroll * pathLength / height);
			progressPath.style.strokeDashoffset = progress;
		}
		updateProgress();
		$(window).scroll(updateProgress);	
		var offset = 50;
		var duration = 550;
		jQuery(window).on('scroll', function() {
			if (jQuery(this).scrollTop() > offset) {
				jQuery('.progress__wrap').addClass('active-progress');
			} else {
				jQuery('.progress__wrap').removeClass('active-progress');
			}
		});				
		jQuery('.progress__wrap').on('click', function(event) {
			event.preventDefault();
			jQuery('html, body').animate({scrollTop: 0}, duration);
			return false;
		})
		
		
	});
	
})(jQuery); 


function getCookie(name) {
    let matches = document.cookie.match(new RegExp(
    "(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"
    ));
    return matches ? decodeURIComponent(matches[1]) : undefined;
}
let cookiecook = getCookie("cookiecook"),
cookiewin = document.getElementsByClassName('coockie__setting__wp')[0];    

if (cookiecook != "no") {
    cookiewin.style.display="flex"; 
    document.getElementById("cookie__close").addEventListener("click", function(){
        cookiewin.style.display="none";    
        let date = new Date;
        date.setDate(date.getDate() + 10);    
        document.cookie = "cookiecook=no; path=/; expires=" + date.toUTCString();               
    });
}else{
	document.getElementById("cookie__close").addEventListener("click", function(){
        cookiewin.style.display="none";    });
}



jQuery(document).ready(function($){
	$('.settings__app').on('click', function(event){
	  event.preventDefault();
	  $(this).toggleClass('is-visible');
	  $('.settings__menu__nav').toggleClass('is-visible');
	  if ( $(".settings__menu__nav").hasClass("is-visible") ) {
		$('body').addClass('scrolloff');
	  }else{
		$('body').removeClass('scrolloff');
	  }
	  $('.search__app').removeClass('is-visible');
	  $('.search__menu__nav').removeClass('is-visible');
	  $('.mobil__burger').removeClass('is-visible');
	  $('nav').removeClass('is-visible');
	});
	$('.search__app').on('click', function(event){
	  event.preventDefault();
	  $(this).toggleClass('is-visible');
	  $('.search__menu__nav').toggleClass('is-visible');
	  if ( $(".search__menu__nav").hasClass("is-visible") ) {
		$('body').addClass('scrolloff');
	  }else{
		$('body').removeClass('scrolloff');
	  }
	  $('.settings__app').removeClass('is-visible');
	  $('.settings__menu__nav').removeClass('is-visible');
	  $('.settings__searh').removeClass('fillter-fn');
	  $('.search__menu__nav').removeClass('fillter-fn');
	  $('.mobil__burger').removeClass('is-visible');
	  $('nav').removeClass('is-visible');
	});
	// iconita menu      
	$('.mobil__burger').on('click', function(event){
	  event.preventDefault();
	  $(this).toggleClass('is-visible');
	  $('nav').toggleClass('is-visible');
	  if ( $("nav").hasClass("is-visible") ) {
		$('body').addClass('scrolloff');
	  }else{
		$('body').removeClass('scrolloff');
	  }
	  $('.search__app').removeClass('is-visible');
	  $('.settings__app').removeClass('is-visible');
	  $('.settings__menu__nav').removeClass('is-visible');
	  $('.settings__searh').removeClass('fillter-fn');
	  $('.search__menu__nav').removeClass('is-visible');
	});
	// Filter
	$('.settings__sbtn').on('click', function(event){
	  event.preventDefault();
	  $(this).toggleClass('fillter-fn');
	  $('.settings__searh').toggleClass('fillter-fn');
	  $('.search__menu__nav').toggleClass('fillter-fn');
	});
	// Confirmare check
	$('.check_element_qine').on('click', function(event){
	  event.preventDefault();
	  $(this).toggleClass('active');
	  });
	// Vezi politica
	$('.check_element_info').on('click', function(event){
	  event.preventDefault();
	  $(this).toggleClass('active');
	  $('.cont_elem_info').toggleClass('active');
	  });
	});
  // Schimbarea Limbei
  $('.select__lang').click(function() {
	var $group = $(this).closest('.lang__panel');
	$('.select__lang', $group).removeClass("active");
	$(this).addClass("active");
  });
  // Schimbarea Intrebari populare
  $('.line_group_q').click(function() {
	var $group = $(this).closest('.list_group');
	$('.line_group_q', $group).removeClass("active");
	$(this).addClass("active");
  });
  $('.cont__qs').click(function() {
	var $group = $(this).closest('.all__cont__faq');
	if ( $(this).hasClass("active") ){
	  $(this).removeClass("active");
	}else {
	  $('.cont__qs', $group).removeClass("active");
	  $(this).addClass("active");
	}
	
  });
  // Schimbarea Temei
  function preloadFunc(){
	  // document.documentElement.style.display = 'none';
	}
	window.addEventListener("DOMContentLoaded", function ready(){
	  if(localStorage.getItem('c__theme') == 'white'){
		var $group = $(this).closest('.theme__panel');
		$('.tm__panel', $group).removeClass("active");
		$(".t__white").addClass("active");
	  }
	  else if(localStorage.getItem('c__theme') == 'dark'){
		var $group = $(this).closest('.theme__panel');
		$('.tm__panel', $group).removeClass("active");
		$(".t__dark").addClass("active");
	  }
	  else{
		var $group = $(this).closest('.theme__panel');
		$('.tm__panel', $group).removeClass("active");
		$(".t__auto").addClass("active");
	  }

	  if(localStorage.getItem('c__color') == 'green'){
		var $group = $(this).closest('.color__panel');
		$('.co__panel', $group).removeClass("active");
		$(".co__gren").addClass("active");
	  }else if(localStorage.getItem('c__color') == 'grey'){
		var $group = $(this).closest('.color__panel');
		$('.co__panel', $group).removeClass("active");
		$(".co__grey").addClass("active");
	  }else{
		var $group = $(this).closest('.color__panel');
		$('.co__panel', $group).removeClass("active");
		$(".co__blue").addClass("active");
	  }
	});
  $('.tm__panel').click(function() {
	var $group = $(this).closest('.theme__panel');
	$('.tm__panel', $group).removeClass("active");
	$(this).addClass("active");
	if ( $(".t__dark").hasClass("active") ) {
	  localStorage.setItem('c__theme', "dark")
	  if(localStorage.getItem('c__color') == 'green'){
		document.getElementById("t__mod").href="/css/skins/dark_gn.css";
		document.getElementById("t__mod__tw").href="/css/skins/dark_gn.css";
	  }else if(localStorage.getItem('c__color') == 'grey'){
		document.getElementById("t__mod").href="/css/skins/dark_gy.css";
		document.getElementById("t__mod__tw").href="/css/skins/dark_gy.css";
	  }else{
		document.getElementById("t__mod").href="/css/skins/dark_bl.css";
		document.getElementById("t__mod__tw").href="/css/skins/dark_bl.css";
	  }
	} else if($(".t__white").hasClass("active")){
	  localStorage.setItem('c__theme', "white")
	  if(localStorage.getItem('c__color') == 'green'){
		document.getElementById("t__mod").href="/css/skins/white_gn.css";
		document.getElementById("t__mod__tw").href="/css/skins/white_gn.css";
	  }else if(localStorage.getItem('c__color') == 'grey'){
		document.getElementById("t__mod").href="/css/skins/white_gy.css";
		document.getElementById("t__mod__tw").href="/css/skins/white_gy.css";
	  }else{
		document.getElementById("t__mod").href="/css/skins/white_bl.css";
		document.getElementById("t__mod__tw").href="/css/skins/white_bl.css";
	  }
	} else {
	  localStorage.setItem('c__theme', "auto")
	  if(localStorage.getItem('c__color') == 'green'){
		document.getElementById("t__mod").href="/css/skins/white_gn.css";
		document.getElementById("t__mod__tw").href="/css/skins/dark_gn.css";
	  }else if(localStorage.getItem('c__color') == 'grey'){
		document.getElementById("t__mod").href="/css/skins/white_gy.css";
		document.getElementById("t__mod__tw").href="/css/skins/dark_gy.css";
	  }else{
		document.getElementById("t__mod").href="/css/skins/white_bl.css";
		document.getElementById("t__mod__tw").href="/css/skins/dark_bl.css";
	  }
	}
  });
  // Schimbarea culorii
  $('.co__panel').click(function() {
	var $group = $(this).closest('.color__panel');
	$('.co__panel', $group).removeClass("active");
	$(this).addClass("active");
	if ( $(".co__blue").hasClass("active")) {
	  localStorage.setItem('c__color', "blue");
	  if(localStorage.getItem('c__theme') == 'dark'){
		document.getElementById("t__mod").href="/css/skins/dark_bl.css";
		document.getElementById("t__mod__tw").href="/css/skins/dark_bl.css";
	  }else if(localStorage.getItem('c__theme') == 'white'){
		document.getElementById("t__mod").href="/css/skins/white_bl.css";
		document.getElementById("t__mod__tw").href="/css/skins/white_bl.css";
	  }else{
		document.getElementById("t__mod").href="/css/skins/white_bl.css";
		document.getElementById("t__mod__tw").href="/css/skins/dark_bl.css";
	  }
	} else if( $(".co__gren").hasClass("active")){
	  localStorage.setItem('c__color', "green");
	  if(localStorage.getItem('c__theme') == 'dark'){
		document.getElementById("t__mod").href="/css/skins/dark_gn.css";
		document.getElementById("t__mod__tw").href="/css/skins/dark_gn.css";
	  }else if(localStorage.getItem('c__theme') == 'white'){
		document.getElementById("t__mod").href="/css/skins/white_gn.css";
		document.getElementById("t__mod__tw").href="/css/skins/white_gn.css";
	  }else{
		document.getElementById("t__mod").href="/css/skins/white_gn.css";
		document.getElementById("t__mod__tw").href="/css/skins/dark_gn.css";
	  }
	} else{
	  localStorage.setItem('c__color', "grey");
	  if(localStorage.getItem('c__theme') == 'dark'){
		document.getElementById("t__mod").href="/css/skins/dark_gy.css";
		document.getElementById("t__mod__tw").href="/css/skins/dark_gy.css";
	  }else if(localStorage.getItem('c__theme') == 'white'){
		document.getElementById("t__mod").href="/css/skins/white_gy.css";
		document.getElementById("t__mod__tw").href="/css/skins/white_gy.css";
	  }else{
		document.getElementById("t__mod").href="/css/skins/white_gy.css";
		document.getElementById("t__mod__tw").href="/css/skins/dark_gy.css";
	  }
	}
  });
  // filtru cookie
  $('.btn__set__wp .material-icons').on('click', function(event){
	event.preventDefault();
	$(this).toggleClass('active');
	if ($(this).text() == "toggle_off")
	 $(this).text("toggle_on")
	else
	  $(this).text("toggle_off");
  });
  $('.stbtn').on('click', function(event){
	  event.preventDefault();
	  $(this).removeClass('active');
	  $('.inforalt').addClass('active');
	  $('.cont__inf__wp').removeClass('active');
	  $('.cont-set-wp').addClass('active');
	});
	$('.inforalt').on('click', function(event){
	  event.preventDefault();
	  $(this).removeClass('active');
	  $('.stbtn').addClass('active');
	  $('.cont-set-wp').removeClass('active');
	  $('.cont__inf__wp').addClass('active');
	});
	$('.cc__active').on('click', function(event){
	  $('.coockie__setting__wp').css("display", "flex");
	});