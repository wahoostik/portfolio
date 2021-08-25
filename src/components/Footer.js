// == Import
import { Link } from 'react-router-dom';

// == Composant
const Footer = () => (
    <div className='footer'>
        <nav className="footer__top-nav">
            <Link
                to="/"
                className="container">
                <div className="brand-logo-linkedin"></div>
            </Link>
            <Link
                to="/"
                className="container">
                <div className="brand-logo-github"></div>
            </Link>
        </nav>
    </div>
);

// == Export
export default Footer;
