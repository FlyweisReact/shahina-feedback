/** @format */

import React from "react";
import img from "../../assest/download.png";

const ContactUs = () => {
  const Mail = () => {
    const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=info@shahinahoja.com`;
    window.location.href = gmailUrl;
  };
  return (
    <div className="terms-container">
      <div className="terms-container_logo">
        <img src={img} alt="Logo" />
      </div>
      <h1>Shahina Med Spa Contact Us</h1>
      <div className="terms-content">
        <p>
          Thank you for using our app! If you have any questions, concerns, or
          requests regarding your data or account, feel free to reach out to us.
        </p>
        <p>
          If you wish to delete your data or have any related inquiries, please
          contact us at:
        </p>
        <p>
          <strong>
            📧 Email:{" "}
            <span
              onClick={() => Mail()}
              style={{ color: "blue", cursor: "pointer" }}
            >
              info@shahinahoja.com
            </span>
          </strong>
        </p>
        <p>We aim to respond to all requests within 24-48 hours.</p>
        <p>
          Your feedback is valuable to us, and we’re here to ensure you have the
          best experience with our app.
        </p>
      </div>
    </div>
  );
};

export default ContactUs;
