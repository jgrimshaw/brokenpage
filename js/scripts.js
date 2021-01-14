/*------------------------------------*\
    Variables
\*------------------------------------*/

var mobileBreakpoint = 1023;
var isMobile;

/*------------------------------------*\
    Functions
\*------------------------------------*/

function resized(){

  if ($(window).width() < mobileBreakpoint) {

    isMobile = true;
    $('body').addClass('isMobile');
    $('body').removeClass('isDesktop');
    $('.hideMobile').css({'display':'none'});
    $('.logo').hide();
    $('.logo-sm').show();

  } else {
    isMobile = false;
    $('body').removeClass('g-mobile-nav-open');
    $('.mega-menu').css({'display':'none'});
    $('.mobileNavToggle.ion-chevron-up').toggleClass('ion-chevron-down');
    $('.mobileNavToggle.ion-chevron-up').toggleClass('ion-chevron-up');
    $('body').addClass('isDesktop');
    $('body').removeClass('isMobile');
    $('.hideDesktop').css({'display':'none'});

    $('.logo-sm').hide();
    $('.logo').show();

  }
}

$(document).ready(function() {

  resized();

  window.addEventListener("resize", resized);

  /*-----------------------------------------*\
                Global Header
  \*------------------------------------------*/


  //Main navigation hover
  $(".main-menu > li > a").hover(

    function() {
      if(isMobile === false){
        $(this).parent().siblings().removeClass('g-active');
        $(this).parent().addClass('g-active');

        var top = $(".headers-container").height();

        if ($('body.fixed-header').length > 0) {
          top = 50;
        }else if(top === 103) {
          var scrollTop     = $(window).scrollTop(),
            elementOffset = $('.headers-container').offset().top,
            top      = (elementOffset - scrollTop + 103);
        }

        $('header .mega-menu').css({
          'top': top
        });

        $('header .logo').removeClass('box-shadow');
      }
    },

    function() {
      // $( this ).find( "span:last" ).remove();
      // $( ".main-menu > li > a" ).removeClass('g-active');
    }
  );

  //Main navigation hide
  $(".main-menu-row").hover(
    function() {
      // $( this ).parent().siblings().children().removeClass('g-active');
      // $( this ).addClass('g-active');
    },
    function() {
      if(isMobile === false){
        $(".main-menu > li").removeClass('g-active');
        $('header .logo').addClass('box-shadow');
      }
    }
  );

  //fixed/smaller header on scroll
  $(window).on("scroll touchmove", function(e) {
    //don't allow scrolling if we have the header search section open - fixes mobile bug
    if($('.search-section').is(":visible") && isMobile === true){
      $('body').css({'overflow' : 'hidden'});
    }else{

      $('body').toggleClass('fixed-header', $(document).scrollTop() > 50);

      var headerBreakpoint = 50;
      if ($('#info-banner-top').css("display") == "none")
      {
        headerBreakpoint = headerBreakpoint - 30;
      }

      if ($(document).scrollTop() <= headerBreakpoint)
      {
        if ($('#crisis-level-one').length > 0) {
          $('header.g-header .mega-menu').css('margin-top', '78px');
        }

        if (isMobile === false)
        {
          $('.logo-sm').hide();
          $('.logo').show();
        }
      }
      else
      {
        if ($('#crisis-level-one').length > 0) {
          $('header.g-header .mega-menu').css('margin-top', '0px');
          $('header.g-header .mega-menu').css('top', '0px');
        }

        if (isMobile === false)
        {
          //$('.logo').css("display", "none");
          $('.logo-sm').css("visibility", "visible");
          $('.logo-sm').show();
        }

      }
      if ($(document).scrollTop() > 0) {
        $('.search-section').slideUp();
        $(".main-menu > li").removeClass('g-active');
        $('header .logo').addClass('box-shadow');
      }
    }

    //show scroll to top arrow on mobile on longer pages.
    if(isMobile === true){
      if($(document).scrollTop() > 1500 && $('.g-scroll-up').is(":hidden") ){
        $('.g-scroll-up').fadeIn();
      }else if($(document).scrollTop() <= 1500 && $('.g-scroll-up').is(":visible") ){
        $('.g-scroll-up').fadeOut();
      }
    }

  });


  //Hide search and recently viewed when you interact with the site
  $('html').click(function() {
    $('body').css({'overflow' : 'visible'});
    //$('.search-section, .recently-viewed').slideUp();
    $('.search-section').slideUp();
    $(".main-menu > li").removeClass('g-active');
    $('header .logo').addClass('box-shadow');
  });

  $('.headers-container').click(function(event) {
    event.stopPropagation();
  });

  //Main naviation - mobile menu
  $('.navToggle, .g-overlay').click(function(e) {
    e.preventDefault();
    $('body').toggleClass('g-mobile-nav-open');
  });

  $('.mobileNavToggle').click(function(e){
    var ele = $(this);
    if(ele.parent().siblings().children('.ion-chevron-up + .mega-menu').length > 0){
      ele.parent().siblings().children('.ion-chevron-up + .mega-menu').slideUp('fast', function(){
        $(this).prev().toggleClass('ion-chevron-down');
        $(this).prev().toggleClass('ion-chevron-up');
        ele.toggleClass('ion-chevron-down');
        ele.toggleClass('ion-chevron-up');
        ele.next().slideToggle('fast', function() {
          if(ele.hasClass('ion-chevron-up') === true){
            $('.main-menu').animate({
              scrollTop: $(this).offset().top - $(window).scrollTop() - 50
            }, 100);
          }
        });
      });
    }else{
      ele.toggleClass('ion-chevron-down');
      ele.toggleClass('ion-chevron-up');
      ele.next().slideToggle('fast', function() {
        if($(this).prev().hasClass('ion-chevron-up') === true){
          $('.main-menu').animate({
            scrollTop: $(this).offset().top - $(window).scrollTop() - 50
          }, 100);
        }
      });
    }
  });

  //Recently viewed header
  $('.recentlyViewedToggle').click(function(e) {
    e.preventDefault();
    $('.search-section').slideUp();
    $('.recently-viewed').slideToggle();
  });

  //Recently viewed header - buttons
  $('.toggleCheck').click(function(e) {
    e.preventDefault();
    $(this).parent().fadeOut('fast');
  });

  //Recently viewed & search header
  $('.close-btn').click(function(e) {
    e.preventDefault();
    $('.search-section, .recently-viewed').slideUp();
  });


  //--- Info for dropdown in header - desktop only
  $('.infoSelect').click(function(){
    $(this).toggleClass('open');
  });

  $('.infoSelectItem').click(function(){
    $(this).addClass('g-active');
    $(this).siblings().removeClass('g-active');
    var text = $(this).text();
    $('.infoSelect .selected').text(text);
  });

  $(document).click(function() {
    $('.infoSelect').removeClass('open');
  });

  /*-----------------------------------------*\
              Homepage V2
  \*------------------------------------------*/


  // Same height for all cards on homepage

  function sameHeightProgramCards(){
    var cards = $('.g-program-card');
    if (window.innerWidth > 520) {
      var highestCard = cards.outerHeight();
      var cardCount = cards.length;
      var count = 0;
      cards.each(function(){
        count ++;
        if($(this).outerHeight() > highestCard){
          highestCard = $(this).outerHeight() + 1; //increase by 1 for issues with rounding px
        }
        if(count === cardCount){
          highestCard = Math.round(highestCard);
          cards.css({'min-height':highestCard+'px'});
        }
      });
    }else{
      cards.css({'min-height':0});
    }
  }

  sameHeightProgramCards();

  $(window).resize(function(){
    sameHeightProgramCards();
  });

  // Areas of interest card slider
  $('.hp-v2-interest-slider').slick({
    slidesToScroll: 1,
    slidesToShow: 5,
    cssEase: 'linear',
    speed: 300,
    infinite: true,
    centerMode: false,
    focusOnSelect: false,
    swipeToSlide: true,
    touchThreshold: 100,
    appendArrows: '.hp-v2-interest-slider-arrows'
  });

  //Image Slider
  $('.hp-v2-slider').slick({
    speed: 700,
    focusOnSelect: true,
    dots: true,
    fade: true
  });

  /*-----------------------------------------*\
              Program pages
  \*------------------------------------------*/

  //fixed tab nav on scroll - program pages
  if($('.g-program-nav').length>0){
    $(window).on("scroll touchmove", function() {
      var scrollTop     = $(window).scrollTop(),
        elementOffset = $('.g-program-nav').offset().top,
        distance      = (elementOffset - 50);
      $('.g-program-nav').toggleClass('g-fixed', $(document).scrollTop() > distance);
    });
  }

  //Program page tabs - mobile menu
  $('.menuBtn').click(function(e) {
    e.preventDefault();
    $('.programMenu').toggleClass('g-show');
  });

  $('.programMenu li a').click(function(e) {
    e.preventDefault();
    $('.programMenu li a').removeClass('g-active');
    $(this).addClass('g-active');
    $('.programMenu').removeClass('g-show');
    var tab = $(this).attr('data-tab');
    $(tab).addClass('g-active');
    $(tab).siblings().removeClass('g-active');
    $('html,body').animate({
      scrollTop: $('.g-program-nav').offset().top - 45
    })
  });

  // Same height for all info cards on a page (Note that this will effect previously built cards)
  function sameHeightCards(){
    var cards = $('.g-card.g-card-info');
    if (window.innerWidth > 520) {
      var highestCard = cards.outerHeight();
      var cardCount = cards.length;
      var count = 0;
      cards.each(function(){
        count ++;
        if($(this).outerHeight() > highestCard){
          highestCard = $(this).outerHeight() + 1; //increase by 1 for issues with rounding px
        }
        if(count === cardCount){
          highestCard = Math.round(highestCard);
          cards.css({'min-height':highestCard+'px'});
        }
      });
    }else{
      cards.css({'min-height':0});
    }
  }

  // Set cards height on load
  sameHeightCards();

  //Card slider on program page
  $('.program-card-slider').slick({
    slidesToScroll: 1,
    slidesToShow: 4,
    cssEase: 'linear',
    speed: 300,
    infinite: true,
    centerMode: false,
    focusOnSelect: false,
    swipeToSlide: true,
    arrows: false,
    touchThreshold: 100,
    responsive: [{
      breakpoint: 1000,
      settings: {
        centerMode: true,
        centerPadding: '60px',
        variableWidth: false,
        initialSlide: 1,
        slidesToScroll: 2,
        slidesToShow: 2
      }
    },{
      breakpoint: 700,
      settings: {
        centerMode: true,
        centerPadding: '70px',
        variableWidth: false,
        initialSlide: 0,
        slidesToScroll: 1,
        slidesToShow: 1
      }
    }]
  });
    
});
