

/*  Carousel function */

const slider = document.querySelector('.slider');
const carousel = document.querySelector('.carousel');

const leftArrow = document.querySelector('.left');
const rightArrow = document.querySelector('.right');

let direction = -1;

leftArrow.addEventListener('click', function() {
    if (direction === -1) {
        slider.appendChild(slider.firstElementChild);
        direction = 1;
    }
    carousel.style.justifyContent = 'flex-end';
    slider.style.transform = 'translate(25%)';

});

rightArrow.addEventListener('click', function() {
    if (direction === 1) {
        slider.prepend(slider.lastElementChild);
        direction = -1;
    }
    direction = -1;
    carousel.style.justifyContent = 'flex-start';
    slider.style.transform = 'translate(-25%)';
});


slider.addEventListener('transitionend', function() {
   if (direction === -1) {
    slider.appendChild(slider.firstElementChild);
   } else if (direction === 1) {
       slider.prepend(slider.lastElementChild);
   }


    slider.style.transition = 'none';
    slider.style.transform = 'translate(0)';
    setTimeout(function() {
        slider.style.transition = 'all 0.4s';
    })

})

