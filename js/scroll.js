function ScrollNavi() {
  var winScrollTop = $(this).scrollTop();
  var pt1 = $("#scroll-pt1").offset().top - 150;
  var pt2 = $("#scroll-pt2").offset().top - 150;
  var pt3 = $("#scroll-pt3").offset().top - 150;
  var pt4 = $("#scroll-pt4").offset().top - 150;

  if (winScrollTop > pt1) {
    $(".scroll-nav").addClass("fadeIn");
  } else if (winScrollTop > pt2) {
    $(".scroll-nav").addClass("positionLeft");
    alert("エリア2");
  }
}

$(window).scroll(function () {
  ScrollNavi();
});

$(window).on('load', function () {
  ScrollNavi();
});





