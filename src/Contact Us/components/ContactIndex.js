import React from 'react';
import ContactInfo from './ContactInfo';
import ContactMap from './ContactMap';
import ContactForm from './Contactform';
import './index.css';
import ContactBanner from './ContactBanner';

const ContactComp = () => {
  return (
    <>
    <ContactBanner/>
      <ContactInfo/>
      <ContactMap />
      <ContactForm />
    </>
  );
};

export default ContactComp;
