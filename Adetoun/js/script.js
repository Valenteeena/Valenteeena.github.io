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