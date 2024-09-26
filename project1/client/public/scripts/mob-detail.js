const renderMob = async () => {
 
    const requestedID = parseInt(window.location.href.split('/').pop());

    try {

        const response = await fetch('/mobs');
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const data = await response.json();

     
        const mobContent = document.getElementById('mob-content');

        let mob;

        
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
