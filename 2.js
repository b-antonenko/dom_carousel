const left = document.querySelector('.left_button');
const right = document.querySelector('.right_button');
const list = document.querySelector('.imgList');

right.addEventListener('click', function(){
    left.disabled = false;
    list.scrollLeft += 390;
    if (list.scrollLeft === 910) {
        right.disabled = true;
    }
});
left.addEventListener('click', function(){
    right.disabled = false;
    if (list.scrollLeft === 0) {
        left.disabled = true;
    }
    list.scrollLeft -= 390;
});
/* ... Add a disabled class and style a button with this class accordingly if clicking the button would have no effect (i.e., there are no more images to display). */
