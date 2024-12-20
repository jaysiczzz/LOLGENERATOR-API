document.addEventListener('DOMContentLoaded', () => {
    const button = document.getElementById('random-champion-btn');
    const championInfoDiv = document.getElementById('champion-info');
    const dataDragonURL = 'https://ddragon.leagueoflegends.com/cdn/13.20.1/data/en_US/champion.json';
    const imageBaseURL = 'https://ddragon.leagueoflegends.com/cdn/13.20.1/img/champion/';

    let champions = [];

    // Fetch Champion Data Once
    fetch(dataDragonURL)
        .then(response => {
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
            return response.json();
        })
        .then(data => {
            champions = Object.values(data.data); // Convert champion objects to an array
        })
        .catch(error => {
            console.error('Error fetching champion data:', error);
        });

    // Button Click: Generate Random Champion
    button.addEventListener('click', () => {
        if (champions.length === 0) {
            championInfoDiv.innerHTML = '<p>Loading champions...</p>';
            return;
        }

        const randomChampion = champions[Math.floor(Math.random() * champions.length)];
        championInfoDiv.innerHTML = `
            <img src="${imageBaseURL}${randomChampion.id}.png" alt="${randomChampion.name}">
            <h2>${randomChampion.name}</h2>
        `;
    });
});
