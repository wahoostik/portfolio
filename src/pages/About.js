/* eslint-disable react/no-unescaped-entities */
// == Import
import Navigation from '../components/Navigation';

// == Data
import Experience from '../assets/dataExperience';
import Training from '../assets/dataTraining';
import Face from '../assets/VisageCV.jpg';
import { Link } from 'react-router-dom';
import CV from '../assets/CV-AP-2021.pdf';

// == Composant
const About = () => (
    <div className='about'>
        <Navigation />
        <div className='about__container'>
            <section className='about__presentation'>
                <div className='presentation'>
                    <h2 className='presentation-title'>Qui suis-je ?</h2>
                    <p className='presentation-a-propos'>Je suis développeur web reconverti par passion.</p>
                    <p className='presentation-a-propos'>Je continue d'apprendre au quotidien en pratiquant ce que j'aime le plus :<br/>la programmation.</p>
                    <p className='presentation-a-propos'>Après une carrière d'infographiste, j'ai opté pour une reconversion dans le métier de développeur web. J'ai choisi l'école O'clock pour me former au métier de développeur, option Fullstack JavaScript. 6 mois de formation intensive, plus de 700 heures de cours en JavaScript et Node.js, un mois de spécialisation React/API Data et un mois de projet en équipe pour présenter une application web complète et fonctionnelle.</p>
                    <p className='presentation-a-propos'>Toutes mes formations combinées avec mes passions pour l’informatique<br/>et le digital m’ont permis d’acquérir des connaissances techniques et pratiques, créatives, ainsi qu’une expérience professionnelle dans le secteur<br/>des industries graphiques.</p>
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
                        <p>React</p>
                        <p>Redux</p>
                        <p>JavaScript</p>
                        <p>HTML</p>
                    </div>
                    <div>
                        <p>CSS, SCSS</p>
                        <p>Node.js</p>
                        <p>Express</p>
                        <p>PostgreSQL</p>
                    </div>
                    <div>
                        <p>Illustrator</p>
                        <p>InDesign</p>
                        <p>Photoshop</p>
                        <p>XPress</p>
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
                            <h4 className='traning__content'>{dataTraining.content}</h4>
                            <h5 className='traning__dated'>{dataTraining.dated}</h5>
                            <p className='traning__details'>{dataTraining.details}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    </div>
);

// == Export
export default About;
