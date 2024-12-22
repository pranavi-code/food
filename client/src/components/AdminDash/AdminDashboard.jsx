import React, { useState, useEffect } from 'react';
import { format } from "date-fns";
import axios from 'axios';
import "./AdminDashboard.css"; // Ensure the path is correct
import adminImage from "../images/admin_dashboard.jpeg"; // Adjust the path as needed

const AdminDashboard = () => {
  const [totalUsers, setTotalUsers] = useState(0); // State for total users
  const [feedbackReports, setFeedbackReports] = useState(0); // State for feedback reports (dynamic)
  const [activeAlerts, setActiveAlerts] = useState(15); // Placeholder for active alerts
  const [recentFeedback, setRecentFeedback] = useState([]); // State for recent feedback
  const [newUserRegistrations, setNewUserRegistrations] = useState(0); // State for new user registrations

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

    const fetchTotalFeedback = async () => {
      try {
        const token = localStorage.getItem("token") || sessionStorage.getItem("authToken");
        console.log("Token:", token); // Check if token is available

        if (!token) throw new Error("Authorization token missing.");

        const response = await axios.get("http://localhost:5000/api/admin/total-feedback", {
          headers: { Authorization: `Bearer ${token}` },
        });

        console.log("Response Data:", response.data); // Log the response data
        setFeedbackReports(response.data.totalFeedback || 0);
      } catch (error) {
        console.error("Error fetching total feedback:", error.message || error);
      }
    };

    const fetchRecentFeedback = async () => {
      try {
        // Fetch recent feedback from the backend API
        const response = await axios.get("http://localhost:5000/api/feedback");
        console.log("Raw Feedback Data:", response.data); // Log raw feedback data for debugging
    
        // Transform or validate feedback data
        const transformedFeedback = response.data.map(feedback => ({
          name: feedback.name || "N/A", // Fallback for missing name
          email: feedback.email || "N/A", // Fallback for missing email
          message: feedback.message || "No details provided", // Fallback for missing message
          createdAt: feedback.createdAt ? new Date(feedback.createdAt).toISOString() : null, // Parse createdAt or set null
          status: feedback.status || "Pending", // Default status if missing
        }));
    
        console.log("Transformed Feedback Data:", transformedFeedback); // Log transformed data
        setRecentFeedback(transformedFeedback); // Set validated data in state
      } catch (error) {
        console.error("Error fetching feedback:", error.message || error);
      }
    };

    const fetchNewUserRegistrations = async () => {
      try {
        const token = localStorage.getItem("token") || sessionStorage.getItem("authToken");
        console.log("Token:", token); // Check if token is available
    
        if (!token) throw new Error("Authorization token missing.");
    
        const response = await axios.get("http://localhost:5000/api/admin/new-user-registrations", {
          headers: { Authorization: `Bearer ${token}` },
        });
    
        console.log("New User Registrations:", response.data); // Log the response data
        setNewUserRegistrations(response.data.newUserRegistrations || 0);
      } catch (error) {
        console.error("Error fetching new user registrations:", error.message || error);
      }
    };

    // Fetch all data
    fetchTotalUsers();
    fetchTotalFeedback(); // Fetch total feedback count
    fetchRecentFeedback();
    fetchNewUserRegistrations(); // Fetch new user registrations
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
              <div className="admin-dashboard-card-header">New User Registrations</div>
              <div className="admin-dashboard-card-body">
                <p>{newUserRegistrations}</p> {/* Display new user registrations count */}
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
                <th scope="col">Name</th>
                <th scope="col">Message</th>
                <th scope="col">Email</th>
                <th scope="col">Date</th>
                <th scope="col">Status</th>
              </tr>
            </thead>
            <tbody>
              {recentFeedback.length === 0 ? (
                <tr>
                  <td colSpan="5" className="text-center">No feedback available.</td>
                </tr>
              ) : (
                recentFeedback.map((feedback, index) => {
                  const formattedDate = feedback.createdAt
                    ? format(new Date(feedback.createdAt), "yyyy-MM-dd HH:mm")
                    : "N/A";

                  return (
                    <tr key={index}>
                      <td>{feedback.name || "No name provided"}</td>
                      <td>{feedback.message || "No message provided"}</td>
                      <td>{feedback.email || "No email provided"}</td>
                      <td>{formattedDate}</td>
                      <td>
                        <button
                          className={`btn btn-${feedback.status === "Resolved" ? "success" : "warning"} btn-sm`}
                        >
                          {feedback.status || "No status"}
                        </button>
                      </td>
                    </tr>
                  );
                })
              )}
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
