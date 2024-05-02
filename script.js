let menuBtn = document.getElementById("menu-bar");
let sideBar = document.querySelector(".side-bar");

menuBtn.addEventListener("click", () => {
    sideBar.classList.toggle("active")
})