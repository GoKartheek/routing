import React from 'react';
import './style.css';
import {Link} from 'react-router-dom';

const Header = () => (
    <ul className="header">
        <li>
           <Link to="/">Home</Link>
        </li>

        <li>
            <Link to="/contact">Contact</Link>
        </li>

        <li>
            <Link to="/about">Home</Link>
        </li>

        <li>
            <Link to="/t-shirts">T-Shirts</Link>
        </li>
    </ul>
)

export default Header;