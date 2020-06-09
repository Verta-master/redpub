//Mobile menu
$('.mobile__wrap').niceScroll();

$('.menu__btn').click(function() {
  $('.mobile').addClass('mobile--opened');
});

$('.mobile__close').click(function() {
  $('.mobile').removeClass('mobile--opened');
});

$('.mobile__plus').click(function() {
  $(this).toggleClass('mobile__plus--minus');
  $(this).next().slideToggle();
});

//Scroll to top
$(window).scroll(function(){
  if ((window.pageYOffset || document.documentElement.scrollTop ||document.body.scrollTop) >= 100) {
    $(".btn-top").fadeIn();
  } else {
    $(".btn-top").fadeOut();
  };
});

$(".btn-top").click(function () {
  $("body,html").animate({
    scrollTop: 0
  }, 400);
  return false;
});
