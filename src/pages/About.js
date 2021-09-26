/* eslint-disable react/no-unescaped-entities */
// == Import
import Navigation from '../components/Navigation';

// == Data
import Experience from '../assets/dataExperience';
import Training from '../assets/dataTraining';
import Face from '../assets/VisageCV.jpg';
import { Link } from 'react-router-dom';
import CV from '../assets/CV-AP-2021-Dev.pdf';
import { FaReact, FaNodeJs } from 'react-icons/fa';
import { SiRedux, SiJavascript, SiPostgresql, SiAdobeindesign, SiAdobeillustrator, SiAdobephotoshop } from 'react-icons/si';
import { RiHtml5Fill } from 'react-icons/ri';
import { DiCss3, DiSass } from 'react-icons/di';

// == Composant
const About = () => (
    <div className='about'>
        <Navigation />
        <div className='about__container'>
            <section className='about__presentation'>
                <div className='presentation'>
                    <h2 className='presentation-title'>Qui suis-je ?</h2>
                    <p className='presentation-a-propos'>Après une carrière d'infographiste, j'ai opté pour une reconversion vers le métier de développeur web. J'ai choisi l'école O'clock pour me former au métier de développeur, option Fullstack JavaScript. 6 mois de formation intensive, plus de 700 heures de cours en JavaScript et Node.js, un mois de spécialisation React/API Data et un mois de projet en équipe pour présenter une application web complète et fonctionnelle.</p>
                    <p className='presentation-a-propos'>Toutes mes formations combinées avec mes passions pour l’informatique<br/>et le digital m’ont permis d’acquérir des connaissances techniques et pratiques, créatives, ainsi qu’une expérience professionnelle dans le secteur<br/>des industries graphiques.</p>
                    <p className='presentation-a-propos'>Je continue de m'instruire au quotidien en pratiquant cette nouvelle passion.</p>
                    <p className='presentation-a-propos-bigger'>Me voilà maintenant développeur Fullstack JavaScript, avec le désir de continuer à apprendre et réaliser de nombreux projets !</p>
                    <Link to={CV} target='_blank'>
                        <button type="button" className='presentation-a-propos-cv'>Voir mon CV</button>
                    </Link>
                </div>
                <div className='presentation-picture'>
                    <img src={Face} alt="Anthony Paccaud" className="presentation__face" />
                </div>
            </section>
            <section className='about__cv'>
                <h2 className='about__cv-title'>Compétences</h2>
                <div className="about__cv-column-skills">
                    <div>
                        <p><FaReact /> React</p>
                        <p><SiRedux /> Redux</p>
                        <p><SiJavascript /> JavaScript</p>
                        <p><RiHtml5Fill /> HTML</p>
                    </div>
                    <div>
                        <p><DiCss3 /> CSS</p>
                        <p><DiSass /> SASS</p>
                        <p><FaNodeJs /> Node.js</p>
                        <p><span>ex</span> Express</p>
                    </div>
                    <div>
                        <p><SiPostgresql /> PostgreSQL</p>
                        <p><SiAdobeillustrator /> Illustrator</p>
                        <p><SiAdobeindesign /> InDesign</p>
                        <p><SiAdobephotoshop /> Photoshop</p>
                    </div>
                </div>
            </section>
            <div className='experience__container'>
                <h2 className='experience__container-title'>Expérience</h2>
                <div className='experience__container-cards'>
                    {Experience.map((dataExp) => (
                        <div className='experience' key={dataExp.id}>
                            <h3 className='experience__title'>{dataExp.title}</h3>
                            <h4 className='experience__content'>{dataExp.content}</h4>
                            <h5 className='experience__dated'>{dataExp.dated}</h5>
                            <p className='experience__details'>{dataExp.details}</p>
                        </div>
                    ))}
                </div>
            </div>
            <div className='training__container'>
                <h2 className='training__container-title'>Formation</h2>
                <div className='training__container-cards'>
                    {Training.map((dataTraining) => (
                        <div className='training' key={dataTraining.id}>
                            <h3 className='training__title'>{dataTraining.title}</h3>
                            <h4 className='training__content'>{dataTraining.content}</h4>
                            <h5 className='training__dated'>{dataTraining.dated}</h5>
                            <p className='training__details'>{dataTraining.details}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    </div>
);

// == Export
export default About;
