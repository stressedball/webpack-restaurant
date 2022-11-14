function footer() {
    const footer = document.createElement('div');
    footer.classList.add('footer');
    const signature = document.createElement('p');
    const credits = document.createElement('p');
    signature.textContent = 'Made by TS';
    credits.textContent = 'Photo credits : Miha Rekar from Unsplash';
    document.querySelector('div#content').appendChild(footer);
    footer.appendChild(signature);
    footer.appendChild(credits);
}

export { footer };