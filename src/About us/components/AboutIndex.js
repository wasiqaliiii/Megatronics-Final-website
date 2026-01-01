import AboutInfo from './AboutInfo';
import AboutImage from './AboutImage';
import AboutMission from './AboutMission';
import React from 'react'
import "./about.css"

const AboutIndex = () => {
  return (
    <div>
       <AboutImage />
      <AboutInfo />
      <AboutMission />
    </div>
  )
}

export default AboutIndex

