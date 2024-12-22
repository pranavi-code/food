import React from "react";
import userManagementImage from "../images/admin_dashboard.jpeg"; // Importing the image
import "./UserManagement.css";

function UserManagement() {
  const logout = () => {
    sessionStorage.removeItem("authToken");
    localStorage.removeItem("authToken");
    window.location.href = "landpage.html";
  };

  const searchUsers = () => {
    // Add functionality for searching users
  };

  const editUser = (username) => {
    console.log("Editing user:", username);
  };

  const confirmDelete = (username) => {
    console.log("Deleting user:", username);
  };

  const toggleStatus = (username) => {
    console.log("Toggling status for:", username);
  };

  const exportData = () => {
    console.log("Exporting data...");
  };

  return (
    <div
      className="user-management-page"
      style={{
        backgroundImage: `url(${userManagementImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <nav className="user-management-navbar navbar navbar-expand-lg navbar-dark">
        <div className="container-fluid">
          <a className="navbar-brand" href="/adminDash">
            Admin Panel
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link" href="/adminDash">
                  Dashboard
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="recipe_management.html">
                  Recipe Management
                </a>
              </li>
              
              <li className="nav-item">
                <a className="nav-link" href="/setting">
                  Settings
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/feedback">
                  Feedback
                </a>
              </li>
              <a className="nav-link" href="/" id="logoutBtn" onClick={logout}>
                Logout
              </a>
            </ul>
          </div>
        </div>
      </nav>

      <div className="user-management-container">
        <div className="user-management-header">
          <h2>User Management</h2>
        </div>

        <div className="user-management-search mb-4">
          <input
            type="text"
            className="form-control"
            id="searchBar"
            placeholder="Search by username or email"
            onKeyUp={searchUsers}
          />
        </div>

        <div className="user-management-table table-responsive">
          <table className="table table-striped table-bordered">
            <thead>
              <tr>
                <th>Username</th>
                <th>Email</th>
                <th>Role</th>
                <th>Status</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>johndoe</td>
                <td>johndoe@example.com</td>
                <td>User</td>
                <td>
                  <span className="badge bg-success">Active</span>
                </td>
                <td>
                  <button
                    className="btn btn-warning btn-sm"
                    onClick={() => editUser("johndoe")}
                  >
                    Edit
                  </button>
                  <button
                    className="btn btn-danger btn-sm"
                    onClick={() => confirmDelete("johndoe")}
                  >
                    Delete
                  </button>
                  <button
                    className="btn btn-secondary btn-sm"
                    onClick={() => toggleStatus("johndoe")}
                  >
                    Block
                  </button>
                </td>
              </tr>
              <tr>
                <td>janedoe</td>
                <td>janedoe@example.com</td>
                <td>Admin</td>
                <td>
                  <span className="badge bg-success">Active</span>
                </td>
                <td>
                  <button
                    className="btn btn-warning btn-sm"
                    onClick={() => editUser("janedoe")}
                  >
                    Edit
                  </button>
                  <button
                    className="btn btn-danger btn-sm"
                    onClick={() => confirmDelete("janedoe")}
                  >
                    Delete
                  </button>
                  <button
                    className="btn btn-secondary btn-sm"
                    onClick={() => toggleStatus("janedoe")}
                  >
                    Block
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <button
          className="btn btn-success my-4"
          data-bs-toggle="modal"
          data-bs-target="#addUserModal"
        >
          Add User
        </button>

        <button className="btn btn-info my-4" onClick={exportData}>
          Export Data
        </button>
      </div>

      <footer className="user-management-footer">
        <p>&copy; 2024 Culinary Quest. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default UserManagement;
