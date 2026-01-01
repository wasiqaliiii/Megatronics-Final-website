import React from 'react';

const ContactBanner = () => {
  return (
    <div className="contact-banner-container">
      <img 
        src="https://www.scienalysis.com/wp-content/uploads/2024/03/contact-us.png" 
        alt="Contact Banner" 
        className="contact-banner-image"
      />
      <div className="contact-banner-overlay">
        <h1>Get in Touch with Us</h1>
      </div>
    </div>
  );
};

export default ContactBanner;
