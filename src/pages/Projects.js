// == Import
import Navigation from '../components/Navigation';
import { Link } from 'react-router-dom';

// == Data
import Data from '../assets/dataProjects';

// == Composant
const Projects = () => (
    <div className='projects'>
        <Navigation />
        <div className='projects__container'>
            <h2 className="projects__title">MES PROJETS</h2>
            <div className="projects__data">
                {Data.map((data) => (
                    <Link
                        to={{ pathname: `${data.slug}` }}
                        target="_blank"
                        key={data.id}>
                        <div className="projects__details">
                            <img src={data.img} alt={data.title} className="projects__details-img" />
                            <h4 className="projects__details-title">{data.title}</h4>
                            <span className="projects__details-content">{data.content}</span>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    </div>
);

// == Export
export default Projects;