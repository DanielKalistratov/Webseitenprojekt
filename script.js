const body = document.querySelector("body")
navbar = body.querySelector(".navbar")
modeSwitch = body.querySelector(".mode")

modeSwitch.addEventListener("click", () => {
    body.classList.toggle("dark");

});