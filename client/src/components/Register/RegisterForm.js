import React from 'react';
import { useNavigate } from 'react-router-dom';

const RegisterForm = () => {
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();

    const username = event.target.username.value;
    const email = event.target.email.value;
    const password = event.target.password.value;

    try {
      // Send POST request to the backend
      const response = await fetch('http://localhost:5000/api/auth/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, email, password }),
      });

      const data = await response.json();

      if (response.ok) {
        // Store the token and role in localStorage
        localStorage.setItem('token', data.token);
        localStorage.setItem('userRole', 'user'); // Default role is user

        // Redirect to the user home page
        navigate('/home');
      } else {
        alert(data.message || 'Registration failed. Please try again.');
      }
    } catch (error) {
      console.error('Error during registration:', error);
      alert('Something went wrong. Please try again later.');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="register-form">
      <div className="register-input-group">
        <i className="fas fa-user"></i>
        <input
          type="text"
          id="username"
          name="username"
          className="register-input"
          placeholder="Username"
          required
        />
      </div>
      <div className="register-input-group">
        <i className="fas fa-envelope"></i>
        <input
          type="email"
          id="email"
          name="email"
          className="register-input"
          placeholder="Email"
          required
        />
      </div>
      <div className="register-input-group">
        <i className="fas fa-lock"></i>
        <input
          type="password"
          id="password"
          name="password"
          className="register-input"
          placeholder="Password"
          required
        />
      </div>
      <button type="submit" className="register-submit-btn">
        Register
      </button>
    </form>
  );
};

export default RegisterForm;
