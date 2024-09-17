<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Adventures with Elsa</title>
    <link rel="stylesheet" href="styles.css">
    <link rel="stylesheet" href="https://unpkg.com/leaflet@1.7.1/dist/leaflet.css" />
</head>
<body>
    <header>
        <div class="container">
            <h1>Adventures with Elsa</h1>
            <nav aria-label="Main Navigation">
                <ul>
                    <li><a href="#home" onclick="showSection('home')">Home</a></li>
                    <li><a href="#destinations" onclick="showSection('destinations')">Destinations</a></li>
                    <li><a href="#map" onclick="showSection('map')">Interactive Map</a></li>
                    <li><a href="#about" onclick="showSection('about')">About</a></li>
                    <li><a href="#contact" onclick="showSection('contact')">Contact</a></li>
                </ul>
            </nav>
        </div>
    </header>

    <main>
        <!-- Home Section -->
        <section id="home" class="section">
            <div class="container">
                <h2>Welcome to Adventures with Elsa</h2>
                <p>Discover breathtaking destinations and immerse yourself in captivating travel stories. Our blog is a gateway to your next adventure, offering you insights and inspiration from around the globe. Whether you're looking for hidden gems or popular hotspots, we have something for every traveler. Join us as we explore the world's wonders and guide you through unforgettable experiences.</p>
            </div>
        </section>

        <!-- Destinations Section -->
        <section id="destinations" class="section">
            <div class="container">
                <h2>Destinations</h2>
                <div class="destination-category">
                    <h3>Select a Region</h3>
                    <button onclick="showPosts('asia')">Asia</button>
                    <button onclick="showPosts('europe')">Europe</button>
                    <button onclick="showPosts('america')">America</button>
                </div>
                <div id="posts-container" class="posts-container">
                    <!-- Posts will be dynamically loaded here -->
                </div>
            </div>
        </section>

        <!-- Interactive Map Section -->
        <section id="map" class="section">
            <div class="container">
                <h2>Interactive Map</h2>
                <div id="mapid"></div>
            </div>
        </section>

        <!-- About Section -->
        <section id="about" class="section">
            <div class="container">
                <h2>About Us</h2>
                <p>Welcome to Adventures with Elsa, where my passion for exploration meets your wanderlust! I'm <strong>Vidhya Varshini</strong>, a travel enthusiast who believes in the transformative power of discovering new cultures, breathtaking landscapes, and unforgettable experiences. This blog is my way of sharing my adventures, offering practical tips and honest insights, and inspiring you to embrace the world's magic. Expect captivating stories, stunning visuals, and tips to help you plan your own dream trips, whether you're seeking budget-friendly adventures or luxury escapes. Join me on this journey of discovery, and let's explore the world together!</p>
            </div>
        </section>

        <!-- Contact Section -->
        <section id="contact" class="section">
            <div class="container">
                <h2>Contact Us</h2>
                <p>If you have any questions or would like to collaborate, feel free to reach out!</p>
                <ul>
                    <li><strong>Email:</strong> <a href="mailto:vidhyavarshinin.23bir@kongu.edu">vidhyavarshinin.23bir@kongu.edu</a></li>
                    <li><strong>Phone:</strong> <a href="tel:+8122753359">+91 81227 53359</a></li>
                </ul>
                <h3>Support Us</h3>
                <p>If you love our content and want to support us, consider making a donation or using our affiliate links:</p>
                <button onclick="window.location.href='https://www.paypal.com/donate?hosted_button_id=YOUR_BUTTON_ID'">Donate</button>
                <p><a href="https://www.amazon.com/?tag=YOUR_AMAZON_ASSOCIATE_ID" target="_blank">Shop on Amazon and support us!</a></p>
            </div>
        </section>
    </main>

    <footer>
        <div class="container">
            <p>&copy; 2024 Adventures with Elsa. All rights reserved.</p>
        </div>
    </footer>

    <!-- Sign-up Popup -->
    <div id="signup-popup" class="popup">
        <div class="popup-content">
            <span class="popup-close" onclick="togglePopup()">&times;</span>
            <h2>Sign Up for Updates</h2>
            <form id="signup-form">
                <label for="name">Name:</label>
                <input type="text" id="name" name="name" required>
                <label for="email">Email:</label>
                <input type="email" id="email" name="email" required>
                <button type="submit">Subscribe</button>
            </form>
        </div>
    </div>
<script src="https://unpkg.com/leaflet-routing-machine/dist/leaflet-routing-machine.js"></script>
<link rel="stylesheet" href="https://unpkg.com/leaflet-routing-machine/dist/leaflet-routing-machine.css" />
<script src="https://unpkg.com/leaflet-control-geolocate/dist/Control.Geolocate.min.js"></script>


    <script src="https://unpkg.com/leaflet@1.7.1/dist/leaflet.js"></script>
    <script src="scripts.js"></script>
    <script src="map.js"></script>
</body>
</html>
