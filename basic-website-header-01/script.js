const menu = document.querySelector("#hamburger-icon");
const close = document.querySelector("#close-icon");
const menuItems = document.querySelector(".menu-items");

menu.addEventListener("click", function () {
    menu.style.display = "none";
    close.style.display = "block";
    menuItems.style.display = "block";
    //menuItems.setAttribute(display,"block");
});

close.addEventListener("click", function () {
    menu.style.display = "block";
    close.style.display = "none";
    menuItems.style.display = "none";
});