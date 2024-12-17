import React, { useState, useEffect } from 'react';
import axios from 'axios';
import "./AdminDashboard.css"; // Ensure the path is correct
import adminImage from "../images/admin_dashboard.jpeg"; // Adjust the path as needed

const AdminDashboard = () => {
  const [totalUsers, setTotalUsers] = useState(0); // State for total users
  const [feedbackReports, setFeedbackReports] = useState(230); // Placeholder for feedback reports
  const [activeAlerts, setActiveAlerts] = useState(15); // Placeholder for active alerts
  const [recentFeedback, setRecentFeedback] = useState([]); // State for recent feedback

  // Fetch total users and feedback data
  useEffect(() => {
    const fetchTotalUsers = async () => {
      try {
        const token = localStorage.getItem("token") || sessionStorage.getItem("authToken");
        console.log("Token:", token); // Check if token is available
    
        if (!token) throw new Error("Authorization token missing.");
    
        const response = await axios.get("http://localhost:5000/api/admin/total-users", {
          headers: { Authorization: `Bearer ${token}` },
        });
    
        console.log("Response Data:", response.data); // Log the response data
        setTotalUsers(response.data.totalUsers || 0);
      } catch (error) {
        console.error("Error fetching total users:", error.message || error);
      }
    };
    

    const fetchRecentFeedback = async () => {
      try {
        // Replace this with your actual API call to fetch recent feedback
        const feedbackData = [
          { issue: "Feature Improvement", details: "Feedback regarding feature improvements.", date: "2024-12-06", status: "Resolved" },
          { issue: "UI Complaint", details: "Complaint about UI design.", date: "2024-12-05", status: "Pending" },
        ];
        setRecentFeedback(feedbackData);
      } catch (error) {
        console.error("Error fetching feedback:", error.message || error);
      }
    };

    fetchTotalUsers();
    fetchRecentFeedback();
  }, []);

  // Logout handler
  const handleLogout = (e) => {
    e.preventDefault(); // Prevent anchor default action
    localStorage.removeItem("token");
    sessionStorage.removeItem("authToken");
    window.location.href = "/login"; // Redirect to login
  };

  return (
    <div className="admin-dashboard-body">
      {/* Background Image */}
      <div className="admin-dashboard-background" style={{ backgroundImage: `url(${adminImage})` }}></div>

      {/* Navbar */}
      <nav className="admin-dashboard-navbar navbar navbar-expand-lg navbar-dark">
        <div className="container-fluid">
          <a className="navbar-brand" href="/adminDash">Admin Panel</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item"><a className="nav-link" href="/adminDash">Dashboard</a></li>
              <li className="nav-item"><a className="nav-link" href="/recipeManagement">Recipe Management</a></li>
              <li className="nav-item"><a className="nav-link" href="/categoryManagement">Category Management</a></li>
              <li className="nav-item"><a className="nav-link" href="/userManagement">Manage Users</a></li>
              <li className="nav-item"><a className="nav-link" href="/setting">Settings</a></li>
              <li className="nav-item"><a className="nav-link" href="/feedback">Feedback</a></li>
              <li className="nav-item">
                <a className="nav-link logout-link" href="/logout" onClick={handleLogout}>Logout</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {/* Content */}
      <div className="admin-dashboard-content container">
        <div className="admin-dashboard-header">
          <h2>Admin Dashboard</h2>
        </div>

        {/* Cards Section */}
        <div className="row flex-wrap">
          <div className="col-md-4">
            <div className="admin-dashboard-card">
              <div className="admin-dashboard-card-header">Total Users</div>
              <div className="admin-dashboard-card-body">
                <p>{totalUsers}</p>
              </div>
            </div>
          </div>

          <div className="col-md-4">
            <div className="admin-dashboard-card">
              <div className="admin-dashboard-card-header">Feedback Reports</div>
              <div className="admin-dashboard-card-body">
                <p>{feedbackReports}</p>
              </div>
            </div>
          </div>

          <div className="col-md-4">
            <div className="admin-dashboard-card">
              <div className="admin-dashboard-card-header">Active Alerts</div>
              <div className="admin-dashboard-card-body">
                <p>{activeAlerts}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Recent Feedback Table */}
        <div className="mt-5">
          <h3 className="admin-dashboard-h">Recent Feedback</h3>
          <table className="admin-dashboard-table table table-bordered table-striped">
            <caption>List of recent feedback submitted by users</caption>
            <thead>
              <tr>
                <th scope="col">Issue</th>
                <th scope="col">Details</th>
                <th scope="col">Date</th>
                <th scope="col">Status</th>
              </tr>
            </thead>
            <tbody>
              {recentFeedback.map((feedback, index) => (
                <tr key={index}>
                  <td>{feedback.issue}</td>
                  <td>{feedback.details}</td>
                  <td>{feedback.date}</td>
                  <td>
                    <button className={`btn btn-${feedback.status === "Resolved" ? "success" : "warning"} btn-sm`}>
                      {feedback.status}
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Footer */}
      <footer className="admin-dashboard-footer">
        <p>&copy; 2024 Culinary Quest. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default AdminDashboard;
