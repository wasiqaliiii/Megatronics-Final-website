import React from 'react'
import { Link } from 'react-router-dom'
import './Footer.css'
const Footer = () => {
  return (
    <div className='footerContainer'>
      <div className='newsLetterDiv'>
        <div className='newsLetter'>
          <h2>Newsletter</h2>
          <p>Be the first one to know about updates and newly launched products.</p>
        </div>
        <div className='subscribe'>
          <input type='text' name='' id='' />
          <button>Subscribe</button>
        </div>
      </div>
      <div className='footerMainSection'>
        <div className='diners'>
          <h1>Megatronics Engineering</h1>
          <p>
          Megatronics Engineering is a professional supplier of industrial Machines Material & Equipment. MEGATRONICS ENGINEERING was established in October 2002 with the AIM to “Provide better technology and services at the door step of the local industry and as well as neighboring countries like Afghanistan industrial Sectors”.
          </p>
          <div className='footerIcons'>
            <i className='fa-brands fa-facebook-f'></i>
            <i className='fa-brands fa-instagram'></i>
            <i className='fa-brands fa-youtube'></i>
            <i className='fa-brands fa-twitter'></i>
          </div>
        </div>
        <div className='about'>
        <h3>Helpful Links</h3>
         <Link to={'/aboutUs'}>About Us</Link>
          <Link to={'contactUS'}>Contact Us</Link>
          <Link to={'services'}>Services</Link>
        </div>
        <div className='help'>
        <h3>Help</h3>
          <Link>Terms & Condition</Link>
          <Link>Privacy Policy</Link>
        </div>
        <div className='myAccount'>
        <h3>Contact Info</h3>
          <p>31-A, Kacha Ferozepur Road, Behind Sanam Arcade, Mozang, Lahore.</p>
          <p>+92 334-4228890</p>
          <p>info@megatronics.com.pk</p>
        </div>
      </div>
      <hr />
      <div className='footerCopy'>
        <p>
          © 2024 Megatronics Engineering. All Rights Reserved. Design & Developed By Wasiq Ali
        </p>
        <div className='footerCards'>
          <i className='fa-brands fa-cc-visa'></i>
          <i className='fa-brands fa-cc-mastercard'></i>
        </div>
      </div>
    </div>
  )
}

export default Footer
