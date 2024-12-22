import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function LoginForm() {
  const [formData, setFormData] = useState({
    username: "",
    password: ""
  });
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    try {
      console.log("Sending login request with:", formData); // Debug log

      const response = await axios.post(
        "http://localhost:5000/api/auth/login",
        formData,
        {
          headers: {
            'Content-Type': 'application/json'
          }
        }
      );

      console.log("Login response:", response.data); // Debug log

      if (response.data.token) {
        localStorage.setItem("token", response.data.token);
        localStorage.setItem("role", response.data.user.role);
        localStorage.setItem("username", response.data.user.username);
        localStorage.setItem("email",response.data.user.email);

        // Redirect based on role
        if (response.data.user.role === "admin") {
          navigate("/adminDash");
        } else {
          navigate("/home");
        }
      }
    } catch (error) {
      console.error("Login error details:", error.response?.data); // Debug log
      setError(error.response?.data?.message || "Login failed. Please try again.");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="login-form-container">
      {error && <div className="alert alert-danger">{error}</div>}
      <div className="login-input-group">
        <input
          type="text"
          name="username"
          placeholder="Username"
          className="login-input-field"
          value={formData.username}
          onChange={handleChange}
          required
        />
      </div>
      <div className="login-input-group">
        <input
          type="password"
          name="password"
          placeholder="Password"
          className="login-input-field"
          value={formData.password}
          onChange={handleChange}
          required
        />
      </div>
      <div className="login-options">
      <div className="social-login-register">
        <p>
          Don't have an account? <a href="/register" className="social-login-register-link">Register Now</a>
        </p>
      </div>
      </div>
      <button type="submit" className="login-submit-button">
        Log In
      </button>
    </form>
  );
}

export default LoginForm;
