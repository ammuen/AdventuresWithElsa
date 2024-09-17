// scripts.js

function showSection(sectionId) {
    document.querySelectorAll('.section').forEach(section => {
        section.style.display = 'none';
    });
    
    document.getElementById(sectionId).style.display = 'block';
}

document.addEventListener('DOMContentLoaded', () => {
    showSection('home');
});

function showPosts(category) {
    const posts = {
        asia: [
            { title: 'Tokyo Adventures', description: 'Explore the vibrant city of Tokyo. Tokyo, a city where ancient traditions meet cutting-edge technology, is a sensory feast for the soul. From the serene beauty of shrines and gardens to the vibrant energy of bustling markets and neon-lit streets, Tokyo offers a unique blend of old and new. Wander through the enchanting streets of Asakusa, marvel at the futuristic skyscrapers of Shinjuku, and lose yourself in the eclectic fashion and street food scene of Harajuku. Experience the tranquility of traditional tea ceremonies, delve into the world of anime and manga, and indulge in the freshest sushi and ramen. Tokyo is a city that will captivate your senses, challenge your perceptions, and leave you wanting more.', image: 'images/tokyo.jpg' },
            { title: 'Bali Bliss', description: 'Relax in the beautiful island of Bali. Bali, the "Island of the Gods," is a paradise where lush rice paddies meet turquoise waters, ancient temples whisper secrets, and the spirit of "Om Swastyastu" (peace, prosperity, and happiness) permeates every corner. Lose yourself in the vibrant energy of Ubud, home to spiritual sanctuaries and artistic havens, or relax on the pristine beaches of Kuta and Seminyak. Embrace the warmth of the Balinese people, witness traditional ceremonies, and explore the captivating beauty of volcanic landscapes and coral reefs. Bali offers a tranquil escape and a cultural journey that will leave you enchanted.', image: 'images/bali.jpg' }
        ],
        europe: [
            { title: 'Paris Lights', description: 'Discover the romance of Paris. Paris, the "City of Lights," is a captivating blend of romance, history, and artistic brilliance. Stroll along the Seine, marvel at the iconic Eiffel Tower, and immerse yourself in world-class museums like the Louvre. Lose yourself in the charming neighborhoods of Montmartre and Le Marais, indulge in delectable pastries and gourmet cuisine, and experience the elegance of Parisian fashion. From the grandeur of Notre-Dame to the tranquil beauty of Luxembourg Gardens, Paris is a city that will steal your heart and leave you longing for more.', image: 'images/paris.jpg' },
            { title: 'Venetian Dreams', description: 'Explore the enchanting city of Venice. Venice, the "City of Canals," is a magical labyrinth of narrow streets, picturesque canals, and historic architecture. Glide along the Grand Canal in a gondola, marvel at the stunning St. Mark\'s Basilica, and wander through the maze of charming alleys and bridges. Experience the vibrant atmosphere of Piazza San Marco, indulge in authentic Venetian cuisine, and discover the rich cultural heritage of this unique city. Venice is a place where history and romance intertwine, creating a truly unforgettable experience.', image: 'images/venice.jpg' }
        ],
        america: [
            { title: 'New York City Wonders', description: 'Experience the energy of New York City. New York City, the "City That Never Sleeps," is a bustling metropolis brimming with iconic landmarks, diverse neighborhoods, and endless excitement. From the bright lights of Times Square and the grandeur of Central Park to the cultural treasures of the Metropolitan Museum of Art and the vibrant street life of Brooklyn, NYC offers a wealth of experiences. Take in the breathtaking views from the top of the Empire State Building, catch a Broadway show, and savor the eclectic culinary scene that spans the globe. New York City is a place where dreams come alive and possibilities are endless.', image: 'images/nyc.jpg' },
            { title: 'Rio Carnival', description: 'Join the vibrant celebrations of Rio de Janeiro. Rio de Janeiro, the "Marvelous City," is famous for its stunning beaches, lively Carnival celebrations, and breathtaking landscapes. Relax on the golden sands of Copacabana and Ipanema, take in the panoramic views from the iconic Christ the Redeemer statue, and immerse yourself in the pulsating rhythms of Samba during Carnival. Discover the lush beauty of Tijuca National Park, explore the historic neighborhood of Santa Teresa, and indulge in the vibrant nightlife and cuisine that Rio has to offer. Rio de Janeiro is a city of joy, color, and passion.', image: 'images/rio.jpg' }
        ]
    };

    const postsContainer = document.getElementById('posts-container');
    postsContainer.innerHTML = ''; // Clear previous posts

    posts[category].forEach(post => {
        const postElement = document.createElement('div');
        postElement.classList.add('post');
        postElement.innerHTML = `
            <img src="${post.image}" alt="${post.title}">
            <h3>${post.title}</h3>
            <p>${post.description}</p>
        `;
        postsContainer.appendChild(postElement);
    });
}
