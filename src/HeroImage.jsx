// HeroImage.js

import React from 'react';
import './index.css'; // Import the CSS file for styling

function HeroImage() {
  return (
    <div className="hero-wrapper">
      <img src="https://static1.colliderimages.com/wordpress/wp-co…ads/2022/03/best-superhero-shows-netflix-2022.jpg" alt="Hero Image" />
      <div className="hero-content">
        <h1>Welcome to Our Website</h1>
        <p>Discover amazing content and engage with our community.</p>
        <a href="#" className="cta-button">Get Started</a>
      </div>
    </div>
  );
}

export default HeroImage;
