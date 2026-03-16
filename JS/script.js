const burgerBtn = document.getElementById('burgerBtn');
const mainMenu = document.getElementById('mainMenu');

burgerBtn.addEventListener('click', () => {

    burgerBtn.classList.toggle('is-open');
    mainMenu.classList.toggle('is-open');

});

document.querySelectorAll('.navbar-link').forEach(link => {

    link.addEventListener('click', () => {

        burgerBtn.classList.remove('is-open');
        mainMenu.classList.remove('is-open');

    });

});

document.addEventListener('click', (e) => {

    const isClickInsideMenu = mainMenu.contains(e.target);
    const isClickBurger = burgerBtn.contains(e.target);

    if(!isClickInsideMenu && !isClickBurger){

        mainMenu.classList.remove('is-open');
        burgerBtn.classList.remove('is-open');

    }

});

window.addEventListener('resize', () => {

    if(window.innerWidth > 768){

        mainMenu.classList.remove('is-open');
        burgerBtn.classList.remove('is-open');

    }

});