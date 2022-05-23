import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Navigation from '../Navigation';
import menuBurger from '../../assets/images/icon-menu.svg'
import close from '../../assets/images/icon-close.svg'
import brand from '../../assets/images/logo.svg'
import cart from '../../assets/images/icon-cart.svg';
import avatar from '../../assets/images/image-avatar.png';

import { isMenuOpen } from '../../features/menuBtn/toggleMenuBtn';
import { isCartOpen } from '../../features/cartBtns/cartBoxSlice';

const Header = () => {
    const isOpen = useSelector((state) => state.isMenuOpen.value)
    const items= useSelector((state) => state.isCartEmpty.items)
    const dispatch = useDispatch();

    return (
        <header className="header flex">
            <div className="mobile-nav-toggle" onClick={() => dispatch(isMenuOpen())}>
                <img className='menuBurger' src={menuBurger} alt="" />
                <img className={isOpen ? 'menuClose active': 'menuClose'} src={close} alt="" />
            </div>
            <div className='navbar-brand'>
                <img src={brand} alt="sneakers" />
            </div>
            <Navigation />
            <div className="float-end flex">
                <div className="cart" onClick={() => dispatch(isCartOpen())}>
                    <img src={cart} alt="" />
                    <span className={(items === "" ) ? 'cart-indicator' : 'cart-indicator filled'}>{items}</span>
                </div>
                <div className="user">
                    <img src={avatar} alt="" />
                    <div className='shadow'></div>
                </div>
            </div>
        </header>
    );
};

export default Header;