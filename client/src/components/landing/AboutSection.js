import React from 'react';
import image1 from '../images/about us 1.jpeg';
import image2 from '../images/about us 2.jpeg';
import image3 from '../images/about us 3.jpeg';

const AboutSection = () => {
  return (
    <section className="about-section" id="about">
      <h2>About Us</h2>
      <p>At Culinary Quest, we believe that cooking should be fun, accessible, and filled with flavor. Our mission is to inspire you to explore the world of culinary arts with ease, no matter your skill level.</p>
      <div className="image-grid">
        <img src={image1} alt="Image 1" />
        <img src={image2} alt="Image 2" />
        <img src={image3} alt="Image 3" />
      </div>
    </section>
  );
}

export default AboutSection;
