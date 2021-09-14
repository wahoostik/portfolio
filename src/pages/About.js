/* eslint-disable react/no-unescaped-entities */
// == Import
import Navigation from '../components/Navigation';

// == Data
import Experience from '../assets/dataExperience';
import Training from '../assets/dataTraining';
import Face from '../assets/VisageCV.jpg';

// == Composant
const About = () => (
    <div className='about'>
        <Navigation />
        <div className='about__container'>
            <section className='about__presentation'>
                <div className='presentation'>
                    <h2 className='presentation-title'>Qui suis-je ?</h2>
                    <p className='presentation-a-propos'>Je suis développeur web reconverti.</p>
                    <p className='presentation-a-propos'>Je continue d'apprendre au quotidien en pratiquant ce que j'aime le plus :<br/>la programmation.</p>
                    <p className='presentation-a-propos'>Après une carrière d'infographiste, j'ai opté pour une reconversion dans le métier de développeur web. J'ai choisi l'école O'clock afin d'y faire ma formation,<br/>suite à 6 mois intensifs je me lance aujourd'hui dans la recherche de mon premier boulot de développeur web junior !</p>
                    <p className='presentation-a-propos'>Toutes mes formations combinées avec mes passions pour l’informatique<br/>et le digital m’ont permis d’acquérir des connaissances techniques et pratiques, créatives, ainsi qu’une expérience professionnelle dans le secteur<br/>des industries graphiques.</p>
                    <h2>Télécharger mon CV</h2>
                </div>
                <div className='presentation-picture'>
                    <img src={Face} alt="Anthony Paccaud" className="presentation__face" />
                </div>
            </section>
            <h2>Compétences</h2>
            <h2>Outils</h2>
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
