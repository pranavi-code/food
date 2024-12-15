import React from 'react';

const SocialLogin = () => {
  return (
    <div className="register-social-login">
      <p className="register-social-text">Or sign up with:</p>
      <div className="register-social-buttons">
        <button className="register-social-btn facebook-btn">
          <i className="fab fa-facebook-f"></i> Facebook
        </button>
        <button className="register-social-btn twitter-btn">
          <i className="fab fa-twitter"></i> Twitter
        </button>
        <button className="register-social-btn google-btn">
          <i className="fab fa-google"></i> Google
        </button>
      </div>
    </div>
  );
};

export default SocialLogin;
