// == Import
import { Link } from 'react-router-dom';

// == Composant
const Header = () => (
    <div className='header'>
        <nav className="header__top-nav">
            <Link
                to="/"
                className="header__top-nav-link">
            Accueil
            </Link>
            <Link
                to="/"
                className="header__top-nav-link">
                A propos
            </Link>
            <Link
                to="/projets"
                className="header__top-nav-link">
                Projets
            </Link>
            <Link
                to="/contact"
                className="header__top-nav-link">
                Contact
            </Link>
        </nav>
    </div>
);

// == Export
export default Header;
