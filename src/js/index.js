import '../scss/main.scss';

// uncomment the lines below to enable PWA
// import {registerSW} from './pwa.js';
// registerSW();

/* place your code below */

console.log('HELLO 🚀')

const text = document.querySelector('.text--js');
text.value = text.innerHTML;

const save = document.querySelector('.save--js');

save.addEventListener('click', () => {
    localStorage.setItem('historia',text.value);
});

console.log(localStorage.getItem('historia'));

const load = document.querySelector('.load--js');

load.addEventListener('click', () => {
    text.innerHTML=text.value
    text.value = localStorage.getItem('historia');
});