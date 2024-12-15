 
import React from 'react';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="social-icons">
        <a href="https://www.facebook.com/login.php/"><i className="fab fa-facebook-f"></i></a>
        <a href="https://www.instagram.com/accounts/login/"><i className="fab fa-instagram"></i></a>
        <a href="https://x.com/i/flow/login?input_flow_data=%7B%22requested_variant%22%3A%22eyJteCI6IjIifQ%3D%3D%22%7D"><i className="fab fa-twitter"></i></a>
      </div>
      <div className="quick-links">
        <a href="/terms">Terms of Service</a>
        <a href="/privacy">Privacy Policy</a>
        <a href="/contact">Contact Us</a>
        <a href="/contact">FAQ</a>
      </div>
      <p>&copy; 2024 Culinary Quest. All rights reserved.</p>
    </footer>
  );
}

export default Footer;
