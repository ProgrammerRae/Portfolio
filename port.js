var headercontainer = document.querySelector('.headercontainer'); // kunin navigation bar class css
var firstSec = document.querySelector('#home'); //kunin id ng section1/home css
//for the topbar or whatever you call it LOL
function hideNavBarOnFirstSection() {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.target === this.firstSec) {
          if (entry.isIntersecting) {
            this.headercontainer.style.display = 'none'; // hide the navigation bar if the first section is in view
          } else {
            this.headercontainer.style.display = ''; // show the navigation bar if the first section is not in view
          }
        }
      });
    });

    observer.observe(this.firstSec);
}

const navBar = document.querySelector('.menu');
function addInactiveClass() {
  if (!navBar.classList.contains('inactive')) {
    navBar.classList.add('inactive');
  }
  else{
    navBar.classList.remove('inactive');
  }
}


function animateSections() {
  const options = {
    rootMargin: '-50% 0px -50% 0px', // adjust root margin as needed
  };
  const firstSection = document.querySelector('#home');
  const secSection = document.querySelector('#about');

  const boxes = document.querySelectorAll('.toright');
  const boxes1 = document.querySelectorAll('.toleft');
  const boxes3 = document.querySelectorAll('.toFade');

  const collCards = [...boxes, ...boxes1]; // Merge NodeList objects into one array

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.target === firstSection) {
        collCards.forEach((card) => {
          if (entry.isIntersecting) {
            card.classList.remove('active');
          } else {
            card.classList.add('active');
          }
        });
      }
      if (entry.target === secSection) {
        boxes3.forEach((box) => {
          if (entry.isIntersecting) {
            box.classList.remove('turnFade');
          } else {
            box.classList.add('turnFade');
          }
        });
      }
    });
  }, options);

  observer.observe(firstSection);
  observer.observe(secSection);
}


function animateFirstSec(){    
  var floatingObj = document.querySelector('me');
  floatingObj.classList.toggle('floating'); 
}

window.addEventListener('load', hideNavBarOnFirstSection);
window.addEventListener('scroll', hideNavBarOnFirstSection);
window.addEventListener('resize', hideNavBarOnFirstSection);


window.addEventListener('load', animateSections);
window.addEventListener('scroll', animateSections);
window.addEventListener('resize', animateSections);


const scrolltoAbout= document.getElementById('planebtn');

scrolltoAbout.addEventListener('click', ()=>{
  const targetSection = document.getElementById('about');

  // Scroll to the target section using smooth scrolling behavior
  targetSection.scrollIntoView({ behavior: 'smooth' });
});

const nav = document.querySelector('.menu');
let isNavOpen = false;

window.addEventListener('scroll', () => {
  if (isNavOpen) {
    nav.classList.add('inactive');
    isNavOpen = false;
  }
});


nav.addEventListener('click', () => {
  nav.classList.toggle('inactive');
  isNavOpen = !isNavOpen;
});