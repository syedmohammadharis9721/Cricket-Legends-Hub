// Array to store player data with locations
const players = [
    {
        name: 'Sachin Tendulkar',
        country: 'India',
        hometown: [19.0760, 72.8777], // Mumbai, India
    },
    {
        name: 'Brian Lara',
        country: 'Trinidad and Tobago',
        hometown: [10.6918, -61.2225], // Port of Spain, Trinidad
    },
    {
        name: 'Ricky Ponting',
        country: 'Australia',
        hometown: [-42.8821, 147.3272], // Hobart, Tasmania
    },
    {
        name: 'Sir Don Bradman',
        country: 'Australia',
        hometown: [-34.881, 138.6007], // Adelaide, Australia
    },
    {
        name: 'Jacques Kallis',
        country: 'South Africa',
        hometown: [-33.9249, 18.4241], // Cape Town, South Africa
    },
    {
        name: 'Virat Kohli',
        country: 'India',
        hometown: [28.6139, 77.2090], // New Delhi, India
    }
];

// Initialize the map and set the initial view
const map = L.map('map').setView([20, 0], 2); // World view centered at [20, 0]

// Add OpenStreetMap tiles as the base layer
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 18,
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

// Add markers for each player using their hometown coordinates
players.forEach(player => {
    const marker = L.marker(player.hometown).addTo(map);
    marker.bindPopup(`<b>${player.name}</b><br>Country: ${player.country}`).openPopup();
});
