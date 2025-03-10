import React from "react";
import './Styles/Header.css'
import logo from './Images/logo.jpg'
import { FaRegUser } from "react-icons/fa";

import { BrowserRouter as Router, Link } from 'react-router-dom';

const Header = () => {
    return (
        <div className="header">
            <Link to='/'><img src={logo} alt="logo" /></Link>
            <div className="links">
                <ul>
                    <Link to="/"><li>Головна</li></Link>
                    <Link to="/contacts"><li>Контакти</li></Link>
                    <Link to="/ask-question"><li>Задати питання</li></Link>
                    <Link to="/about"><li>Про нас</li></Link>
                </ul>
            </div>
            <div className="user-btn-container">
                <FaRegUser className="user-btn"/>
            </div>
        </div>
    )
}

export default Header;