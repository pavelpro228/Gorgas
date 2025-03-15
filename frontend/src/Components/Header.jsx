import React, { useState } from "react";
import './Styles/Header.css'
import logo from './Images/logo.jpg'
import { FaRegUser } from "react-icons/fa";

import { BrowserRouter as Router, Link } from 'react-router-dom';

const Header = () => {
    const [isOpened, setIsOpened] = useState(false);

    const openUserSettings = () => {
        setIsOpened(isOpened => !isOpened)
    }
    const leave = () => {
        if (localStorage.getItem('registered-user')) localStorage.removeItem('registered-user');
        if (localStorage.getItem('logged-user')) localStorage.removeItem('logged-user');
        alert("Ви вийшли з акаунту!");
    }
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
                    <FaRegUser onClick={openUserSettings} className="user-btn"/>
                    {isOpened && <ul className="user-btn-settings">
                        {localStorage.getItem('registered-user') || localStorage.getItem('logged-user') ?
                            <Link to="/authorization"><li onClick={openUserSettings}>Змінити акаунт</li></Link>
                        :
                            <Link to="/authorization"><li onClick={openUserSettings}>Авторизація</li></Link>
                        }
                        <Link to="/"><li onClick={openUserSettings}>Головна</li></Link>
                        <Link to="/contacts"><li onClick={openUserSettings}>Контакти</li></Link>
                        <Link to="/ask-question"><li onClick={openUserSettings}>Задати питання</li></Link>
                        <Link to="/about"><li onClick={openUserSettings}>Про нас</li></Link>
                        {localStorage.getItem('registered-user') || localStorage.getItem('logged-user') ? 
                            <li onClick={() => {
                            openUserSettings();
                            leave();
                        }}>Вийти</li>
                        : null
                        }
                    </ul>}
                </div>
        </div>
    )
}

export default Header;