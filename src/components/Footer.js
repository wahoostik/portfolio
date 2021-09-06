// == Import
import { NavLink } from 'react-router-dom';

// == Composant
const Footer = () => (
    <div className='footer'>
        <nav className="link__top-nav">
            <NavLink
                to="/"
                className="container">
                <div className="brand-logo-linkedin"></div>
            </NavLink>
            <NavLink
                to="/"
                className="container">
                <div className="brand-logo-github"></div>
            </NavLink>
        </nav>
    </div>
);

// == Export
export default Footer;
