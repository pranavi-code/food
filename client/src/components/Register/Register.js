import React ,{useEffect }from 'react';
import RegisterForm from './RegisterForm';
import SocialLogin from './SocialLogin';
import './styles/Register.css';
import regImg from '../images/reg_img.jpg'; // Import the image from the assets folder
function Register() {
    useEffect(() => {
      // Add the class name to the body when the component mounts
      document.body.classList.add('register-page');
  
      // Cleanup function to remove the class when the component unmounts
      return () => {
        document.body.classList.remove('register-page');
      };
    }, []);
  return (
    <div className="register-page-container">
      {/* Background Image Section */}
      <div
        className="register-image-section"
        style={{ backgroundImage: `url(${regImg})` }}
      ></div>

      {/* Form Section */}
      <div className="register-form-section">
        <h2 className="register-title">Create an Account</h2>
        <p className="register-subtitle">Join us for exclusive recipes and more.</p>
        <RegisterForm />
        <SocialLogin />
        <div className="register-login-option">
          <p>
            Already have an account?{' '}
            <a href="/login" className="register-login-link">
              Log In
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;
