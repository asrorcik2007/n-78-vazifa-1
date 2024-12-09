
import React from "react";
import './Navbar.css';

function Navbar() {
    return (
        <nav className="navbar">
            <ul className="nav-links">
                <li><a href="#about">О нашей школе</a></li>
                <li><a href="#advantages">Преимущества</a></li>
                <li><a href="#classes">Классы</a></li>
                <li><a href="#contacts">Контакты</a></li>
            </ul>
            <button className="contact-btn">Связаться с нами</button>
        </nav>
    );
}

export default Navbar;
