
function menu() {
    const content = document.querySelector('div#content');
    const menuContainer = document.createElement('div');
    menuContainer.classList.add('menu-container');
    content.appendChild(menuContainer);
    const welcomer = document.createElement('h2');
    welcomer.textContent = 'Simple but delicious';
    menuContainer.appendChild(welcomer);

    const pizzasContainer = document.createElement('div');
    pizzasContainer.classList.add('pizza-container');
    const beverageContainer = document.createElement('div');
    beverageContainer.classList.add('beverage-container');

    menuContainer.appendChild(pizzasContainer);
    menuContainer.appendChild(beverageContainer);

    //6 recipes of pizzas and 2 beers
    for (let i = 0; i < 5; i++) {
        makeCard(pizzasContainer, 'pizza');
    }

    for (let i = 0; i < 2; i++) {
        makeCard(beverageContainer, 'beverage');
    }

    function makeCard(target, tag) {
        //the whole item card
        const card = document.createElement('div');
        target.appendChild(card);
        card.classList.add('card');
        card.classList.add(`${tag}`);
        
        //The placeholder for the title, description and price of the item
        const description = document.createElement('div');
        card.appendChild(description);
        description.classList.add('item-description');
        
        //picture of the item, on the right side
        const picture = document.createElement('img');
        picture.classList.add('picture');
        card.appendChild(picture);
        
    }
    populateHTML();
}

const itemTitles = ['Napolitana', 
    'Prosciutto e funghi', 
    'Capricciosa', 
    'Carciofini', 
    'Tonno', 
    'Leffe', 
    'Triple Karmeleet'];
const itemsDescriptions = ['Tomato sauce, basilic and mozarella', 
    'Ham and mushrooms (I guess)', 
    'Mozzarella cheese, cooked ham, mushrooms, tomatoes and artichokes', 
    'Artichoke cream, mozzarella, artichokes, nostraline olives, rocket, cherry tomatoes, oregano', 'Mozzarella and tuna', 
    'A light blonde belgium beer', 
    'Another one?'];
const itemsPicsPaths = ['./assets/images/margherita.webp', 
    './assets/images/prosciutto.jpg',
    './assets/images/cappriciuosa.jpeg', 
    './assets/images/carciofini.jpeg', 
    './assets/images/tonno.jpeg', 
    './assets/images/leffe.jpg', 
    './assets/images/tripleKarmeliet.jpg'];

function populateHTML() {

    const pizzaCards = document.querySelectorAll('.card.pizza');
    const beverageCards = document.querySelectorAll('.card.beverage');
    for (let i = 0; i < pizzaCards.length; i++) {
        populateCard('pizza-container', i, i + 0);
    }
    for (let i = 0; i < beverageCards.length; i++) {
        populateCard('beverage-container', i, i + 5);
    }

    function populateCard(target, i, j) {
        const picture = document.querySelector(`.${target} .card:nth-of-type(${i + 1}) .picture`);
        const description = document.querySelector(`.${target} .card:nth-of-type(${i + 1}) .item-description`);
        
        const title = document.createElement('h3');
        title.textContent = itemTitles[j];
        const descriptionText = document.createElement('div');
        descriptionText.classList.add('item-description-text');
        descriptionText.textContent = itemsDescriptions[j];
        const price = document.createElement('p');
        price.textContent = '$';
        price.classList.add('price');
        
        description.appendChild(title);
        description.appendChild(descriptionText);
        description.appendChild(price);
        picture.setAttribute('src', `${itemsPicsPaths[j]}`);
    }
    
}


export { menu };