/* eslint-disable react/no-unescaped-entities */
// == Import
import Navigation from '../components/Navigation';

// == Data
import Experience from '../assets/dataExperience';
import Training from '../assets/dataTraining';

// == Composant
const About = () => (
    <div className='about'>
        <Navigation />
        <h2>Télécharger mon CV</h2>
        <h2>Je suis développeur web reconverti</h2>
        <p>Je continue d'apprendre au quotidien en pratiquant ce que j'aime le plus : la programmation.</p>
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
);

// == Export
export default About;
