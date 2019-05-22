const left = document.querySelector('.left');
const right = document.querySelector('.right');
const list = document.querySelector('.imgList');

left.onclick = function () { // use `addEventListener` instead of onclick
    list.scrollLeft += 260;
}

right.onclick = function () {
    list.scrollLeft -= 260
}

// you need to change 3 images one time `Now change the width of the container to 390 pixels and do the same thing with three images being shown instead of two.`
// Finally, add some horizontal spacing between the images and move the buttons to the left ("Previous") and right ("Next") sides of the container. Style them so that they look like arrows. Add a disabled class and style a button with this class accordingly if clicking the button would have no effect (i.e., there are no more images to display).
