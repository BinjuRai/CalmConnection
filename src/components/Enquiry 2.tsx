import React from 'react';
import './EuquiryForm.css';  // Assuming the CSS file is named ContactForm.css

const EuquiryForm: React.FC = () => {
  return (
    <div className="contact-container">
      <form className="contact-form">
        <h2>Let's Talk</h2>

        <div className="form-group">
          <input type="text" placeholder="Name" />
          <input type="email" placeholder="Email" />
          <input type="text" placeholder="Contact no" />
        </div>

        <div className="form-group">
          <textarea placeholder="Message"></textarea>
        </div>

        <button className="send-button" type="submit">Send</button>

        <p className="contact-info">Call us: <strong>+91-89000000</strong></p>
      </form>
    </div>
  );
};

export default EuquiryForm;
