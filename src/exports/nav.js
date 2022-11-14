function injectNav() {
    
    const content =  document.querySelector('body div#content');
    
    const header = document.createElement('div');
    header.classList.add('header');

    
    const flagTitle = document.createElement('h1');
    flagTitle.classList.add('title-home-page');
    flagTitle.textContent = 'La Bella Pizza';
    header.appendChild(flagTitle);

    const nav = document.createElement('div');
    nav.classList.add('nav');
    const home = document.createElement('a');
    home.classList.add('home');
    const menu = document.createElement('a');
    menu.classList.add('menu');
    const about = document.createElement('a');
    about.classList.add('about');
    
    home.textContent = 'Home';
    menu.textContent = 'Menu';
    about.textContent = 'About';
    
    content.appendChild(header);
    header.appendChild(flagTitle);
    header.appendChild(nav);
    nav.appendChild(home);
    nav.appendChild(menu);
    nav.appendChild(about);
}


export { injectNav };