const header = document.querySelector('header');

const headerContainer = document.createElement('div');
headerContainer.className = 'header-container';

const headerLeft = document.createElement('div');
headerLeft.className = 'header-left';

// Create and configure the logo image
const headerLogo = document.createElement('img');
headerLogo.src = '/images/GrassBlock.png';
headerLogo.alt = 'Minecraft Logo'; // Add alt text for accessibility
headerLeft.appendChild(headerLogo); // Append logo to the headerLeft

// Create and configure the title
const headerTitle = document.createElement('h1'); // Corrected the variable name from headerTitile to headerTitle
headerTitle.textContent = 'Minecraft Mobs';
headerLeft.appendChild(headerTitle); // Append title to the headerLeft

const headerRight = document.createElement('div');
headerRight.className = 'header-right';

// Create the Home button
const headerButton = document.createElement('button'); // Changed from createElement('Home') to createElement('button')
headerButton.textContent = 'Home';

// Add click event listener to the button
headerButton.addEventListener('click', function handleClick(event) {
    window.location = '/'; // Navigate to home
});

// Append the button to the headerRight
headerRight.appendChild(headerButton);

// Append the left and right sections to the header container
headerContainer.appendChild(headerLeft);
headerContainer.appendChild(headerRight);

// Finally, append the header container to the header element
header.appendChild(headerContainer);

