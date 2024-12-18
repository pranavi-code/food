import React from "react";
import { useNavigate } from "react-router-dom";
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
            <form className="d-flex">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search recipes..."
                aria-label="Search"
              />
              <button className="btn btn-search" type="submit">
                Search
              </button>
            </form>
          </div>
        </div>
      </nav>

      {/* Account Container */}
      <div className="myaccount-container">
        {/* Profile Section */}
        <div className="myaccount-profile-section">
          <img
            src="https://via.placeholder.com/120"
            alt="Profile Picture"
            className="profile-picture"
          />
          <div className="myaccount-profile-info">
            <h2>My Profile</h2>
            <p>
              <strong>Name:</strong> {localStorage.getItem("username")}
            </p>
            <div className="d-flex gap-2">
              <a href="/editProfile" id="edit">
                <button className="btn btn-edit">Edit Profile</button>
              </a>
              <button 
                className="btn btn-view" 
                onClick={handleLogout}
              >
                Logout
              </button>
            </div>
          </div>
        </div>

        {/* Saved Recipes Section */}
        <div className="myaccount-saved-recipes">
          <h2>Saved Recipes</h2>
          <div className="myaccount-recipe-card">
            <img
              src="https://via.placeholder.com/100"
              alt="Recipe Image"
              className="recipe-image"
            />
            <div>
              <h5>Spaghetti Bolognese</h5>
              <button className="btn btn-view">View</button>
              <button className="btn btn-delete">Delete</button>
            </div>
          </div>
          <div className="myaccount-recipe-card mt-3">
            <img
              src="https://via.placeholder.com/100"
              alt="Recipe Image"
              className="recipe-image"
            />
            <div>
              <h5>Chocolate Cake</h5>
              <button className="btn btn-view">View</button>
              <button className="btn btn-delete">Delete</button>
            </div>
          </div>
        </div>

        {/* Settings Section */}
        <div className="myaccount-settings-section">
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
        </div>
      </div>

      {/* Footer */}
      <footer className="myaccount-footer">
        <p>&copy; 2024 Culinary Quest. All rights reserved.</p>
      </footer>
    </>
  );
}

export default MyAccount;
