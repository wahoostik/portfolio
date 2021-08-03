// == Import
import React from 'react';
import { Link } from 'react-router-dom';
import './styles.scss';

// == Composant
const Footer = () => (
<div className='footer'>
    <nav className="footer__top-nav">
        <Link
        to="/"
        className="container">
        <div class="brand-logo-linkedin"></div>
        </Link>
        <Link
        to="/"
        className="container">
        <div class="brand-logo-github"></div>
        </Link>
    </nav>
</div>
);

// == Export
export default Footer;
