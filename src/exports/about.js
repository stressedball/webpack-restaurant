function about() {
    const content = document.querySelector('div#content');
    const aboutContainer = document.createElement('div');
    aboutContainer.classList.add('about-container');
    content.appendChild(aboutContainer);

    const welcomeContainer = document.createElement('div');
    aboutContainer.appendChild(welcomeContainer);

    welcomeContainer.classList.add('about-container-welcomer');
    const nice = document.createElement('img');
    nice.setAttribute('src', './assets/images/nice.png')
    const welcomerMessage = document.createElement('h3');
    welcomerMessage.textContent = 'Contact us!';
    welcomeContainer.appendChild(nice);
    welcomeContainer.appendChild(welcomerMessage);

    const information = document.createElement('div');
    information.classList.add('about-information-container');
    aboutContainer.appendChild(information);

    const infoLogos = ['./assets/icons/phone-svgrepo-com.svg', 
        './assets/icons/email-svgrepo-com.svg', 
        './assets/icons/home-svgrepo-com.svg'];
    const infoText = ['+0012345XXXXX',
        'contact@myrestaurant.com',
        '25th avenue Mars, The Moon 00001 (No idea)']
    for (let i = 0; i < 3; i++) {        
        const logo = document.createElement('img');
        logo.setAttribute('src', `${infoLogos[i]}`);
        logo.classList.add('small-icon');
        const info = document.createElement('p');
        info.textContent = infoText[i];
        information.appendChild(logo);
        information.appendChild(info);
    }
}

export {about};