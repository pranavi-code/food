import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios"; // Import axios

function LoginForm() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post("http://localhost:5000/api/auth/login", {
        username,
        password,
      });

      const data = response.data;

      if (response.status === 200) {
        // Store token and user role in localStorage
        localStorage.setItem("token", data.token);
        localStorage.setItem("role", data.userRole);

        // Redirect based on role
        if (data.userRole === "admin") {
          navigate("/adminDash"); // Redirect to Admin Dashboard
        } else {
          navigate("/home"); // Redirect to Home Page
        }
      } else {
        alert(data.message || "Login failed. Please try again.");
      }
    } catch (error) {
      // Handle specific error messages
      const errorMessage = error.response?.data?.message || "Something went wrong. Please try again later.";
      console.error("Login error:", error);
      alert(errorMessage);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="login-form-container">
      <div className="login-input-group">
        <input
          type="text"
          placeholder="Username"
          className="login-input-field"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />
      </div>
      <div className="login-input-group">
        <input
          type="password"
          placeholder="Password"
          className="login-input-field"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
      </div>
      <div className="login-options">
        <div className="login-remember-me">
          <input type="checkbox" id="login-remember-checkbox" />
          <label htmlFor="login-remember-checkbox">Remember me</label>
        </div>
        <a href="/resetPassword" className="login-forgot-password">Forgot Password?</a>
      </div>
      <button type="submit" className="login-submit-button">
        Log In
      </button>
    </form>
  );
}

export default LoginForm;
