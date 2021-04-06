import '../scss/main.scss';

// uncomment the lines below to enable PWA
// import {registerSW} from './pwa.js';
// registerSW();

/* place your code below */

console.log('HELLO 🚀')

const historia =localStorage.getItem('historia');
let result = '';

if (historia) {
    result = historia;
}

const text = document.querySelector('.text--js');
text.value = result;

const save = document.querySelector('.save--js');

save.addEventListener('click', () => {
    localStorage.setItem('historia',text.value);
});


// localStorage.setItem('historia','');

// const load = document.querySelector('.load--js');

// localStorage.getItem('historia');