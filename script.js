/* dark7whitemode */

const body = document.querySelector("body")
navbar = body.querySelector(".navbar")
modeSwitch = body.querySelector(".mode")

modeSwitch.addEventListener("click", () => {
    body.classList.toggle("dark");

});

/* nevbar mobil */

const handyline = document.querySelector('.handyline')
const navlinks = document.querySelector('.menu-links')
const links = document.querySelectorAll('.menu-links li')

handyline.addEventListener('click', () =>{
    navlinks.classList.toggle("open")
})