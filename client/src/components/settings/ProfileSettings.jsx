import React, { useState, useEffect } from 'react';
import './ProfileSettings.css';
import backgroundImage from '../images/admin_dashboard.jpeg'; // Import the image

const ProfileSettings = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [profilePic, setProfilePic] = useState(null);
    const [profilePicPreview, setProfilePicPreview] = useState(''); // For displaying image preview

    // Retrieve profile data from localStorage when the component mounts
    useEffect(() => {
        const user = JSON.parse(localStorage.getItem('user')); // Get user data from localStorage
        if (user) {
            setName(user.name);
            setEmail(user.email);
            setProfilePicPreview(user.profilePic || '../images/profile-pic.jpeg');
        }
    }, []);

    const handleLogout = () => {
        localStorage.removeItem('user');
        localStorage.removeItem('authToken');
        window.location.href = '/'; // Redirect to landing page or login
    };

    return (
        <div className="profile-settings-page" style={{ backgroundImage: `url(${backgroundImage})` }}>
            
            <nav className="navbar navbar-expand-lg navbar-dark">
                <div className="container-fluid">
                    <a className="navbar-brand" href="/adminDash">Admin Panel</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item"><a className="nav-link" href="/adminDash">Dashboard</a></li>
                            <li className="nav-item"><a className="nav-link" href="/recipeManagement">Recipe Management</a></li>
                            <li className="nav-item"><a className="nav-link" href="/setting">Settings</a></li>
                            <li className="nav-item"><a className="nav-link" href="/feedback">Feedback</a></li>
                            <a className="nav-link" href="/" id="logoutBtn" onClick={handleLogout}>Logout</a>
                        </ul>
                    </div>
                </div>
            </nav>

            <div className="container profile-settings-content">
               <div className="profile-settings-header">
                    <h2>Profile Settings</h2>
                </div>

                <div className="card mb-4">
                    <div className="card-header">Profile Information</div>
                    <div className="card-body">
                        <div className="row mb-3">
                            <div className="col-md-4">
                                <img 
                                    src={profilePicPreview} 
                                    alt="Profile Picture" 
                                    className="profile-settings-img" 
                                />
                            </div>
                            <div className="col-md-8">
                                <div className="mb-3">
                                    <label htmlFor="name" className="form-label">Name</label>
                                    <input 
                                        type="text" 
                                        className="form-control" 
                                        id="name" 
                                        value={name} 
                                        disabled // Disable input field as it's for display
                                    />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="email" className="form-label">Email</label>
                                    <input 
                                        type="email" 
                                        className="form-control" 
                                        id="email" 
                                        value={email} 
                                        disabled // Disable input field as it's for display
                                    />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="profilePicture" className="form-label">Profile Picture</label>
                                    <input 
                                        type="file" 
                                        className="form-control" 
                                        id="profilePicture" 
                                        disabled // Disable file input as it's for display
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="footer-wrapper">
                <footer>
                    <p>&copy; 2024 Culinary Quest. All rights reserved.</p>
                </footer>
            </div>
        </div>
    );
};

export default ProfileSettings;
