import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import CartComp from './CartComp';
import LoginComp from './LoginComp';
import { useDispatch, useSelector } from 'react-redux';
import { bodyActive } from '../../redux/features/bodySlice';
import Logo from '../../images/Megatronics Logo final 2 300px.png';

const Menu = () => {
  const cartList = useSelector((store) => store.cartSlice.cartList);
  const [activeCart, setActiveCart] = useState(false);
  const [activeLogin, setActiveLogin] = useState(false);
  const dispatch = useDispatch();

  const activeLoginFunc = () => {
    setActiveLogin(!activeLogin);
    dispatch(bodyActive());
  };

  const activeCartFunc = () => {
    setActiveCart(!activeCart);
    dispatch(bodyActive());
  };

  return (
    <div className='navContainer'>
      <div className='navLogo'>
        <Link to={'/'}>
          <img src={Logo} alt='Megatronics Logo' />
        </Link>
      </div>

      <div className='NavLinks'>
        <Link to={`/`}>HOME</Link>
        <Link to={`/aboutUs`}>ABOUT US</Link>
        <Link to={`/services`}>SERVICES</Link>
        <Link to={``}>CONVEYERS</Link>
      </div>

      <div className='navIcons'>
        <i onClick={activeLoginFunc} className='fa-regular fa-user'></i>
        <i onClick={activeCartFunc} className='fa-solid fa-bag-shopping'></i>
        <span className='cartNum'>{cartList.length}</span>
      </div>

      <div className={`loginComp ${activeLogin ? 'activeLogin' : ''}`}>
        <LoginComp activeLoginFunc={activeLoginFunc} />
      </div>

      <div className={`cartComponent ${activeCart ? 'activeCart' : ''}`}>
        <CartComp activeCartFunc={activeCartFunc} />
      </div>
    </div>
  );
};

export default Menu;
