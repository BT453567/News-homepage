const menuIcon = document.getElementById("menu-icon");
const overlay = document.getElementById("overlay");
const body = document.getElementById("body");
const closeMenu = document.getElementById("close-menu");




menuIcon.addEventListener("click", function() {
    overlay.classList.remove("hidden");
    body.classList.add("stop-scrolling");
});

closeMenu.addEventListener("click", function() {
    overlay.classList.add("hidden");
    body.classList.remove("stop-scrolling");
});