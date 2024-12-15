import React from "react";
import "./AdminDashboard.css";
import adminImage from "../images/admin_dashboard.jpeg"; // Adjust the path based on your project structure

const AdminDashboard = () => {
  const handleLogout = () => {
    // Clear session or authentication tokens
    sessionStorage.removeItem("authToken"); // Clear session storage
    localStorage.removeItem("authToken"); // Clear local storage

  };

  return (
    <div className="admin-dashboard-body" style={{ backgroundImage: `url(${adminImage})` }}>
     
      <nav className="admin-dashboard-navbar navbar navbar-expand-lg navbar-dark">
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
                <a className="nav-link" href="/recipeManagement">
                  Recipe Management
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/categoryManagement">
                  Category Management
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/userManagement">
                  Manage Users
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
              <li className="nav-item">
          <a className="nav-link" href="/" onClick={handleLogout}>
            Logout
          </a>
        </li>
            </ul>
          </div>
        </div>
      </nav>

      <div className="admin-dashboard-content container">
     
        <div className="admin-dashboard-header">
          <h2>Admin Dashboard</h2>
        </div>

        <div className="row flex-wrap">
          <div className="col-md-4">
            <div className="admin-dashboard-card">
              <div className="admin-dashboard-card-header">Total Users</div>
              <div className="admin-dashboard-card-body">
                <h3>1,250</h3>
              </div>
            </div>
          </div>

          <div className="col-md-4">
            <div className="admin-dashboard-card">
              <div className="admin-dashboard-card-header">Feedback Reports</div>
              <div className="admin-dashboard-card-body">
                <h3>230</h3>
              </div>
            </div>
          </div>

          <div className="col-md-4">
            <div className="admin-dashboard-card">
              <div className="admin-dashboard-card-header">Active Alerts</div>
              <div className="admin-dashboard-card-body">
                <h3>15</h3>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-5">
          <h3 class="admin-dashboard-h">Recent Feedback</h3>
          <table className="admin-dashboard-table table table-bordered table-striped">
            <thead>
              <tr>
                <th>Issue</th>
                <th>Details</th>
                <th>Date</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Issue 1</td>
                <td>Feedback regarding feature improvements.</td>
                <td>2024-12-06</td>
                <td>
                  <button className="btn btn-success btn-sm">Resolved</button>
                </td>
              </tr>
              <tr>
                <td>Issue 2</td>
                <td>Complaint about UI design.</td>
                <td>2024-12-05</td>
                <td>
                  <button className="btn btn-warning btn-sm">Pending</button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <footer className="admin-dashboard-footer">
        <p>&copy; 2024 Culinary Quest. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default AdminDashboard;
