function dressHomePage() {
    const content = document.querySelector('body div#content');
    const landingPageDescription = document.createElement('div');
    const titleSpan = document.createElement('span');
    titleSpan.classList.add('home-message-span');
    titleSpan.textContent = 'La Bella Pizza';
    landingPageDescription.classList.add('home-message');
    content.appendChild(landingPageDescription);
    landingPageDescription.appendChild(titleSpan);
}


export { dressHomePage };