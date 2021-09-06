/* eslint-disable react/no-unescaped-entities */
// == Import
import Navigation from '../components/Navigation';
import Video from '../components/Video';
import {Link} from 'react-router-dom';

// == Composant
const Home = () => (
    <div className='home'>
        <Navigation />
        <Video />
        <h1 className='home-title'>ANTHONY PACCAUD</h1>
        <h2 className='home-subtitle'>Développeur web fullstack Javascript</h2>
        <h3 className='home-techno'>['Node.js', 'React', 'PostgreSQL']</h3>
        <nav className="link__home">
            <Link
                to={{pathname: 'https://www.linkedin.com/in/anthony-paccaud/'}}
                className="container"
                target="_blank">
                <div className="brand-logo-linkedin-home"></div>
            </Link>
            <Link
                to={{pathname: 'https://github.com/wahoostik'}}
                className="container"
                target="_blank">
                <div className="brand-logo-github-home"></div>
            </Link>
        </nav>
    </div>
);

// == Export
export default Home;
