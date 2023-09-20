
let nav =document.getElementById('nav'),
    arrowUp =document.getElementById('goUp'),
    arrowL =document.getElementById('arrow-left'),
    arrowR =document.getElementById('arrow-right'),
    toggler =document.getElementById('toggler'),
    toggle_1 =document.getElementById('toggle-1'),
    toggle_2 =document.getElementById('toggle-2'),
    toggle_3 =document.getElementById('toggle-3'),
    navCollapse =document.getElementById('navCollapse'),
    navItem = document.querySelectorAll(".navbar-nav li a"),
    slider =Array.from(document.querySelectorAll('#slide .box')),
    section = Array.from(document.querySelectorAll('section'));
    slideImage = Array.from(document.querySelectorAll('.slide-image figure')),
    currentIndex = 1,
    currentIndexImage=0;
toggler.addEventListener('click', () => {
  toggle_2.classList.toggle('d-none')
  toggle_1.classList.toggle('toggle-1-R')
  toggle_3.classList.toggle('toggle-3-R') 
  toggle_1.classList.toggle('x')
  toggle_3.classList.toggle('x') 
  toggle_2.style.transform=" translateX(0%)"
  navCollapse.classList.toggle('collapse')
  navCollapse.style.opacity=1;
})
window.addEventListener('scroll', () => {
  if (window.scrollY > -1) {
    nav.style.backgroundColor = "rgba(0, 0, 0, 0.623)"
  } else {
  }
window.scrollY >= 3000 ? arrowUp.classList.remove('d-none'):arrowUp.classList.add('d-none');
  section.forEach(sec => {
    var top = window.scrollY,
      offset = sec.offsetTop,
      height = sec.offsetHeight,
      id = sec.getAttribute('id');
    if (top >= offset && top < offset +height) {
      navItem.forEach(link => {
        link.classList.remove('active');
        document.querySelector(`header nav .navbar-nav a[href*=${id}]`).classList.add('active')
      })
    }
    })
});
arrowUp.onclick = () => {
  window.scrollTo(0,0)
}
navItem.forEach((link , inx) => {
  link.addEventListener('click', () => {
    link.getAttribute('data') == 'home' ? hideSection('flex') : hideSection('none');
    removeActiveLink()
    link.classList.add('active')
    section[inx].style.display = 'block'
  })
})
function hideSection(status) {
  section.forEach(element=>element.style.display = status)
}
function removeActiveLink() {
  navItem.forEach(a => a.classList.remove('active'))
}
function chingImage() {
  removeActiveImgSlide()
  currentIndexImage++
  currentIndexImage == slideImage.length ? currentIndexImage =0:false 
  slideImage[currentIndexImage].classList.add("img-active")
}
setInterval(chingImage, 2000);
function removeActiveImgSlide() {
  slideImage.forEach(figure=> figure.classList.remove('img-active'))
}
check() 
function check() {
  removeActive()
  slider[currentIndex-1].classList.add('slide-active')
}
arrowL.onclick = prevSlide;
arrowR.onclick = nextSlide;
setInterval(_ => {
  currentIndex < slider.length ? currentIndex++ : currentIndex =1;
  check()
}, 3000);
function nextSlide() {
  currentIndex < slider.length ? currentIndex++ : currentIndex =1; 
  check()
}
function prevSlide() {
  currentIndex != 1 ? currentIndex-- : currentIndex = slider.length; 
  check()
}
function removeActive() {
  slider.forEach(box => {
    box.classList.remove('slide-active')
  })
}
