window.onscroll = function() {navbarfunction()};

var navbar = document.getElementById('navbar');
var sticky =navbar.offsetTop;

function navbarfunction() {
if  (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky")
}
else{
    navbar.classList.remove("sticky");
}


}