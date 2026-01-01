import React from 'react';

const ContactMap = () => {
  return (
    <div className="contact-map heading">
      <h2>Find Us</h2>
      <iframe
        title="Megatronics Main Branch"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3400.340139728615!2d74.30674464443085!3d31.542278595672293!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3919035f52ba198d%3A0xad5e7c8d98b2abbe!2s31%20Link%20Ferozepur%20Rd%2C%20Rasool%20Park%20Lahore%2C%20Punjab%2054500%2C%20Pakistan!5e0!3m2!1sen!2s!4v1693291598448!5m2!1sen!2s"
        width="100%"
        height="400"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
      ></iframe>
    </div>
  );
};

export default ContactMap;
