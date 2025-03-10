import React from "react";
import './Styles/Footer.css'
import { FaFacebook } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";

const Footer = () => (
    <div className="footer">
        <div style={{width: "50%", display: "flex", justifyContent: "center", alignItems: "center"}}>
            <p style={{fontSize: "20px"}}>Всі права захищені ©</p>
        </div>
            <div className="networks">
                <ul>
                    <li><a href="https://www.facebook.com/"><FaFacebook /></a></li>
                    <li><a href="https://www.youtube.com/"><FaYoutube /></a></li>
                    <li><a href="https://x.com/home"><FaSquareXTwitter /></a></li>
                    <li><a href="https://www.instagram.com/"><FaInstagram /></a></li>
                </ul>
            </div>
    </div>
)
        


export default Footer;