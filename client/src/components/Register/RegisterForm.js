import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const RegisterForm = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/api/auth/register', formData, {
        headers: {
          'Content-Type': 'application/json'
        }
      });

      if (response.status === 201) {
        alert('Registration successful!');
        navigate('/login');
      }
    } catch (error) {
      console.error('Registration error:', error);
      alert(error.response?.data?.message || 'Registration failed');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="register-form">
      <div className="register-input-group">
        <i className="fas fa-user"></i>
        <input
          type="text"
          name="username"
          className="register-input"
          placeholder="Username"
          value={formData.username}
          onChange={handleChange}
          required
        />
      </div>
      <div className="register-input-group">
        <i className="fas fa-envelope"></i>
        <input
          type="email"
          name="email"
          className="register-input"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          required
        />
      </div>
      <div className="register-input-group">
        <i className="fas fa-lock"></i>
        <input
          type="password"
          name="password"
          className="register-input"
          placeholder="Password"
          value={formData.password}
          onChange={handleChange}
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
