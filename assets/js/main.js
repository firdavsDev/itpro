(function(){var gtConstEvalStartTime = new Date();/*

  Copyright The Closure Library Authors.
  SPDX-License-Identifier: Apache-2.0
 */
 var h=this||self;function l(a,b){function c(){}c.prototype=b.prototype;a.i=b.prototype;a.prototype=new c;a.prototype.constructor=a;a.h=function(g,f,k){for(var e=Array(arguments.length-2),d=2;d<arguments.length;d++)e[d-2]=arguments[d];return b.prototype[f].apply(g,e)}}function m(a){return a};function n(a){if(Error.captureStackTrace)Error.captureStackTrace(this,n);else{var b=Error().stack;b&&(this.stack=b)}a&&(this.message=String(a))}l(n,Error);n.prototype.name="CustomError";function p(a,b){a=a.split("%s");for(var c="",g=a.length-1,f=0;f<g;f++)c+=a[f]+(f<b.length?b[f]:"%s");n.call(this,c+a[g])}l(p,n);p.prototype.name="AssertionError";function q(a,b){throw new p("Failure"+(a?": "+a:""),Array.prototype.slice.call(arguments,1));};var r;function u(a,b){this.g=b===v?a:""}u.prototype.toString=function(){return this.g+""};var v={};var w=null,x=/^[\w+/_-]+[=]{0,2}$/;function y(a){return a.querySelector?(a=a.querySelector("script[nonce]"))&&(a=a.nonce||a.getAttribute("nonce"))&&x.test(a)?a:"":""};function z(a){var b=document.getElementsByTagName("head")[0];b||(b=document.body.parentNode.appendChild(document.createElement("head")));b.appendChild(a)}
 function _loadJs(a){var b=document;var c="SCRIPT";"application/xhtml+xml"===b.contentType&&(c=c.toLowerCase());c=b.createElement(c);c.type="text/javascript";c.charset="UTF-8";if(void 0===r){b=null;var g=h.trustedTypes;if(g&&g.createPolicy){try{b=g.createPolicy("goog#html",{createHTML:m,createScript:m,createScriptURL:m})}catch(t){h.console&&h.console.error(t.message)}r=b}else r=b}a=(b=r)?b.createScriptURL(a):a;a=new u(a,v);a:{try{var f=c&&c.ownerDocument,k=f&&(f.defaultView||f.parentWindow);k=k||h;
 if(k.Element&&k.Location){var e=k;break a}}catch(t){}e=null}if(e&&"undefined"!=typeof e.HTMLScriptElement&&(!c||!(c instanceof e.HTMLScriptElement)&&(c instanceof e.Location||c instanceof e.Element))){e=typeof c;if("object"==e&&null!=c||"function"==e)try{var d=c.constructor.displayName||c.constructor.name||Object.prototype.toString.call(c)}catch(t){d="<object could not be stringified>"}else d=void 0===c?"undefined":null===c?"null":typeof c;q("Argument is not a %s (or a non-Element, non-Location mock); got: %s",
 "HTMLScriptElement",d)}a instanceof u&&a.constructor===u?d=a.g:(d=typeof a,q("expected object of type TrustedResourceUrl, got '"+a+"' of type "+("object"!=d?d:a?Array.isArray(a)?"array":d:"null")),d="type_error:TrustedResourceUrl");c.src=d;(d=c.ownerDocument&&c.ownerDocument.defaultView)&&d!=h?d=y(d.document):(null===w&&(w=y(h.document)),d=w);d&&c.setAttribute("nonce",d);z(c)}
 function _loadCss(a){var b=document.createElement("link");b.type="text/css";b.rel="stylesheet";b.charset="UTF-8";b.href=a;z(b)}function _isNS(a){a=a.split(".");for(var b=window,c=0;c<a.length;++c)if(!(b=b[a[c]]))return!1;return!0}function _setupNS(a){a=a.split(".");for(var b=window,c=0;c<a.length;++c)b.hasOwnProperty?b.hasOwnProperty(a[c])?b=b[a[c]]:b=b[a[c]]={}:b=b[a[c]]||(b[a[c]]={});return b}
 window.addEventListener&&"undefined"==typeof document.readyState&&window.addEventListener("DOMContentLoaded",function(){document.readyState="complete"},!1);
 if (_isNS('google.translate.Element')){return}(function(){var c=_setupNS('google.translate._const');c._cest = gtConstEvalStartTime;gtConstEvalStartTime = undefined;c._cl='en';c._cuc='googleTranslateElementInit';c._cac='';c._cam='';c._ctkk='450130.795388638';var h='translate.googleapis.com';var s=(true?'https':window.location.protocol=='https:'?'https':'http')+'://';var b=s+h;c._pah=h;c._pas=s;c._pbi=b+'/translate_static/img/te_bk.gif';c._pci=b+'/translate_static/img/te_ctrl3.gif';c._pli=b+'/translate_static/img/loading.gif';c._plla=h+'/translate_a/l';c._pmi=b+'/translate_static/img/mini_google.png';c._ps=b+'/translate_static/css/translateelement.css';c._puh='translate.google.com';_loadCss(c._ps);_loadJs(b+'/translate_static/js/element/main.js');})();})();
!(function($) {
  "use strict";

  // Preloader
  $(window).on('load', function() {
    if ($('#preloader').length) {
      $('#preloader').delay(100).fadeOut('slow', function() {
        $(this).remove();
      });
    }
  });

  // Smooth scroll for the navigation menu and links with .scrollto classes
  var scrolltoOffset = $('#header').outerHeight() - 21;
  $(document).on('click', '.nav-menu a, .mobile-nav a, .scrollto', function(e) {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      var target = $(this.hash);
      if (target.length) {
        e.preventDefault();

        var scrollto = target.offset().top - scrolltoOffset;

        if ($(this).attr("href") == '#header') {
          scrollto = 0;
        }

        $('html, body').animate({
          scrollTop: scrollto
        }, 1500, 'easeInOutExpo');

        if ($(this).parents('.nav-menu, .mobile-nav').length) {
          $('.nav-menu .active, .mobile-nav .active').removeClass('active');
          $(this).closest('li').addClass('active');
        }

        if ($('body').hasClass('mobile-nav-active')) {
          $('body').removeClass('mobile-nav-active');
          $('.mobile-nav-toggle i').toggleClass('icofont-navigation-menu icofont-close');
          $('.mobile-nav-overly').fadeOut();
        }
        return false;
      }
    }
  });

  // Activate smooth scroll on page load with hash links in the url
  $(document).ready(function() {
    if (window.location.hash) {
      var initial_nav = window.location.hash;
      if ($(initial_nav).length) {
        var scrollto = $(initial_nav).offset().top - scrolltoOffset;
        $('html, body').animate({
          scrollTop: scrollto
        }, 1500, 'easeInOutExpo');
      }
    }
  });

  // Mobile Navigation
  if ($('.nav-menu').length) {
    var $mobile_nav = $('.nav-menu').clone().prop({
      class: 'mobile-nav d-lg-none'
    });
    $('body').append($mobile_nav);
    $('body').prepend('<button type="button" class="mobile-nav-toggle d-lg-none"><i class="icofont-navigation-menu"></i></button>');
    $('body').append('<div class="mobile-nav-overly"></div>');

    $(document).on('click', '.mobile-nav-toggle', function(e) {
      $('body').toggleClass('mobile-nav-active');
      $('.mobile-nav-toggle i').toggleClass('icofont-navigation-menu icofont-close');
      $('.mobile-nav-overly').toggle();
    });

    $(document).on('click', '.mobile-nav .drop-down > a', function(e) {
      e.preventDefault();
      $(this).next().slideToggle(300);
      $(this).parent().toggleClass('active');
    });

    $(document).click(function(e) {
      var container = $(".mobile-nav, .mobile-nav-toggle");
      if (!container.is(e.target) && container.has(e.target).length === 0) {
        if ($('body').hasClass('mobile-nav-active')) {
          $('body').removeClass('mobile-nav-active');
          $('.mobile-nav-toggle i').toggleClass('icofont-navigation-menu icofont-close');
          $('.mobile-nav-overly').fadeOut();
        }
      }
    });
  } else if ($(".mobile-nav, .mobile-nav-toggle").length) {
    $(".mobile-nav, .mobile-nav-toggle").hide();
  }

  // Navigation active state on scroll
  var nav_sections = $('section');
  var main_nav = $('.nav-menu, .mobile-nav');

  $(window).on('scroll', function() {
    var cur_pos = $(this).scrollTop() + 200;

    nav_sections.each(function() {
      var top = $(this).offset().top,
        bottom = top + $(this).outerHeight();

      if (cur_pos >= top && cur_pos <= bottom) {
        if (cur_pos <= bottom) {
          main_nav.find('li').removeClass('active');
        }
        main_nav.find('a[href="#' + $(this).attr('id') + '"]').parent('li').addClass('active');
      }
      if (cur_pos < 300) {
        $(".nav-menu ul:first li:first, .mobile-menu ul:first li:first").addClass('active');
      }
    });
  });

  // Toggle .header-scrolled class to #header when page is scrolled
  $(window).scroll(function() {
    if ($(this).scrollTop() > 100) {
      $('#header').addClass('header-scrolled');
    } else {
      $('#header').removeClass('header-scrolled');
    }
  });

  if ($(window).scrollTop() > 100) {
    $('#header').addClass('header-scrolled');
  }

  // Porfolio isotope and filter
  $(document).ready(function(){
    $(".nav-tabs a").click(function(){
      $(this).tab('show');
    });
    $('.nav-tabs a').on('shown.bs.tab', function(event){
      var x = $(event.target).text();         // active tab
      var y = $(event.relatedTarget).text();  // previous tab
      $(".act span").text(x);
      $(".prev span").text(y);
    });
  });

  // Back to top button
  $(window).scroll(function() {
    if ($(this).scrollTop() > 100) {
      $('.back-to-top').fadeIn('slow');
    } else {
      $('.back-to-top').fadeOut('slow');
    }
  });

  $('.back-to-top').click(function() {
    $('html, body').animate({
      scrollTop: 0
    }, 1500, 'easeInOutExpo');
    return false;
  });

  // Initiate the venobox plugin
  $(window).on('load', function() {
    $('.venobox').venobox();
  });

  // jQuery counterUp
  $('[data-toggle="counter-up"]').counterUp({
    delay: 10,
    time: 1000
  });

  // Initiate venobox lightbox
  $(document).ready(function() {
    $('.venobox').venobox();
  });

  // Testimonials carousel (uses the Owl Carousel library)
  $(".testimonials-carousel").owlCarousel({
    autoplay: true,
    dots: true,
    loop: true,
    items: 1
  });

  // Init AOS
  function aos_init() {
    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
      once: true,
      mirror: false
    });
  }
  $(window).on('load', function() {
    aos_init();
  });

})(jQuery);


  // Jquery-active

  // hombu
$('#homebu').on('click', function(){
  $('#hombu1').removeClass('active');
  $('#homebu2').removeClass('active');
  $('#homebu3').removeClass('active');
  $(this).addClass('active');
});

//homebu1
$('#hombu1').on('click', function(){
  $('#homebu').removeClass('active');
  $('#homebu2').removeClass('active');
  $('#homebu3').removeClass('active');
  $(this).addClass('active');
});

//homebu2
$('#homebu2').on('click', function(){
  $('#homebu').removeClass('active');
  $('#hombu1').removeClass('active');
  $('#homebu3').removeClass('active');
  $(this).addClass('active');
});

//homebu3
$('#homebu3').on('click', function(){
  $('#hombu1').removeClass('active');
  $('#homebu2').removeClass('active');
  $('#homebu').removeClass('active');
  $(this).addClass('active');
});

//default
$(document).ready(function(){
    $('#homebu').addClass('active');
});