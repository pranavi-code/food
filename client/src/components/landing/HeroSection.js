import React from 'react';


import backgroundImage from '../images/landpage.webp'; // Import the image

const HeroSection = () => {
  return (
    <section className="hero-section" style={{ backgroundImage: `url(${backgroundImage})` }}>
      <div className="hero-overlay"></div>
      <div className="hero-content">
        <h1>Rediscover the Joy of Cooking!</h1>
        <p>Join Culinary Quest and explore new recipes, quick meal ideas, and global cuisines. Whether you're a novice or a seasoned cook, we have something for everyone.</p>
        <div className="cta-buttons">
          <a href="./login" className="btn btn-login">Login</a>
          <a href="./register" className="btn btn-signup">Sign Up</a>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
