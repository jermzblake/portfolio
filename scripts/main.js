// cached elements
let menu = document.getElementById("menu");
let navList = document.getElementById("nav-list");
let hamMenu = document.getElementById("nav-menu");
let projectCard = document.querySelectorAll("project-card");

// event listeners
hamMenu.addEventListener('click', () => {
    navList.classList.toggle("show");
});

// projectCard.addEventListener('click', () => {
//     projectCard.classList.add("clicked");
// })