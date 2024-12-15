import React from 'react';
import './App.css';
import AboutSection from './AboutSection';
import FeaturesSection from './FeaturesSection';
import Footer from './Footer';
import HeroSection from './HeroSection';
import Navbar from './Navbar';
import NewsletterSection from './NewsletterSection';

const App = () => {
  return (
    <div className="landing-page">
      <Navbar />
      <HeroSection />
      <FeaturesSection />
      <AboutSection />
      <NewsletterSection />
      <Footer />
    </div>
  );
}

export default App;
