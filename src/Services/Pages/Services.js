import React from 'react'
import NavbarComp from '../../Global/navbar'
import ServicesComp from '../Components/servicesIndex'

const Services = () => {
  return (
    <>
      <NavbarComp />
      <div className="services-container">
        <ServicesComp />
      </div>
    </>
  )
}

export default Services
