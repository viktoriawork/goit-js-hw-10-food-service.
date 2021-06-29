'use strict';
import menuCardTemplate from "./templates/menu-card.hbs";
import menu from "./menu.json";


const Theme = {
    LIGHT: 'light-theme',
    DARK: 'dark-theme',
};

const refs = {
    menuContainer: document.querySelector('.js-menu'),
    switchInput: document.querySelector('#theme-switch-toggle'),
    containerThemeSwitch: document.querySelector('.theme-switch'),

    iconMoon: document.querySelector('.js-moon'),
    iconSun: document.querySelector('.js-sun'),

};


// разметка меню
const cardsMenu = menuCardTemplate(menu);
refs.menuContainer.insertAdjacentHTML('beforeend', cardsMenu);



// смена темы 
refs.switchInput.addEventListener('change', onSwitchChange);
populateTheme();

function onSwitchChange(event) {

    const darkThemeChange = document.body.classList.toggle(Theme.DARK);
    localStorage.setItem('dark', darkThemeChange);
};

function populateTheme() {
    const getKeyLocalStorage = localStorage.getItem('dark');
    const stringD = JSON.parse(getKeyLocalStorage);

    if (stringD) {
        refs.switchInput.checked = true;
        document.body.classList.add(Theme.DARK);
    }
};




refs.iconMoon.addEventListener('click', onClickThemeSwitch);
refs.iconSun.addEventListener('click', onClickThemeSwitch);


function onClickThemeSwitch(event) {

    if (event.currentTarget === refs.iconMoon) {
        document.body.classList.add(Theme.DARK);
        refs.switchInput.checked = true;
        localStorage.setItem('dark', true);
    } else if (event.currentTarget === refs.iconSun) {
        document.body.classList.remove(Theme.DARK);
        refs.switchInput.checked = false;
        localStorage.setItem('dark', false);
    }
};


refs.menuContainer.addEventListener('click', onCartBtnClick);

function onCartBtnClick(event) {
    if (event.target.tagName !== 'BUTTON') return false;
    const liRef = event.target.closest('li');

    const productName = liRef.querySelector('.card__name').textContent;
    console.log(productName);
}