import React from 'react';
import { useParams } from 'react-router-dom';
import MHome from '../men/pages/MHome';
import Services from '../Services/Pages/Services';
import ContactUs from '../Contact Us/Pages/ContactUs';
import AboutUs from '../About us/pages/AboutUs';

const MainComponent = () => {
  const { collection } = useParams();

  return (
    <>
      {collection === 'men' && <MHome />}
      {collection === 'services' && <Services />}
      {collection === 'contactUS' && <ContactUs />}
      {collection === 'aboutUs' && <AboutUs />}
    </>
  );
};

export default MainComponent;
