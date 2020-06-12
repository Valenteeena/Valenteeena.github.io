function addClass() {
    var hamburger = document.querySelector(".hamburger");
    var nav = document.querySelector(".nav");
    var navItem = document.querySelectorAll(".navItem");

    hamburger.classList.toggle("is-active");
    nav.classList.toggle("navReverse");
    for (i = 0; i < navItem.length; i++) {
        navItem[i].classList.toggle("navItemReverse");
    }
}
const txts = document.querySelector('.animate-text').children;
const txtlen = txts.length,
    textInTimer = 3000,
    textOutTimer = 2800;
let ind = 0;

function animate() {
    for (let i = 0; i < txtlen; i++) {
        txts[i].classList.remove("text-in", "text-out");
    }
    txts[ind].classList.add("text-in");

    setTimeout(function() {
        txts[ind].classList.add("text-out");
    }, textOutTimer);

    setTimeout(function() {
        if (ind == txtlen - 1) {
            ind = 0;
        } else {
            ind++;
        }
        animate();
    }, textInTimer);
}
window.onload = animate;