import React from 'react';
import logo from '../../images/logo.png';
import './Heder.css'

const Heder = () => {
    return (
        <div className='heder'>
            <img src={logo} alt="" />
            <nav>
            <a href="/shop">Shop</a>
            <a href="/review">Review</a>
            <a href="/manage">Manage Inventory</a>
        </nav>
        </div>
       
    );
};



export default Heder;