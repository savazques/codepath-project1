const renderMob = async () => {
    // Parse the ID as an int from the URL
    const requestedID = parseInt(window.location.href.split('/').pop());

    try {
        // Fetch the mob data using the /mobs endpoint
        const response = await fetch('/mobs');
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const data = await response.json();

        // Create a variable to hold the mob content element
        const mobContent = document.getElementById('mob-content');

        // Create a variable to hold the mob
        let mob;

        // Check if data is not null and find the mob with the requested ID
        if (data) {
            mob = data.find(mob => mob.id === requestedID);
        }
        if (mob) {

            document.getElementById('image').src = mob.image; 
            document.getElementById('name').textContent = mob.name;
            document.getElementById('heartsLevel').textContent = `Hearts Level: ${mob['hearts level']}`;
        } else {
            window.location.href = '/404.html';
            return;
        }
    } catch (error) {
        console.error('Error fetching mob details:', error);

        const mobContent = document.getElementById('mob-content');
        mobContent.innerHTML = '<h2>Error loading mob details 😞</h2>';
    }
};


renderMob();
