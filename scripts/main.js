// cached elements
let menu = document.getElementById("menu");
let navList = document.getElementById("nav-list");
let hamMenu = document.getElementById("nav-menu");
let projectCard = document.querySelectorAll("project-card");
let aboutLink = document.getElementById("about-link");
let portfolioLink = document.getElementById("portfolio-link");
let contactLink = document.getElementById("contact-link");
let logoLink = document.getElementById("logo");
let about = document.getElementById("about");
let portfolio = document.getElementById("portfolio");
let contact = document.getElementById("contact");
let home = document.getElementById("home");

// event listeners
hamMenu.addEventListener('click', () => {
    navList.classList.toggle("show");
});

aboutLink.addEventListener('click', (e) => {
    about.scrollIntoView({behavior:"smooth"});
    e.preventDefault();
})

portfolioLink.addEventListener('click', (e) => {
    portfolio.scrollIntoView({behavior:"smooth"});
    e.preventDefault();
})

contactLink.addEventListener('click', (e) => {
    contact.scrollIntoView({behavior:"smooth"});
    e.preventDefault();
})

logoLink.addEventListener('click', (e) => {
    home.scrollIntoView({behavior:"smooth"});
    e.preventDefault();
})