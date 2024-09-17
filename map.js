// map.js

document.addEventListener('DOMContentLoaded', function() {
    // Initialize the map and set its view to a specific geographical point
    const map = L.map('mapid').setView([20, 0], 2); // Set initial view

    // Add a tile layer to the map (OpenStreetMap)
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);

    // Define custom icons
    const customIcon = L.icon({
        iconUrl: 'images/marker-icon.png', // Path to custom icon image
        iconSize: [32, 32], // Size of the icon
        iconAnchor: [16, 32], // Point of the icon which will correspond to marker's location
        popupAnchor: [0, -32] // Point from which the popup should open relative to the iconAnchor
    });

    // Define locations with custom icons and interactive features
    const destinations = [
        {
            name: 'Tokyo, Japan',
            coordinates: [35.6762, 139.6503],
            description: 'Tokyo is a bustling metropolis known for its blend of modernity and tradition.'
        },
        {
            name: 'Paris, France',
            coordinates: [48.8566, 2.3522],
            description: 'Paris, the City of Lights, is famous for its art, fashion, and culture.'
        },
        {
            name: 'New York City, USA',
            coordinates: [40.7128, -74.0060],
            description: 'NYC is a vibrant city known for its iconic landmarks and diverse culture.'
        },
        {
            name: 'Rio de Janeiro, Brazil',
            coordinates: [-22.9068, -43.1729],
            description: 'Rio is renowned for its stunning beaches and the lively Carnival festival.'
        },
        {
            name: 'Sydney, Australia',
            coordinates: [-33.8688, 151.2093],
            description: 'Sydney is known for its beautiful harbor, the Sydney Opera House, and its stunning beaches.'
        },
        {
            name: 'Cape Town, South Africa',
            coordinates: [-33.9249, 18.4241],
            description: 'Cape Town boasts stunning landscapes, from Table Mountain to beautiful beaches.'
        },
        {
            name: 'Istanbul, Turkey',
            coordinates: [41.0082, 28.9784],
            description: 'Istanbul is a city that straddles two continents, known for its rich history and vibrant culture.'
        },
        {
            name: 'Dubai, UAE',
            coordinates: [25.276987, 55.296249],
            description: 'Dubai is known for its futuristic architecture, luxury shopping, and vibrant nightlife.'
        },
        {
            name: 'Marrakech, Morocco',
            coordinates: [31.6295, -7.9811],
            description: 'Marrakech is famous for its bustling souks, beautiful palaces, and vibrant street life.'
        },
        {
            name: 'Buenos Aires, Argentina',
            coordinates: [-34.6037, -58.3816],
            description: 'Buenos Aires offers a mix of European charm and Latin American energy, known for its tango and rich cultural heritage.'
        },
        {
            name: 'Lisbon, Portugal',
            coordinates: [38.7223, -9.1399],
            description: 'Lisbon is a coastal city known for its charming neighborhoods, historic trams, and delicious cuisine.'
        },
        {
            name: 'Vancouver, Canada',
            coordinates: [49.2827, -123.1207],
            description: 'Vancouver is renowned for its beautiful scenery, diverse culture, and outdoor activities.'
        }
    ];

    // Add markers to the map with custom icons and popups
    destinations.forEach(dest => {
        L.marker(dest.coordinates, { icon: customIcon }).addTo(map)
            .bindPopup(`<strong>${dest.name}</strong><br>${dest.description}`)
            .openPopup();
    });

    // Add routing layer (requires Leaflet Routing Machine)
    L.Routing.control({
        waypoints: [
            L.latLng(35.6762, 139.6503), // Example start point: Tokyo
            L.latLng(48.8566, 2.3522) // Example end point: Paris
        ],
        createMarker: function() { return null; },
        routeWhileDragging: true
    }).addTo(map);

    // Add geolocation feature
    L.control.locate().addTo(map);
});
