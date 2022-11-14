import './style.css';
import { footer } from './exports/footer';
import { injectNav } from './exports/nav';
import { dressHomePage } from './exports/home';
import { menu } from './exports/menu';
import { removeElements } from './exports/remove_elements';
import {about} from './exports/about';

injectNav();
dressHomePage();
footer();

window.addEventListener('click', redirect);

function redirect(event) {
    if (event.target.classList.contains('menu')) {
        removeElements();
        injectNav();
        menu();
        footer();
    }

    if (event.target.classList.contains('home')) {
        removeElements();
        injectNav();
        dressHomePage();
        footer();
    }

    if (event.target.classList.contains('about')) {
        removeElements();
        injectNav();
        about();
        footer();
    }
}


