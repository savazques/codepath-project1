const header = document.querySelector('header');

const headerContainer = document.createElement('div');
headerContainer.className = 'header-container';

const headerLeft = document.createElement('div');
headerLeft.className = 'header-left';


const headerLogo = document.createElement('img');
headerLogo.src = '/images/GrassBlock.png';
headerLogo.alt = 'Minecraft Logo'; 
headerLeft.appendChild(headerLogo); 


const headerTitle = document.createElement('h1'); 
headerTitle.textContent = 'Minecraft Mobs';
headerLeft.appendChild(headerTitle); 

const headerRight = document.createElement('div');
headerRight.className = 'header-right';

// Create the Home button
const headerButton = document.createElement('button'); 
headerButton.textContent = 'Home';


headerButton.addEventListener('click', function handleClick(event) {
    window.location = '/'; 
});





headerContainer.appendChild(headerLeft);
headerContainer.appendChild(headerRight);


header.appendChild(headerContainer);
headerRight.appendChild(headerButton);

