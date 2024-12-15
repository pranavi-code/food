import React from "react";
import "./EditProfile.css";

function EditProfile() {
  const saveProfile = (event) => {
    event.preventDefault();
    // Add functionality to save profile changes
    alert("Profile saved!");
  };

  return (
    <div className="edit-profile-body">
      {/* Navbar */}
      <nav className="edit-profile-navbar navbar navbar-expand-lg">
        <div className="container-fluid">
          <a className="navbar-brand" href="/home">Culinary Quest</a>
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
                <a className="nav-link" href="/recipeSearch">Recipes</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/home">Categories</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="./profile.html">My Account</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/contact">Contact Us</a>
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

      {/* Container */}
      <div className="edit-profile-container container">
        {/* Profile Section */}
        <div className="edit-profile-section">
          <img
            src="https://via.placeholder.com/120"
            alt="Profile"
            className="edit-profile-picture"
          />
          <div className="edit-profile-info">
            <h2>Edit Profile</h2>
            <p>
              <strong>Name:</strong> <span id="name-preview">John Doe</span>
            </p>
            <p>
              <strong>Email:</strong> <span id="email-preview">johndoe@example.com</span>
            </p>
          </div>
        </div>

        {/* Edit Profile Form */}
        <h2>Profile Settings</h2>
        <form onSubmit={saveProfile}>
          <div className="mb-3">
            <label htmlFor="name" className="form-label">
              Name
            </label>
            <input
              type="text"
              id="name"
              className="form-control"
              placeholder="Enter your name"
              defaultValue="John Doe"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">
              Email
            </label>
            <input
              type="email"
              id="email"
              className="form-control"
              placeholder="Enter your email"
              defaultValue="johndoe@example.com"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="newPassword" className="form-label">
              New Password
            </label>
            <input
              type="password"
              className="form-control"
              id="newPassword"
              placeholder="Enter new password"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="confirmPassword" className="form-label">
              Confirm Password
            </label>
            <input
              type="password"
              className="form-control"
              id="confirmPassword"
              placeholder="Confirm new password"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="profilePicture" className="form-label">
              Profile Picture
            </label>
            <input
              type="file"
              className="form-control-file"
              id="profilePicture"
              accept="image/*"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="notificationPreferences" className="form-label">
              Notification Preferences
            </label>
            <select id="notificationPreferences" className="form-control">
              <option>Email Notifications</option>
              <option>SMS Notifications</option>
              <option>Push Notifications</option>
            </select>
          </div>
          <button type="submit" className="btn btn-save">
            Save Changes
          </button>
        </form>

        {/* Delete Account Option */}
        <div className="mt-4">
          <button type="button" className="btn btn-danger">
            Delete Account
          </button>
        </div>
      </div>

      {/* Footer */}
      <footer className="edit-profile-footer">
        <p>&copy; 2024 Culinary Quest. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default EditProfile;
