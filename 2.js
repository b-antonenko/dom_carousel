const left = document.querySelector('.left');
const right = document.querySelector('.right');
const list = document.querySelector('.imgList');

left.addEventListener('click', function(e){
    list.scrollLeft += 390;
});

right.addEventListener('click', function(e){
    list.scrollLeft -= 390;
});
/* ... Add a disabled class and style a button with this class accordingly if clicking the button would have no effect (i.e., there are no more images to display). */
