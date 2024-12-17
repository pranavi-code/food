import React, { useState, useEffect } from "react";
import axios from "axios";
import "./MyAccount.css";

function MyAccount({ userId }) { // Pass userId as a prop from the parent component after login
  const [userDetails, setUserDetails] = useState(null);
  const [loading, setLoading] = useState(true);
  const [savedRecipes, setSavedRecipes] = useState([]); // State for saved recipes
  const [newPassword, setNewPassword] = useState(""); // State for new password
  const [notificationPreference, setNotificationPreference] = useState("Email Notifications"); // Default preference

  useEffect(() => {
    const fetchUserDetails = async () => {
      try {
        if (!userId) throw new Error("User ID is required.");

        // Fetch user details by user ID
        const response = await axios.get(`http://localhost:3000/api/auth/${userId}`);
        setUserDetails(response.data);
        console.log(response);

        // Fetch saved recipes (example endpoint, adjust as necessary)
        //const recipesResponse = await axios.get(`http://localhost:3000/api/recipes/saved/${userId}`, {
          // If your saved recipes endpoint requires authorization, handle it accordingly
        //});
        setSavedRecipes(recipesResponse.data);
      } catch (error) {
        console.error("Error fetching user details:", error.message || error);
      } finally {
        setLoading(false);
      }
    };

    fetchUserDetails();
  }, [userId]); // Run effect when userId changes

  // Function to handle password change
  const handlePasswordChange = async (e) => {
    e.preventDefault();
    try {
      await axios.put("http://localhost:3000/api/auth/change-password", { newPassword }, {
        // Ensure to include proper authorization if required
      });
      alert("Password changed successfully.");
    } catch (error) {
      console.error("Error changing password:", error.message || error);
    }
  };

  // Function to handle notification preference change
  const handlePreferenceChange = async (e) => {
    e.preventDefault();
    try {
      await axios.put("http://localhost:3000/api/auth/notifications", { preference: notificationPreference }, {
        // Include authorization if necessary
      });
      alert("Notification preferences updated.");
    } catch (error) {
      console.error("Error updating preferences:", error.message || error);
    }
  };

  // Function to delete a saved recipe
  const deleteRecipe = async (recipeId) => {
    try {
      await axios.delete(`http://localhost:3000/api/recipes/${recipeId}`);
      setSavedRecipes(savedRecipes.filter(recipe => recipe.id !== recipeId)); // Update state
      alert("Recipe deleted successfully.");
    } catch (error) {
      console.error("Error deleting recipe:", error.message || error);
    }
  };

  return (
    <>
      {/* Navbar */}
      <nav className="myaccount-navbar navbar navbar-expand-lg fixed-top">
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
                <a className="nav-link" href="#categories-section">Categories</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/profile">My Account</a>
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
              <button className="btn btn-search" type="submit">Search</button>
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
            {loading ? (
              <p>Loading user details...</p>
            ) : userDetails ? (
              <>
                <p><strong>Name:</strong> {userDetails.username}</p>
                <p><strong>Email:</strong> {userDetails.email}</p>
                <a href="/editProfile" id="edit">
                  <button className="btn btn-edit">Edit Profile</button>
                </a>
              </>
            ) : (
              <p>No user details available.</p>
            )}
          </div>
        </div>

        {/* Saved Recipes Section */}
        <div className="myaccount-saved-recipes">
          <h2>Saved Recipes</h2>
          {savedRecipes.length > 0 ? (
            savedRecipes.map(recipe => (
              <div key={recipe.id} className="myaccount-recipe-card">
                <img
                  src={recipe.image || "https://via.placeholder.com/100"}
                  alt={recipe.title}
                  className="recipe-image"
                />
                <div>
                  <h5>{recipe.title}</h5>
                  <button className="btn btn-view">View</button>
                  <button className="btn btn-delete" onClick={() => deleteRecipe(recipe.id)}>Delete</button>
                </div>
              </div>
            ))
          ) : (
            <p>No saved recipes available.</p>
          )}
        </div>

        {/* Settings Section */}
        <div className="myaccount-settings-section">
          <h2>Settings</h2>
          <form onSubmit={handlePasswordChange}>
            <div className="mb-3">
              <label htmlFor="changePassword" className="form-label">
                Change Password
              </label>
              <input
                type="password"
                id="changePassword"
                className="form-control"
                placeholder="Enter new password"
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
              />
            </div>
            <button type="submit" className="btn btn-save">Change Password</button>
          </form>
          <form onSubmit={handlePreferenceChange}>
            <div className="mb-3">
              <label htmlFor="notificationPreferences" className="form-label">
                Notification Preferences
              </label>
              <select
                id="notificationPreferences"
                className="form-control"
                value={notificationPreference}
                onChange={(e) => setNotificationPreference(e.target.value)}
              >
                <option>Email Notifications</option>
                <option>SMS Notifications</option>
                <option>Push Notifications</option>
              </select>
            </div>
            <button type="submit" className="btn btn-save">Save Preferences</button>
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
