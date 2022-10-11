import React, { useEffect, useState } from 'react';
import ReCAPTCHA from "react-google-recaptcha";

import { ModalContext } from './modal';

const storageKey = 'fa15302a';

function ModalShare() {
    const exampleText = `
Je viens de m’engager à boycotter la Coupe du monde 2022 au Qatar ! 
Mais il faut que l’on soit nombreuses et nombreux pour que les pratiques changent. 
Toi aussi, renseigne-toi et engage-toi en deux clics ici https://boycottqatar2022.fr 
#boycottqatar2022 #Iboycottqatar2022 #HappyBoycott
`;

    return (
        <div>
            <h2>
                Engage ton réseau
            </h2>
            <ul className="share-buttons">
                <li className="">
                    <a target="_blank"
                       rel="noreferrer"
                       data-url="https://boycottqatar2022.fr"
                       className="facebook"
                       href="https://www.facebook.com/sharer.php?u=https://boycottqatar2022.fr">
                        <img src="/facebook.svg" alt="Icon Facebook" />
                    </a>
                </li>
                <li className="">
                    <a target="_blank"
                       rel="noreferrer"
                       data-msg="https://tinyurl.com/yy98z3kr"
                       className="whatsapp"
                       href={`https://api.whatsapp.com/send?text=${exampleText}`}>
                        <img src="/whatsapp.svg" alt="Icon Whatsapp" />
                    </a>
                </li>
                <li className="">
                    <a target="_blank"
                       rel="noreferrer"
                       data-tweet="https://tinyurl.com/yy98z3kr"
                       className="twitter"
                       href={`https://twitter.com/intent/tweet?text=${exampleText}`}>
                        <img src="/twitter.svg" alt="Icon Twitter" />
                    </a>
                </li>
                <li className="">
                    <a target="_blank"
                       rel="noreferrer"
                       data-tweet="https://tinyurl.com/yy98z3kr"
                       className="linkedin"
                       href="https://www.linkedin.com/sharing/share-offsite/?url=https://tinyurl.com/yy98z3kr">
                        <img src="/linkedin.svg" alt="Icon Linkedin" />
                    </a>
                </li>
            </ul>
            <p>
                Voici un exemple de texte à partager&nbsp;:
            </p>
            <textarea
                defaultValue={exampleText}
            >
            </textarea>
        </div>
    );
}

export default function EngageForm() {
    const [counterValue, setCounterValue] = useState(0);
    const [emailValue, setEmailValue] = useState('');
    const [hasPassedRecaptcha, setHasPassedRecaptcha] = useState(false);
    const [hasCounted, setHasCounted] = useState(false);
    const [error, setError] = useState('');
    // @ts-ignore
    const { handleModal } = React.useContext(ModalContext);

    useEffect(() => {
        setHasCounted(window.localStorage.getItem(storageKey) === 'true');
        fetch('/api/count')
            .then((response) => response.json())
            .then(data => setCounterValue(data.count));
    }, []);

    async function handleEngageOne(e) {
        e.preventDefault();

        if (!hasCounted) {
            const data = JSON.stringify({
                email: emailValue
            });
            const endpoint = '/api/engage';
            const response = await fetch(endpoint, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: data,
            })
            const result = await response.json()

            if (result.success) {
                setCounterValue(result.total);
                setHasCounted(true);
                window.localStorage.setItem(storageKey, 'true');
            } else {
                if (result.error === 'wrong_email') {
                    setError('Email non valide');
                }

                if (result.error === 'email_exists') {
                    setHasCounted(true);
                    window.localStorage.setItem(storageKey, 'true');
                }
            }
        }
    }

    return (
        <div className="engage-container">
            {!hasCounted ?
            <div className="vote-container">
                <form className="vote-form" onSubmit={handleEngageOne}>
                    <label htmlFor="email">
                        Je rejoins le boycott&nbsp;:
                    </label>
                    <input
                        className="email"
                        name="email"
                        type="email"
                        required
                        value={emailValue}
                        onChange={e => setEmailValue(e.target.value)}
                        placeholder="monemail@domaine.com"
                    />

                    <div className="recaptcha-container">
                        <ReCAPTCHA
                            theme="dark"
                            sitekey="6Lcs6RkiAAAAAI5hY1-xqqoHs33ph6myyzOXL6-J"
                            onChange={() => setHasPassedRecaptcha(true)}
                        />
                    </div>

                    {error && error.length > 0 &&
                        <p className="error">
                            {error}
                        </p>
                    }
                    <button
                        type="submit"
                        disabled={!hasPassedRecaptcha}
                    >
                        Je m&apos;engage
                    </button>
                    <p className="disclaimer-privacy">
                        Nous ne sauvegardons pas ton email, nous ne l’utiliserons pas et nous ne t’enverrons pas de communication.
                    </p>
                </form>
            </div>
            :
                <div className="success-msg">
                    <p>
                        Merci pour ton engagement, maintenant
                    </p>
                    <button
                        className=""
                        onClick={() => handleModal(ModalShare)}
                    >
                        Fais-le savoir autour de toi
                    </button>
                </div>
            }

            <div className="counter">
                <span className="counter-value">{counterValue}</span>personnes s’engagent déjà à boycotter.
            </div>
        </div>
    )
}
