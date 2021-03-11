import React from 'react';
import logo from '../../Logo/logo.jpg';
import './Header.css';


const Header = () => {
    return (
        <div className="header">            
        <img src={logo} alt=""/>
        <div class="centered"><h1>World Football League(WFL)</h1></div>
        </div>
    );
};

export default Header;