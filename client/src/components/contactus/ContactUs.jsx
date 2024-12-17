import React, { useState } from "react";
import "./ContactUs.css";
import contactImage from "../images/contact.jpeg";
import axios from "axios"; // Import axios for API calls

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Send the form data to the backend API
      await axios.post("http://localhost:5000/api/feedback/submit", formData);
      alert("Feedback submitted successfully!"); // Notify the user
      setFormData({ name: "", email: "", message: "" }); // Reset the form
    } catch (error) {
      alert("Failed to submit feedback. Please try again."); // Error handling
      console.error("Error submitting feedback:", error);
    }
  };

  return (
    <div
      className="contact-us-body"
      style={{
        backgroundImage: `url(${contactImage})`,
      }}
    >
      <div className="contact-us-card">
        <h2>Contact Us</h2>
        <form className="contact-us-form" onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            required
            value={formData.name}
            onChange={handleChange}
            className="contact-us-input"
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            required
            value={formData.email}
            onChange={handleChange}
            className="contact-us-input"
          />
          <textarea
            name="message"
            placeholder="Your Message"
            required
            value={formData.message}
            onChange={handleChange}
            className="contact-us-textarea"
          ></textarea>
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
