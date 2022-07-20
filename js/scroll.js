//ページ内リンクに飛ぶaタグを取得
const scrollTrigger = document.querySelectorAll('a[href^="#"]');

for (let i = 0; i < scrollTrigger.length; i++) {
  scrollTrigger[i].addEventListener('click', (e) => {

    e.preventDefault();
    let href = scrollTrigger[i].getAttribute('href');
    let target = document.getElementById(href.replace('#', ''));
    const targetPoint = target.getBoundingClientRect().top + window.pageYOffset;
    window.scrollTo({
      top: targetPoint,
      behavior: 'smooth'
    });
  });
}

const scrollArea = document.querySelectorAll('.sec');
scrollArea.forEach(function (area) {
  console.log(area);
});

const scrollPoint = function () {
  let position1 = this.document.getElementById('scroll-pt1').getBoundingClientRect().top;
  let position2 = this.document.getElementById('scroll-pt2').getBoundingClientRect().top;
  let position3 = this.document.getElementById('scroll-pt3').getBoundingClientRect().top;
  let position4 = this.document.getElementById('scroll-pt4').getBoundingClientRect().top;
  let btn1 = this.document.getElementById('btn1');
  let btn2 = this.document.getElementById('btn2');
  let btn3 = this.document.getElementById('btn3');
  let btn4 = this.document.getElementById('btn4');
  let frame1 = this.document.querySelector('.frame01');
  let frame2 = this.document.querySelector('.frame02');
  let frame3 = this.document.querySelector('.frame03');
  let frame4 = this.document.querySelector('.frame04');
  let navItem = document.querySelector('.scroll-nav');
  let winHeight = window.innerHeight / 3;

  if (winHeight >= position1) {
    navItem.style.opacity = 1;
    btn1.classList.add('addSquare');
    frame1.classList.add('addFrame');
    if (winHeight >= position2) {
      navItem.style.right = '95%';
      btn1.classList.remove('addSquare');
      frame1.classList.remove('addFrame');
      btn2.classList.add('addSquare');
      frame2.classList.add('addFrame');
    } else {
      navItem.style.right = "20px";
    }
  } else {
    navItem.style.opacity = 0;
  }
};

window.addEventListener('scroll', function () {
  scrollPoint();
});

window.addEventListener('load', function () {
  scrollPoint();
});







