import React, { useState } from 'react'
import LoginUI from './loginComponents/LoginUI'
import SignupUI from './loginComponents/SignupUI'
import Logo from '../../images/Megatronics Logo final 2 300px.png';
import { Link } from 'react-router-dom'
const LoginComp = ({ activeLoginFunc }) => {
  const [activeState, setActiveState] = useState(false)
  const activeStateFunc = ()=>{ 
    setActiveState(!activeState)
  }
  return (
    <div>
      <div className='CartCrossIcon'>
        <i onClick={activeLoginFunc} className='fas fa-xmark'></i>
      </div>
      <div className='loginLogo text-center'> 
        <Link to={'/'}>
        <img className='loginlogoimg'
          src={Logo}
          alt=''
          width={100}
          height={100}
        />
        </Link>
        
      </div>
      {!activeState && (
        <div className='loginComponent'>
          <LoginUI  activeStateFunc={activeStateFunc}/>
        </div>
      )}
      {activeState && (
        <div className='SignUpComponent'>
          <SignupUI activeStateFunc={activeStateFunc} />
        </div>
      )}
    </div>
  )
}

export default LoginComp
