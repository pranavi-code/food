import React from 'react';

function SocialLogin() {
  return (
    <div className="social-login-container">
      <p className="social-login-text">Or log in with:</p>
      <div className="social-login-buttons">
        <button className="social-login-button google-login-button">
          <i className="fab fa-google"></i> Google
        </button>
      </div>
      <div className="social-login-register">
        <p>
          Don't have an account? <a href="/register" className="social-login-register-link">Register Now</a>
        </p>
      </div>
    </div>
  );
}

export default SocialLogin;
