import React from 'react';
import './Header.css';
import logo from '../../images/logo.png';


const Header = () => {
    return (
        <div className="logo">
            <img src={logo} alt="" />
            <nav>
                <a href="/shop">Shop</a>
                <a href="/order">Order Review</a>
                <a href="inventrory">Manage Inventory here</a>
            </nav>
        </div>
    );
};

export default Header;