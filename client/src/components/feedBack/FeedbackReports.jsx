import React from "react";
import adminDashboardImage from "../images/admin_dashboard.jpeg"; // Importing the background image
import "./FeedbackReports.css";

const FeedbackReports = () => {
  const logout = () => {
    sessionStorage.removeItem("authToken");
    localStorage.removeItem("authToken");
    window.location.href = "landpage.html";
  };

  const viewFeedback = (submitter, type, message) => {
    document.getElementById("feedbackMessage").textContent = message;
    new window.bootstrap.Modal(document.getElementById("feedbackModal")).show();
  };

  const markAsResolved = (button) => {
    let row = button.closest("tr");
    let statusCell = row.querySelector(".feedback-status-cell");
    statusCell.innerHTML = '<span class="badge bg-success">Resolved</span>';
  };

  const deleteFeedback = (button) => {
    if (window.confirm("Are you sure you want to delete this feedback?")) {
      let row = button.closest("tr");
      row.remove();
    }
  };

  return (
    <div
      className="feedback-page"
      style={{
        backgroundImage: `url(${adminDashboardImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* Navbar */}
      <nav className="feedback-navbar navbar navbar-expand-lg navbar-dark">
        <div className="container-fluid">
          <a className="navbar-brand" href="/adminDash">Admin Panel</a>
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
              <li className="nav-item"><a className="nav-link" href="/adminDash">Dashboard</a></li>
              <li className="nav-item"><a className="nav-link" href="/recipeManagement">Recipe Management</a></li>
              <li className="nav-item"><a className="nav-link" href="/categoryManagment">Category Management</a></li>
              <li className="nav-item"><a className="nav-link" href="/userManagement">Manage Users</a></li>
              <li className="nav-item"><a className="nav-link" href="/setting">Settings</a></li>
              <li className="nav-item"><a className="nav-link" href="/feedback">Feedback</a></li>
              <a className="nav-link" href="/" id="logoutBtn" onClick={logout}>Logout</a>
            </ul>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <div className="feedback-content container">
        <div className="feedback-header">
          <h2>Feedback and Reports</h2>
        </div>

        {/* Feedback Filters */}
        <div className="mb-4">
          <select className="form-select feedback-filter" aria-label="Feedback Type">
            <option selected>Filter by Feedback Type</option>
            <option value="complaint">Complaint</option>
            <option value="suggestion">Suggestion</option>
            <option value="bug_report">Bug Report</option>
          </select>
        </div>

        {/* Feedback Table */}
        <div className="card feedback-card mb-4">
          <div className="card-header feedback-card-header">Feedback/Reports</div>
          <div className="card-body">
            <div className="table-responsive">
              <table className="table table-bordered table-striped">
                <thead>
                  <tr>
                    <th>Submitted By</th>
                    <th>Type</th>
                    <th>Message</th>
                    <th>Status</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>John Doe</td>
                    <td>Complaint</td>
                    <td>Issue with login functionality.</td>
                    <td className="feedback-status-cell"><span className="badge bg-warning">Open</span></td>
                    <td>
                      <button className="btn btn-success btn-sm" onClick={() => viewFeedback("John Doe", "Complaint", "Issue with login functionality.")}>View</button>
                      <button className="btn btn-primary btn-sm" onClick={(e) => markAsResolved(e.target)}>Mark as Resolved</button>
                      <button className="btn btn-danger btn-sm" onClick={(e) => deleteFeedback(e.target)}>Delete</button>
                    </td>
                  </tr>
                  <tr>
                    <td>Jane Smith</td>
                    <td>Bug Report</td>
                    <td>Button not working on homepage.</td>
                    <td className="feedback-status-cell"><span className="badge bg-success">Resolved</span></td>
                    <td>
                      <button className="btn btn-success btn-sm" onClick={() => viewFeedback("Jane Smith", "Bug Report", "Button not working on homepage.")}>View</button>
                      <button className="btn btn-primary btn-sm" onClick={(e) => markAsResolved(e.target)}>Mark as Resolved</button>
                      <button className="btn btn-danger btn-sm" onClick={(e) => deleteFeedback(e.target)}>Delete</button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* Pagination */}
        <nav>
          <ul className="pagination">
            <li className="page-item"><a className="page-link" href="#">Previous</a></li>
            <li className="page-item"><a className="page-link" href="#">1</a></li>
            <li className="page-item"><a className="page-link" href="#">2</a></li>
            <li className="page-item"><a className="page-link" href="#">Next</a></li>
          </ul>
        </nav>
      </div>

      {/* Modal */}
      <div className="modal fade" id="feedbackModal" tabindex="-1" aria-labelledby="feedbackModalLabel" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="feedbackModalLabel">View Feedback</h5>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
              <p id="feedbackMessage"></p>
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="feedback-footer-wrapper">
        <footer>
          <p>&copy; 2024 Culinary Quest. All rights reserved.</p>
        </footer>
      </div>
    </div>
  );
};

export default FeedbackReports;
