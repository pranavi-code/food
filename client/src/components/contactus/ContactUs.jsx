import React from "react";
import "./ContactUs.css";
import contactImage from "../images/contact.jpeg";

const ContactUs = () => {
  return (
    <div
      className="contact-us-body"
      style={{
        backgroundImage: `url(${contactImage})`, // Use the imported image
      }}
    >
      <div className="contact-us-card">
        <h2>Contact Us</h2>
        <form className="contact-us-form">
          <input type="text" placeholder="Your Name" required className="contact-us-input" />
          <input type="email" placeholder="Your Email" required className="contact-us-input" />
          <textarea placeholder="Your Message" required className="contact-us-textarea"></textarea>
          <button type="submit" className="contact-us-button">Send Message</button>
        </form>
        <footer className="contact-us-footer">
          <p>&copy; 2024 Culinary Quest. All rights reserved.</p>
          <div className="contact-us-social-links">
            <a href="#" className="contact-us-social-icon"><i className="fab fa-facebook-f"></i></a>
            <a href="#" className="contact-us-social-icon"><i className="fab fa-instagram"></i></a>
            <a href="#" className="contact-us-social-icon"><i className="fab fa-twitter"></i></a>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default ContactUs;
