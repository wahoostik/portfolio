// == Import
import { Link, NavLink } from 'react-router-dom';

// == Composant
const Header = () => (
    <div className='header'>
        <Link
            to="/"
            className="logo">
        </Link>
        <nav className="header__nav">
            <NavLink
                to="/"
                className="header__top-nav-link">
            Accueil
            </NavLink>
            <NavLink
                to="/a-propos"
                className="header__top-nav-link">
                A propos
            </NavLink>
            <NavLink
                to="/projets"
                className="header__top-nav-link">
                Projets
            </NavLink>
            <NavLink
                to="/contact"
                className="header__top-nav-link">
                Contact
            </NavLink>
        </nav>
    </div>
);

// == Export
export default Header;
