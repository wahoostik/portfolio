/* eslint-disable no-unused-vars */
/* eslint-disable react/no-unescaped-entities */
// == Import
import { useState } from 'react';
import Navigation from '../components/Navigation';
// import { init } from 'emailjs-com';
// init('user_jtL8xoweJfShhsv6mdYTw');


// == Composant
const Contact = () => {
    const [name, setName] = useState('');
    const [company, setCompany] = useState('');
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const myTemplate = 'template_w77z5mv';
    const myServiceID = 'service_252ur2l';

    const isEmail = () => {
        let mail = document.querySelector('.not-mail');
        let regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

        if (email.match(regex)) {
            mail.style.display = 'none'; // Si jamais il est OK, il diaparaît. Ensuite il retourne True.
            return true;
        } else {
            mail.style.display = 'block';
            mail.style.animation = 'dongle 1s';
            // On retire le 'dongle' au bout d'une seconde. Comme ça, si l'utilisateur se retrompe d'email,
            // le message d'erreur refera un effet 'dongle'
            setTimeout(() => {
                mail.style.animation = 'none';
            }, 1000);
            return false;
        }
    };

    const failMessage = (message) => {
        let formMess = document.querySelector('.contact__form-message');

        formMess.innerHTML = 'Merci de remplir correctement les champs requis *';
        formMess.style.opacity = 1;
        formMess.style.background = 'rgb(253, 87, 87)';
        formMess.style.animation = 'dongle 1s';
        setTimeout(() => {
            formMess.style.animation = 'none';
        }, 1000);

        document.getElementById('name').classList.add('error');
        document.getElementById('email').classList.add('error');
        document.getElementById('message').classList.add('error');
    };

    const successMessage = () => {
        let formMess = document.querySelector('.contact__form-message');

        formMess.innerHTML = 'Message envoyé !<br>Je vous contecterais dès que possible';
        formMess.style.opacity = 1;
        formMess.style.lineHeight = '1.5rem';
        formMess.style.background = '#0e8a03';
        formMess.style.transition = '0.5s ease';

        document.getElementById('name').classList.remove('error');
        document.getElementById('email').classList.remove('error');
        document.getElementById('message').classList.remove('error');

        setTimeout(() => {
            formMess.style.opacity = '0';
        }, 400);
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        if (name && isEmail() && message) {
            sendFeedback(myTemplate, {
            // name (le name du template d'emailJS): name (le name de useState),
                name,
                // company: company,
                company,
                // phone: phone,
                phone,
                // email: email,
                email,
                // message: message,
                message,
            });
        } else {
            console.log('error');
            failMessage(true);
        }
    };

    const sendFeedback = (templateId, variables) => {
        window.emailjs
            .send(myServiceID, templateId, variables)
            .then((result) => {
                console.log(result);
                console.log('success !');
                successMessage();
                setName('');
                setCompany('');
                setPhone('');
                setEmail('');
                setMessage('');
            })
            .catch((error) => {
                failMessage('Une erreur s\'est produite, veuillez réessayer.');
            }
            );
    };
    
    return (
        <div className='contact'>
            <Navigation />
            <h1 className="contact__title">ENTRONS EN CONTACT</h1>
            <h2 className="contact__subtitle">Pour discuter ou pour travailler ensemble, n'hésitez pas à me contacter.</h2>
            <form className="contact__form">
                <div className="contact__form-content">
                    <label className="contact__label">Nom et prénom</label>
                    <input
                        className="contact__form-input"
                        type="text"
                        id="name"
                        name="name"
                        onChange={(event) => setName(event.target.value)}
                        placeholder="Votre nom et prénom *"
                        value={name}
                        autoComplete="off"
                    />
                    <label className="contact__label">Société</label>
                    <input
                        className="contact__form-input"
                        type="text"
                        id="company"
                        name="company"
                        onChange={(event) => setCompany(event.target.value)}
                        placeholder="Votre Société"
                        value={company}
                    />
                    <label className="contact__label">Téléphone</label>
                    <input
                        className="contact__form-input"
                        type="text"
                        id="phone"
                        name="phone"
                        onChange={(event) => setPhone(event.target.value)}
                        placeholder="Votre Téléphone"
                        value={phone}
                    />
                    <label className="contact__label">Email</label>
                    <div className="contact__email-content">
                        <input
                            className="contact__form-input"
                            type="mail"
                            id="email"
                            name="email"
                            onChange={(event) => setEmail(event.target.value)}
                            placeholder="Votre Email *"
                            value={email}
                            autoComplete="off"
                        />
                        <label className="not-mail">Email non valide</label>
                    </div>
                    <label className="contact__label">Message</label>
                    <textarea
                        className="contact__form-input-message"
                        id="message"
                        name="message"
                        onChange={(event) => setMessage(event.target.value)}
                        placeholder="Votre Message *"
                        value={message}
                    />
                </div>
                <input
                    className="contact__button"
                    type="button"
                    value="Envoyer"
                    onClick={handleSubmit}
                />
                <div className="contact__form-message"></div>
            </form>
            
            <h4 className="contact__talk">Entrons en contact</h4>
            <h5 className="contact__talk">anthony.paccaud@orange.fr</h5>
            <h5 className="contact__talk">06 71 03 79 42</h5>
        </div>
    );};

// == Export
export default Contact;
