/* function ScrollNavi() {
  var winScrollTop = $(this).scrollTop();
  var pt1 = $("#scroll-pt1").offset().top - 150;
  var pt2 = $("#scroll-pt2").offset().top - 150;
  var pt3 = $("#scroll-pt3").offset().top - 150;
  var pt4 = $("#scroll-pt4").offset().top - 150;

  if (winScrollTop >= pt1) {
    $(".scroll-nav").addClass("fadeIn");
    console.log('エリア1');
  } else if (winScrollTop >= pt1 && winScrollTop >= 2) {
    $(".scroll-nav").removeClass("fadeIn");
  };
};

$(window).scroll(function () {
  ScrollNavi();
});

$(window).on('load', function () {
  ScrollNavi();
}); */

window.addEventListener('scroll', function () {
  let position = this.document.getElementById('scroll-pt1').getBoundingClientRect().top;
  let position2 = this.document.getElementById('scroll-pt2').getBoundingClientRect().top;
  let position3 = this.document.getElementById('scroll-pt1').getBoundingClientRect().top;
  let position4 = this.document.getElementById('scroll-pt2').getBoundingClientRect().top;
  let navItem = document.querySelector('.scroll-nav');
  let navNum = navItem.length;
  let nuvItemElm = new Array;
  let contentItem = new Array;
  let winHeight = window.innerHeight;

  if (winHeight >= position) {
    navItem.style.opacity = 1;
    if (winHeight >= position2) {
      navItem.style.right = "90%";  
    } else {
      navItem.style.right = "10px";
    }
  } else {
    navItem.style.opacity = 0;  
  }
});







