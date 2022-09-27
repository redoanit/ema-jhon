import React from 'react';
import logo from '../../images/Logo.svg'
import './Header.css'
const Header = () => {
    return (
        <div>
            <nav className='header'>
                <img src={logo} alt="" />
                <div >
                    <a href="">Home</a>
                    <a href="">Shop</a>
                    <a href="">Product</a>
                    <a href="">Cart</a>
                </div>
            </nav>
        </div>
    );
};

export default Header;