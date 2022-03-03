const sideMenu = document.querySelector("aside");
const menuButton = document.querySelector("#menu-btn");
const closeButton = document.querySelector("#close-btn");
const themeToggler = document.querySelector(".theme-toggler")

// show sidebar
menuButton.addEventListener('click', () => {
    sideMenu.style.display = 'block';
})

// close sidebar
closeButton.addEventListener('click', () => {
    sideMenu.style.display = 'none';
})

// toggle theme
themeToggler.addEventListener('click', () => {
    document.body.classList.toggle('dark-theme-variables');

    themeToggler.querySelector('span:nth-child(1)').classList.toggle('active');
    themeToggler.querySelector('span:nth-child(2)').classList.toggle('active');
})