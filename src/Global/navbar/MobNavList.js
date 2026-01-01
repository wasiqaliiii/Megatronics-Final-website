import React from 'react'
import { Link, useParams } from 'react-router-dom'
import Logo from '../../images/Megatronics Logo final 2 300px.png';

const MobNavList = ({ activeNavbarFunc }) => {
  
  const { collection } = useParams()
  return (
    <>
      <div className='close-icon'>
        <i onClick={activeNavbarFunc} className='fa-solid fa-xmark'></i>
      </div>
      <div className='mobNavLogoS'>
        <Link to={'/'}>
          <img 
            src={Logo}
            alt=''
          />
        </Link>
      </div>
      <div className='mobMenuTag'>
        <div>
          <Link to={`/`}>
            <span>HOME</span>
          </Link>
        </div>
        <div>
          <Link to={`/aboutUs`}>
            <span>ABOUT US</span>
          </Link>
        </div>
        <div>
          <Link to={`/services`}>
            <span>SERVICES</span>
          </Link>
        </div>
        <div>
          <Link to={``}>
            <span>CONVEYERS</span>
          </Link>
        </div>
      </div>
    </>
  )
}

export default MobNavList
