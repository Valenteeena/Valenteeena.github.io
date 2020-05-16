var stat = true;
var togbtn = document.getElementById('togbtn');
var basic = document.getElementById('basic');
var prof = document.getElementById('prof');
var master = document.getElementById('master');
togbtn.checked = true;

togbtn.addEventListener("change", function() {
    if (this.checked == true) {
        stat = this.checked;
        basic.innerHTML = "<span>&dollar; </span>19.99";
    } else {
        stat = this.checked;
        basic.innerHTML = "<span>&dollar; </span>199.99";
    }

    if (this.checked == true) {
        stat = this.checked;
        prof.innerHTML = "<span>&dollar; </span>24.99";
    } else {
        stat = this.checked;
        prof.innerHTML = "<span>&dollar; </span>249.99";
    }

    if (this.checked == true) {
        stat = this.checked;
        master.innerHTML = "<span>&dollar; </span>39.99";
    } else {
        stat = this.checked;
        master.innerHTML = "<span>&dollar; </span>399.99";
    }

});