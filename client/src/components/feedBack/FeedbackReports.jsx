import React, { useEffect, useState } from "react";
import adminDashboardImage from "../images/admin_dashboard.jpeg";
import "./FeedbackReports.css";

const FeedbackReports = () => {
  const [feedbacks, setFeedbacks] = useState([]);
  const [modalMessage, setModalMessage] = useState("");

  const logout = () => {
    sessionStorage.removeItem("authToken");
    localStorage.removeItem("authToken");
    window.location.href = "landpage.html";
  };

  const viewFeedback = (message) => {
    setModalMessage(message);
    const modal = new window.bootstrap.Modal(document.getElementById("feedbackModal"));
    modal.show();
  };

  const markAsResolved = async (id) => {
    try {
      const response = await fetch(`http://localhost:5000/api/feedback/${id}/resolve`, {
        method: "PUT",
      });

      if (response.ok) {
        const updatedFeedbacks = feedbacks.map((feedback) =>
          feedback._id === id ? { ...feedback, status: "Resolved" } : feedback
        );
        setFeedbacks(updatedFeedbacks);
        alert("Feedback marked as resolved!");
      } else {
        console.error("Failed to mark as resolved:", response.statusText);
        alert("Failed to mark feedback as resolved.");
      }
    } catch (error) {
      console.error("Error marking feedback as resolved:", error);
      alert("An error occurred while resolving feedback.");
    }
  };

  const deleteFeedback = async (id) => {
    try {
      const response = await fetch(`http://localhost:5000/api/feedback/${id}`, {
        method: "DELETE",
      });

      if (response.ok) {
        const remainingFeedbacks = feedbacks.filter((feedback) => feedback._id !== id);
        setFeedbacks(remainingFeedbacks);
        alert("Feedback deleted successfully!");
      } else {
        console.error("Failed to delete feedback:", response.statusText);
        alert("Failed to delete feedback. Please try again.");
      }
    } catch (error) {
      console.error("Error deleting feedback:", error);
      alert("An error occurred while deleting feedback.");
    }
  };

  useEffect(() => {
    const fetchFeedbacks = async () => {
      try {
        const response = await fetch("http://localhost:5000/api/feedback");

        if (response.ok) {
          const data = await response.json();
          console.log("Fetched feedback data:", data); // Debugging log
          setFeedbacks(data);
        } else {
          console.error("Failed to fetch feedbacks:", response.statusText);
        }
      } catch (error) {
        console.error("Error fetching feedbacks:", error);
      }
    };

    fetchFeedbacks();
  }, []);

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
            </ul>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <div className="feedback-content container">
        <div className="feedback-header">
          <h2>Feedback and Reports</h2>
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
                    <th>Message</th>
                    <th>Status</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {feedbacks.length === 0 ? (
                    <tr>
                      <td colSpan="4" className="text-center">No feedback available.</td>
                    </tr>
                  ) : (
                    feedbacks.map((feedback) => (
                      <tr key={feedback._id}>
                        <td>{feedback.name || "Anonymous"}</td>
                        <td>{feedback.message}</td>
                        <td>{feedback.status || "Pending"}</td>
                        <td>
                          <button
                            className="btn btn-primary btn-sm"
                            onClick={() => viewFeedback(feedback.message)}
                          >
                            View
                          </button>
                          <button
                            className="btn btn-success btn-sm"
                            onClick={() => markAsResolved(feedback._id)}
                          >
                            Mark as Resolved
                          </button>
                          <button
                            className="btn btn-danger btn-sm"
                            onClick={() => deleteFeedback(feedback._id)}
                          >
                            Delete
                          </button>
                        </td>
                      </tr>
                    ))
                  )}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>

      {/* Modal */}
      <div className="modal fade" id="feedbackModal" tabIndex="-1">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">View Feedback</h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
              ></button>
            </div>
            <div className="modal-body">
              <p>{modalMessage}</p>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
      <footer className="footer">
        <p>&copy; 2024 Culinary Quest. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default FeedbackReports;
