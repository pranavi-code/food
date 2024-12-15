import React, { useState } from 'react';
import './ProfileSettings.css';
import backgroundImage from '../images/admin_dashboard.jpeg'; // Import the image
const ProfileSettings = () => {
    const [name, setName] = useState('Admin Name');
    const [email, setEmail] = useState('admin@example.com');
    const [profilePic, setProfilePic] = useState(null);

    const handleProfileSubmit = (e) => {
        e.preventDefault();
        alert('Profile information updated!');
    };

    const handlePasswordSubmit = (e) => {
        e.preventDefault();
        const newPassword = document.getElementById('newPassword').value;
        const confirmNewPassword = document.getElementById('confirmNewPassword').value;
        if (newPassword === confirmNewPassword) {
            alert('Password changed successfully!');
        } else {
            alert('Passwords do not match!');
        }
    };

    const handleLogout = () => {
        sessionStorage.removeItem('authToken');
        localStorage.removeItem('authToken');
        window.location.href = '/'; // Replace with your actual landing page URL
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
                            <li className="nav-item"><a className="nav-link" href="/categoryManagement">Category Management</a></li>
                            <li className="nav-item"><a className="nav-link" href="/userManagement">Manage Users</a></li>
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
                        <form onSubmit={handleProfileSubmit} id="profileForm">
                            <div className="row mb-3">
                                <div className="col-md-4">
                                    <img src="../images/profile-pic.jpeg" alt="Profile Picture" className="profile-settings-img" />
                                </div>
                                <div className="col-md-8">
                                    <div className="mb-3">
                                        <label htmlFor="name" className="form-label">Name</label>
                                        <input type="text" className="form-control" id="name" value={name} onChange={(e) => setName(e.target.value)} placeholder='Enter your name' />
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="email" className="form-label">Email</label>
                                        <input type="email" className="form-control" id="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder='Enter your Email' />
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="profilePicture" className="form-label">Profile Picture</label>
                                        <input type="file" className="form-control" id="profilePicture" onChange={(e) => setProfilePic(e.target.files[0])} />
                                    </div>
                                    <button type="submit" className="btn btn-save">Save Changes</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>

                <div className="card">
                    <div className="card-header">Change Password</div>
                    <div className="card-body">
                        <form onSubmit={handlePasswordSubmit} id="passwordForm">
                            <div className="mb-3">
                                <label htmlFor="currentPassword" className="form-label">Current Password</label>
                                <input type="password" className="form-control" id="currentPassword" required placeholder='Enter your current password' />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="newPassword" className="form-label">New Password</label>
                                <input type="password" className="form-control" id="newPassword" required placeholder='Enter your new password' />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="confirmNewPassword" className="form-label">Confirm New Password</label>
                                <input type="password" className="form-control" id="confirmNewPassword" required  placeholder='Confrim your new password'/>
                            </div>
                            <button type="submit" className="btn btn-save">Change Password</button>
                        </form>
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
