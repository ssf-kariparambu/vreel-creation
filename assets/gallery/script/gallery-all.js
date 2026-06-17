// NAVBAR SCROLL

const navbar = document.getElementById("navbar");
window.addEventListener("scroll", () => {
if(window.scrollY > 50){
navbar.classList.add("scrolled");
}else{
navbar.classList.remove("scrolled");
}
});
const menuBtn = document.getElementById("menuBtn");
const navLinks = document.getElementById("navLinks");
const menuIcon = menuBtn.querySelector("i");
menuBtn.addEventListener("click", () => {
navLinks.classList.toggle("active");
if(navLinks.classList.contains("active")){
menuIcon.classList.remove("fa-bars");
menuIcon.classList.add("fa-xmark");
}else{
menuIcon.classList.remove("fa-xmark");
menuIcon.classList.add("fa-bars");
}
});

// NAVBAR WORK

document.addEventListener("click", function(e){
if(
navLinks.classList.contains("active") &&
!navLinks.contains(e.target) &&
!menuBtn.contains(e.target)
){
navLinks.classList.remove("active");
menuIcon.classList.remove("fa-xmark");
menuIcon.classList.add("fa-bars");
}
});

// ON CLICK

function go(url){
window.location.href = url;
}
