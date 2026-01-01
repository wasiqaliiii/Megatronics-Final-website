import React from 'react';

const ContactInfo = () => {
  return (

      <div className="contact-details">
        <div className="contact-item">
          <h3>Email</h3>
          <p>info.megatronics.engg@gmail.com</p>
          <p>info@megatronics.com.pk</p>
        </div>

        <div className="contact-item">
          <h3>Phone</h3>
          <p>+92 334-4228890</p>
          <p>+92 334-4228891</p>
        </div>

        <div className="contact-item">
          <h3>Head Office</h3>
          <p>123-A, Irfan Street, Allama Iqbal Town, Ghari Shahu, <b>Lahore-Pakistan</b>.</p>
        </div>

        <div className="contact-item">
          <h3>Work Shop</h3>
          <p>31-A, Kacha Ferozepur Road, Behind Sanam Arcade,<b>Lahore-Pakistan</b></p>
        </div>
      </div>

  );
};

export default ContactInfo;
