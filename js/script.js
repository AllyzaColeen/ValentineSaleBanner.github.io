var heart = document.getElementById('heartImage');
var offer = document.getElementById('offer');

function pumpIn(elem, delay, opacity, width, height, transform) {
    return setTimeout(function () {
        elem.style.opacity = opacity;
        elem.style.width = width;
        elem.style.height = height;
        elem.style.transform = transform;
    }, delay)
}

function pumpOut(elem, delay, opacity, width, height, transform) {
    return setTimeout(function () {
        elem.style.opacity = opacity;
        elem.style.width = width;
        elem.style.height = height;
        elem.style.transform = transform;
    }, delay)
}

function pumpBack(elem, delay, opacity, width, height, transform) {
    return setTimeout(function () {
        elem.style.opacity = opacity;
        elem.style.width = width;
        elem.style.height = height;
        elem.style.transform = transform;
    }, delay)
}

function slideIn(elem, delay, source, newPosition) {
    return setTimeout(function () {
        elem.style[source] = newPosition;
    }, delay);
}

function slideOut(elem, delay, source, newPosition) {
    return setTimeout(function () {
        elem.style[source] = newPosition;
    }, delay);
}

function start() {
    pumpIn(heart, 250, .5, 200 + 'px', 200 + 'px', 'translate(30px, 30px)');
    pumpOut(heart, 500, .7, 500 + 'px', 500 + 'px', 'translate(-85px, -85px)');
    pumpBack(heart, 1000, .7, 300 + 'px', 300 + 'px', 'translate(0px)');

    slideIn(offer, 250, 'left', '900px');
    slideOut(offer, 1000, 'left', '230px')
}

start();

function reset() {
    var elements = document.querySelector("#heart");
    for (var i = 0; i < elements.length; i++) {
        elements[i].removeAttribute("style");
    }

    setTimeout(start, 100);
}



document.getElementById("replay").addEventListener("click", reset);

