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

//for the cool transition in the about section. Yeah 
function animateSecondSec() {
    const options = {
        rootMargin: '-50% 0px -50% 0px', // adjust root margin as needed
    };
    const firstSect = document.querySelector('#home');
    const boxes = document.querySelectorAll('.toright');
    const boxes1 = document.querySelectorAll('.toleft');
    const boxes2 = document.querySelectorAll('.toUp');
    const collCards = [boxes, boxes1, boxes2]; // Convert collCards to an array

    collCards.forEach((cards) => {
        cards.forEach((card)=>{
        const observer2 = new IntersectionObserver((entries2) => {
            entries2.forEach((entry2) => {
                if (entry2.target === firstSect) {
                    if (entry2.isIntersecting) {
                        card.classList.remove('active');
                    } else {
                        card.classList.add('active');
                    }
                }
            });
        }, options); // Pass options to the IntersectionObserver constructor

        observer2.observe(firstSect);
    });
  })
}
function animateFirstSec(){    
  var floatingObj = document.querySelector('me');
  floatingObj.classList.toggle('floating'); 
}
window.addEventListener('load', hideNavBarOnFirstSection);
window.addEventListener('scroll', hideNavBarOnFirstSection);
window.addEventListener('resize', hideNavBarOnFirstSection);


window.addEventListener('load', animateSecondSec);
window.addEventListener('scroll', animateSecondSec);
window.addEventListener('resize', animateSecondSec);


