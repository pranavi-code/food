import React from 'react';
import './TermsAndConditions.css';

const TermsAndConditions = () => {
    return (
        <div>
            {/* Navbar */}
            <nav className="terms-navbar">
                <div className="container-fluid">
                    <a className="terms-navbar-brand" href="#">Culinary Quest</a>
                </div>
            </nav>

            {/* Header Section */}
            <header className="terms-header">
                <h1>Terms and Conditions</h1>
            </header>

            {/* Content Section */}
            <section className="terms-content">
                <h2>Introduction</h2>
                <p>Welcome to Culinary Quest! By accessing or using our website, you agree to comply with and be bound by the following terms and conditions. If you disagree with any part of these terms, please do not use our website.</p>

                <h2>Use of the Website</h2>
                <p>You agree to use the website for lawful purposes only. Prohibited activities include, but are not limited to:</p>
                <ul>
                    <li>Engaging in fraudulent activities.</li>
                    <li>Posting or sharing harmful or offensive content.</li>
                    <li>Attempting to breach the security of the website.</li>
                </ul>

                <h2>Intellectual Property</h2>
                <p>All content, including recipes, images, and design elements, is the property of Culinary Quest unless otherwise stated. You may not reproduce, distribute, or use any content without prior permission.</p>

                <h2>Third-Party Links</h2>
                <p>Our website may contain links to third-party websites. These links are provided for your convenience, and we are not responsible for the content or practices of these external websites.</p>

                <h2>Limitation of Liability</h2>
                <p>Culinary Quest is not liable for any damages arising from the use or inability to use our website, including but not limited to direct, indirect, or consequential damages.</p>

                <h2>Changes to the Terms</h2>
                <p>We reserve the right to update these terms and conditions at any time. Changes will be effective immediately upon posting on this page. We encourage users to review this page regularly to stay informed.</p>

                <h2>Contact Us</h2>
                <p>If you have any questions about these terms and conditions, please contact us at <a href="mailto:support@culinaryquest.com">support@culinaryquest.com</a>.</p>
            </section>

            {/* Footer */}
            <footer className="terms-footer">
                <p>&copy; 2024 Culinary Quest. All rights reserved.</p>
            </footer>
        </div>
    );
};

export default TermsAndConditions;
