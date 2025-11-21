import React from "react";
import "../styles/PrivacyPage.css";

const PrivacyPage = () => {
  return (
    <div className="privacy-page">

      {/* 1️⃣ Hero Banner / Header */}
      <section className="privacy-hero">
        <div className="overlay">
          <h1>Privacy Policy</h1>
          <p>Your privacy is important to us. Here’s how we handle your information.</p>
        </div>
      </section>

      {/* 2️⃣ Introduction */}
      <section className="privacy-section">
        <h2>Introduction</h2>
        <p>
          This Privacy Policy explains how we collect, use, and protect your personal
          information when you use our website. We are committed to safeguarding your
          privacy and ensuring transparency in how your data is handled.
        </p>
      </section>

      {/* 3️⃣ Information We Collect */}
      <section className="privacy-section">
        <h2>Information We Collect</h2>
        <ul>
          <li>Name, email, and contact details (via forms)</li>
          <li>Cookies and analytics (Google Analytics, etc.)</li>
          <li>Usage data (pages visited, time spent, etc.)</li>
        </ul>
      </section>

      {/* 4️⃣ How We Use Your Information */}
      <section className="privacy-section">
        <h2>How We Use Your Information</h2>
        <ul>
          <li>To improve user experience and website performance</li>
          <li>To send newsletters, updates, or promotional content</li>
          <li>To process bookings, payments, or subscriptions</li>
          <li>To respond to inquiries and provide customer support</li>
        </ul>
      </section>

      {/* 5️⃣ Data Protection */}
      <section className="privacy-section">
        <h2>Data Protection</h2>
        <p>
          We use secure servers and SSL encryption to protect your data. Only authorized
          personnel have access to your personal information, ensuring maximum protection
          against unauthorized access or disclosure.
        </p>
      </section>

      {/* 6️⃣ Cookies Policy */}
      <section className="privacy-section">
        <h2>Cookies Policy</h2>
        <p>
          We use cookies to enhance your browsing experience and analyze website traffic.
          You can disable cookies in your browser settings if you prefer. However, doing
          so may limit certain website functionalities.
        </p>
      </section>

      {/* 7️⃣ Third-Party Services */}
      <section className="privacy-section">
        <h2>Third-Party Services</h2>
        <p>
          Our website may contain links to third-party services such as Razorpay,
          Google Analytics, or social media platforms. We are not responsible for their
          privacy practices, and we encourage you to review their policies.
        </p>
      </section>

      {/* 8️⃣ Your Rights */}
      <section className="privacy-section">
        <h2>Your Rights</h2>
        <ul>
          <li>You can request access, correction, or deletion of your data.</li>
          <li>You can unsubscribe from our newsletters anytime.</li>
          <li>You have the right to know how your personal data is used and stored.</li>
        </ul>
      </section>

      {/* 9️⃣ Updates to This Policy */}
      <section className="privacy-section">
        <h2>Updates to This Policy</h2>
        <p>
          We may update this Privacy Policy periodically to reflect changes in our
          practices or for legal reasons. Any updates will be posted on this page with
          a revised date.
        </p>
        <p className="last-updated">Last updated: November 2025</p>
      </section>

      {/* 🔟 Contact Section */}
      {/* <section className="privacy-section contact">
        <h2>Contact Us</h2>
        <p>
          If you have any questions about this Privacy Policy, please contact us at:
          <br />
          <strong>support@yourwebsite.com</strong>
        </p>
      </section> */}
    </div>
  );
};

export default PrivacyPage;
