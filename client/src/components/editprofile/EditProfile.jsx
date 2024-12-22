import React, { useState, useEffect } from "react";
import "./EditProfile.css";

function EditProfile() {
  const [userData, setUserData] = useState({
    name: "",
    email: "",
    role: "",
  });

  useEffect(() => {
    // Retrieve individual pieces of data from localStorage
    const name = localStorage.getItem("username");
    const email = localStorage.getItem("email");
    const role = localStorage.getItem("role");

    // Set state with retrieved data
    if (name && email && role) {
      setUserData({
        name,
        email,
        role,
      });
    }
  }, []);

  const saveProfile = (event) => {
    event.preventDefault();
    // Add functionality to save profile changes here
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
              <strong>Name:</strong> <span>{userData.name || "Loading..."}</span>
            </p>
            <p>
              <strong>Email:</strong> <span>{userData.email || "Loading..."}</span>
            </p>
            <p>
              <strong>Role:</strong> <span>{userData.role || "Loading..."}</span>
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
              defaultValue={userData.name}
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
              defaultValue={userData.email}
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
