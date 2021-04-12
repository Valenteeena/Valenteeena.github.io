var slideIndex = 1;

showSlide(slideIndex);

function currentSlide(n) {
    showSlide(slideIndex = n);
}
function showSlide(n){
    var i;
    var slides = document.getElementsByClassName("img-div");
    var dots = document.getElementsByClassName("dot");

    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].classList.remove("active");
    }
    slides[slideIndex-1].style.display = "flex";
    dots[slideIndex-1].classList.add("active");
}