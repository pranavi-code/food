import React from "react";
import { useNavigate } from "react-router-dom";
import profilePic from "../images/profile-pic.jpeg";

import "./MyAccount.css";
function MyAccount() {
  const navigate = useNavigate();

  const handleLogout = () => {
    // Clear all auth-related items from localStorage
    localStorage.removeItem("token");
    localStorage.removeItem("role");
    localStorage.removeItem("username");
    
    // Redirect to login page
    navigate("/login");
  };

  return (
    <>
      {/* Navbar */}
      <nav className="myaccount-navbar navbar navbar-expand-lg fixed-top">
        <div className="container-fluid">
          <a className="navbar-brand" href="/home">
            Culinary Quest
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav me-auto">
              <li className="nav-item">
                <a className="nav-link" href="/recipeSearch">
                  Recipes
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#categories-section">
                  Categories
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/profile">
                  My Account
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/contact">
                  Contact Us
                </a>
              </li>
            </ul>
            
          </div>
        </div>
      </nav>

      {/* Account Container */}
      <div className="myaccount-container">
        {/* Profile Section */}
        <div className="myaccount-profile-section">
        <img
  src={profilePic}
  alt="Profile Picture"
  className="profile-picture"
/>

          <div className="myaccount-profile-info">
            <h2>My Profile</h2>
            <p>
              <strong>Name:</strong> {localStorage.getItem("username")}
            </p>
            <div className="d-flex gap-2">
              {/* <a href="/editProfile" id="edit">
                <button className="btn btn-edit">Edit Profile</button>
              </a> */}
              <button 
                className="btn btn-view" 
                onClick={handleLogout}
              >
                Logout
              </button>
            </div>
          </div>
        </div>
        {/* Settings Section */}
        {/* <div className="myaccount-settings-section">
          <h2>Settings</h2>
          <form>
            <div className="mb-3">
              <label htmlFor="changePassword" className="form-label">
                Change Password
              </label>
              <input
                type="password"
                id="changePassword"
                className="form-control"
                placeholder="Enter new password"
              />
            </div>
            <div className="mb-3">
              <label
                htmlFor="notificationPreferences"
                className="form-label"
              >
                Notification Preferences
              </label>
              <select
                id="notificationPreferences"
                className="form-control"
              >
                <option>Email Notifications</option>
                <option>SMS Notifications</option>
                <option>Push Notifications</option>
              </select>
            </div>
            <button type="submit" className="btn btn-save">
              Save Changes
            </button>
          </form>
        </div> */}
      </div>

      {/* Footer */}
      <footer className="myaccount-footer">
        <p>&copy; 2024 Culinary Quest. All rights reserved.</p>
      </footer>
    </>
  );
}

export default MyAccount;
