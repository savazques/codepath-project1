const renderMobs = async () => {
    try {
        const response = await fetch('/mobs');
        const data = await response.json();

        const mainContent = document.getElementById('main-content');

        if (data && data.length > 0) {
            data.map(mob => {
                const card = document.createElement('div');
                card.classList.add('card');

                const topContainer = document.createElement('div');
                topContainer.classList.add('top-container');
                topContainer.style.backgroundImage = `url(${mob.image})`;

                const bottomContainer = document.createElement('div');
                bottomContainer.classList.add('bottom-container');

                const name = document.createElement('h3');
                name.textContent = mob.name;
                bottomContainer.appendChild(name);

                const heartsLevel = document.createElement('p');
                heartsLevel.textContent = `Hearts Level: ${mob['hearts level']}`;
                bottomContainer.appendChild(heartsLevel);

                const link = document.createElement('a');
                link.textContent = 'Read More >';
                link.setAttribute('role', 'button');
                link.href = `/mobs/${mob.id}`;
                bottomContainer.appendChild(link);

                card.appendChild(topContainer);
                card.appendChild(bottomContainer);
                mainContent.appendChild(card);
            });
        } else {
            const message = document.createElement('h2');
            message.textContent = 'No Mobs Available 😞';
            mainContent.appendChild(message);
        }
    } catch (error) {
        console.error('Error fetching mob data:', error);
        const mainContent = document.getElementById('main-content');
        mainContent.innerHTML = '<h2>Error loading mobs 😞</h2>';
    }
};

renderMobs();


