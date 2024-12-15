import React from 'react';

const FeaturesSection = () => {
  return (
    <section className="features-section" id="features">
      <h2>Our Features</h2>
      <div className="features-icons">
        <div className="feature-item">
          <i className="fas fa-utensils"></i>
          <h4>Delicious Recipes</h4>
          <p>Explore a variety of recipes for every taste and occasion, from comforting meals to exotic dishes that will elevate your culinary skills.</p>
        </div>
        <div className="feature-item">
          <i className="fas fa-clock"></i>
          <h4>Quick Meals</h4>
          <p>Find meals that fit your busy schedule without sacrificing taste, so you can enjoy home-cooked meals even on your busiest days.</p>
        </div>
        <div className="feature-item">
          <i className="fas fa-globe"></i>
          <h4>Global Cuisines</h4>
          <p>Discover dishes from cultures around the world, from hearty European meals to fresh Asian flavors. Expand your culinary horizons!</p>
        </div>
        <div className="feature-item">
          <i className="fas fa-heart"></i>
          <h4>Healthy Cooking</h4>
          <p>Learn how to prepare meals that are nutritious, full of flavor, and made with wholesome ingredients for a healthier lifestyle.</p>
        </div>
      </div>
    </section>
  );
}

export default FeaturesSection;
