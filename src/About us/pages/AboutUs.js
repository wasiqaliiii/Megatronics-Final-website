import React from 'react';
import NavbarComp from '../../Global/navbar';
import AboutIndex from '../components/AboutIndex';

const AboutUs = () => {
  return (
    <>
    <NavbarComp />
    <div className="about-container">
      <AboutIndex/>
    </div>
    </>
  );
};

export default AboutUs;
