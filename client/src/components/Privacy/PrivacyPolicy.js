import React from "react";
import "./PrivacyPolicy.css";

const PrivacyPolicy = () => {
  return (
    <div>
      {/* Navbar */}
      <nav className="privacy-navbar">
        <div className="container-fluid">
          <a className="privacy-navbar-brand" href="#">
            Culinary Quest
          </a>
        </div>
      </nav>

      {/* Header Section */}
      <header className="privacy-header">
        <h1>Privacy Policy</h1>
      </header>

      {/* Content Section */}
      <section className="privacy-content">
        <h2>Introduction</h2>
        <p>
          At Culinary Quest, we are committed to protecting your privacy. This
          Privacy Policy outlines how we collect, use, and safeguard your
          personal information.
        </p>

        <h2>Information We Collect</h2>
        <p>We may collect the following types of information:</p>
        <ul>
          <li>
            <strong>Personal Information:</strong> Name, email address, and
            contact details when you sign up or contact us.
          </li>
          <li>
            <strong>Usage Data:</strong> Information about how you interact
            with our website, such as pages visited, time spent, and device
            details.
          </li>
          <li>
            <strong>Cookies:</strong> Data stored in your browser to enhance
            your experience.
          </li>
        </ul>

        <h2>How We Use Your Information</h2>
        <p>We use the information we collect for the following purposes:</p>
        <ul>
          <li>To provide and improve our services.</li>
          <li>To respond to your inquiries and support requests.</li>
          <li>To personalize your experience on our website.</li>
          <li>
            To send updates, promotions, and other relevant communications (if
            you opt-in).
          </li>
        </ul>

        <h2>How We Protect Your Information</h2>
        <p>
          We implement appropriate technical and organizational measures to
          ensure the security of your data. However, no method of transmission
          over the internet is 100% secure, and we cannot guarantee absolute
          security.
        </p>

        <h2>Sharing Your Information</h2>
        <p>
          We do not sell or rent your personal information to third parties.
          However, we may share your data with trusted third-party services to
          help us operate our website and provide services, subject to
          confidentiality agreements.
        </p>

        <h2>Your Rights</h2>
        <p>You have the right to:</p>
        <ul>
          <li>Access, update, or delete your personal information.</li>
          <li>Opt-out of marketing communications.</li>
          <li>Withdraw your consent where processing is based on consent.</li>
        </ul>

        <h2>Third-Party Links</h2>
        <p>
          Our website may contain links to external websites. We are not
          responsible for their privacy practices, and we encourage you to
          review their privacy policies.
        </p>

        <h2>Changes to This Policy</h2>
        <p>
          We may update this Privacy Policy from time to time. Changes will be
          effective upon posting, and we encourage you to review this page
          periodically.
        </p>

        <h2>Contact Us</h2>
        <p>
          If you have any questions about this Privacy Policy, please contact us
          at{" "}
          <a href="mailto:privacy@culinaryquest.com">privacy@culinaryquest.com</a>.
        </p>
      </section>

      {/* Footer */}
      <footer className="privacy-footer">
        <p>&copy; 2024 Culinary Quest. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default PrivacyPolicy;
