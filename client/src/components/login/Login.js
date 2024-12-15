import React, { useEffect } from 'react';  // Import useEffect here
import './styles/Login.css';
import LoginForm from './LoginForm';
import SocialLogin from './SocialLogin';
import loginImage from '../images/login.jpeg';

function Login() {
  useEffect(() => {
    // Add the class name to the body when the component mounts
    document.body.classList.add('login-page');

    // Cleanup function to remove the class when the component unmounts
    return () => {
      document.body.classList.remove('login-page');
    };
  }, []);

  return (
    <div className="login-page-container">
      {/* Left Side: Image */}
      <div
        className="login-image-section"
        style={{
          backgroundImage: `url(${loginImage})`,
        }}
      ></div>

      {/* Right Side: Form */}
      <div className="login-form-section">
        <h2 className="login-title">Log In</h2>
        <p className="login-description">
          Discover exclusive recipes and join a vibrant community.
        </p>
        <LoginForm />
        <SocialLogin />
      </div>
    </div>
  );
}

export default Login;
