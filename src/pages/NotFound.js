/* eslint-disable react/no-unescaped-entities */
// == Import
import Navigation from '../components/Navigation';

const NotFound = () => (
    <div className="not-found">
        <Navigation />
        <h1 className="not-found__text">Désolé, cette page n'existe pas</h1>
    </div>
);

// == Export
export default NotFound;
