import React, { useEffect } from "react";
import "./PasswordReset.css";

const PasswordReset = () => {
  useEffect(() => {
    // Add the class when component mounts
    document.body.classList.add('password-reset-body');

    // Remove the class when component unmounts
    return () => {
      document.body.classList.remove('password-reset-body');
    };
  }, []);

  return (
    <div className="password-reset-container">
      <div className="password-reset-form-section">
        <h2 className="password-reset-title">Password Reset</h2>
        <p className="password-reset-description">
          Enter your email address to receive a password reset link.
        </p>
        <form>
          <div className="password-reset-input-group">
            <input
              type="email"
              placeholder="Enter your email"
              className="password-reset-input"
              required
            />
          </div>
          <button type="submit" className="password-reset-btn">
            Send Reset Link
          </button>
          <div className="password-reset-register">
            <p>
              Remember your password?{" "}
              <a href="/login" className="password-reset-login-link">
                Log In
              </a>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default PasswordReset;
