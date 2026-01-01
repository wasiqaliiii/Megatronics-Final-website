import React from 'react';
import NavbarComp from '../../Global/navbar';
import ContactComp from '../components/ContactIndex';

const ContactUs = () => {
  return (
    <>
      <NavbarComp />
      <div className="contact-page">
        <ContactComp />
      </div>
    </>
  );
};

export default ContactUs;
