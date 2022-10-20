import {useState} from "react";
import Head from 'next/head';

import AvatarEditor from '../components/avatar-editor';
import Uploader from '../components/uploader';
import EngageForm from '../components/engage-form';
import Map from '../components/map';

import {ModalProvider} from '../components/modal';
import constants from '../constants';

export default function Index() {
    const [hasProfilePicture, setHasProfilePicture] = useState(false);
    const [profilePicture, setProfilePicture] = useState(false);

    function handlePictureUploaded(result) {
        setHasProfilePicture(true);
        setProfilePicture(result);
    }

    return (
        <ModalProvider>
            <div className="page-content">
                <Head>
                    <title>Boycott</title>
                    <meta charSet="utf-8"/>
                    <meta name="viewport" content="width=device-width"/>
                    <link href='/favicon.svg' rel='icon'/>

                    <meta property='og:title' content='Je boycott la coupe du monde 2022 au Qatar'/>
                    <meta property='og:image' content='/thumbnail.jpg'/>
                    <meta property='og:description'
                          content='Parce que le monde du foot mérite mieux, je m’engage à ne pas regarder les matches de la Coupe du monde de football.'/>
                    <meta property='og:url' content='//www.boycottqatar2022.fr'/>
                </Head>
                <header className="header">
                    <div>
                        <h1 className="header-title">
                            JE BOYCOTTE LA COUPE DU MONDE 2022 AU QATAR
                        </h1>

                        <p className="intro">
                            Parce que le monde du foot mérite mieux, je m’engage à ne pas regarder les matchs de la
                            Coupe du monde de football.
                        </p>

                        <div className="ctas">
                            <a
                                href="#engage"
                                className="button"
                            >
                                Je m&apos;engage
                            </a>
                            <a
                                href="#profile"
                                className="button"
                            >
                                Je crée mon image de profil
                            </a>
                        </div>
                    </div>
                </header>

                <div className="manifesto">
                    <h2>
                        La Coupe du monde de football 2022 organisée par la FIFA au Qatar, c’est&nbsp;:
                    </h2>
                    <ul>
                        <li>
                            <span className="horror">
                                UN DRAME HUMAIN
                            </span>
                            <span className="horror-detail">
                                Plus de <strong>6 500 ouvriers étrangers morts</strong> depuis le début des chantiers
                                 <sup><a href="#ref1">[1]</a></sup>
                            </span>
                        </li>
                        <li>
                            <span className="horror">
                                UN DÉSASTRE CLIMATIQUE
                            </span>
                            <span className="horror-detail">
                                Officiellement, <strong>3,6 millions de tonnes de CO2</strong> émises entre travaux
                                et déplacements<sup><a
                                href="#ref2">[2]</a></sup>. Une quantité fortement <strong>sous-estimée</strong>
                                <sup><a href="#ref3">[3</a>, <a href="#ref4">4]</a></sup>
                            </span>
                        </li>
                        <li>
                            <span className="horror">
                                Des soupçons de corruption
                            </span>
                            <span className="horror-detail">
                                <strong>150 millions de dollars</strong> de rétrocommissions et pots-de-vin supposément reçus par la FIFA<sup><a
                                href="#ref5">[5]</a></sup>.
                                Sans compter les nombreuses enquêtes sur un <strong>système d’attribution qui aurait été biaisé</strong>
                                <sup><a href="#ref6">[6</a>, <a href="#ref7">7]</a></sup>
                            </span>
                        </li>
                        <li>
                            <span className="horror">
                                DES DROITS fondamentaux BAFOUÉS
                            </span>
                            <span className="horror-detail">
                                Des <strong>conditions de vie et de travail inhumaines</strong> entraînant blessures, handicap et décès non
                                indemnisés<sup><a
                                href="#ref8">[8]</a></sup>. Un système <strong>de tutelle, la « Kafala », apparenté à de l’esclavage moderne</strong>,
                                officiellement aboli mais toujours en vigueur<sup><a href="#ref9">[9</a>, <a
                                href="#ref10">10</a>, <a href="#ref11">11]</a></sup>
                            </span>
                        </li>
                    </ul>
                </div>
                <div className="conclusion">
                    <h2>
                        TOUT ÇA POUR QUOI ?
                    </h2>
                    <h2>
                        <strong>64 matchs de foot</strong>.
                        Soit <strong>plus de 100 morts par match</strong>. 1 pour chaque minute jouée.
                    </h2>
                    <h2>
                        Le monde du sport et ses passionné.e.s méritent bien mieux que cette Coupe du monde !
                    </h2>
                </div>

                <div className="engage-background"></div>
                <div className="actions-list">
                    <div className="block-action action-first engage-action" id="engage">
                        <span className="action-order">
                            1
                        </span>
                        <h2>
                            Engage-toi
                        </h2>
                        <div className="action-explain">
                            <p>
                                Au-delà du symbole, <strong>ne pas regarder les matchs</strong> fera baisser les parts
                                d’audience de TF1 et de la chaîne qatari BeIN, poussant les organisateurs
                                et les diffuseurs à changer leurs pratiques pour les prochaines éditions.
                            </p>
                        </div>

                        <EngageForm/>
                    </div>

                    <div className="boycott-vips">
                        <div className="personalities-container">
                            <h3>
                                Ces personnalités qui ont déjà appelé au boycott
                            </h3>
                            <ul className="personalities-list">
                                {[
                                    {
                                        name: 'Régis Juanico',
                                        position: 'député de la Loire',
                                        link: 'https://www.lejdd.fr/Politique/jean-francois-debat-et-regis-juanico-boycotter-la-coupe-du-monde-au-qatar-pour-ne-pas-cautionner-4136381'
                                    },
                                    {
                                        name: 'Jean-François Debat',
                                        position: 'maire de Bourg-en-Bresse',
                                        link: 'https://www.lejdd.fr/Politique/jean-francois-debat-et-regis-juanico-boycotter-la-coupe-du-monde-au-qatar-pour-ne-pas-cautionner-4136381'
                                    },
                                    {
                                        name: 'Éric Cantona',
                                        position: 'ex-footballeur',
                                        link: 'https://www.eurosport.fr/football/coupe-du-monde/2022/eric-cantona-va-boycotter-la-coupe-du-monde-2022-au-qatar_sto9144232/story.shtml'
                                    },
                                    {
                                        name: 'Éric Piolle',
                                        position: 'maire de Grenoble',
                                        link: 'https://www.lefigaro.fr/sports/football/coupe-du-monde/fil-info/piolle-boycottons-la-coupe-du-monde-au-qatar-1038589'
                                    },
                                    {
                                        name: 'Vincent Lindon',
                                        position: 'acteur',
                                        link: 'https://www.lepoint.fr/people/un-asile-geant-vincent-lindon-pour-le-boycott-du-mondial-au-qatar-05-09-2022-2488537_2116.php'
                                    },
                                    {
                                        name: 'Philippe Lahm',
                                        position: 'ex-footballeur Bayern Munich',
                                        link: 'https://www.lequipe.fr/Football/Actualites/Philipp-lahm-boycottera-la-coupe-du-monde-au-qatar-pour-des-raisons-politiques/1347197'
                                    },
                                    {
                                        name: 'Alexis Corbière',
                                        position: 'député La Seine-Saint-Denis',
                                        link: 'https://www.lejdd.fr/Politique/alexis-corbiere-et-16-autres-deputes-insoumis-qatar-non-a-la-coupe-du-monde-immonde-4136203'
                                    },
                                    {
                                        name: 'Jeanne Barseghian',
                                        position: 'maire de Strasbourg',
                                        link: 'https://www.sofoot.com/boycott-du-mondial-la-ville-de-strasbourg-ne-diffusera-pas-de-matchs-sur-ecrans-geants-519478.html'
                                    },
                                    {
                                        name: 'Le Quotidien de la Réunion',
                                        position: '',
                                        link: 'https://www.francetvinfo.fr/coupe-du-monde/coupe-du-monde-2022-le-quotidien-de-la-reunion-boycotte-la-competition-au-qatar-et-assure-que-meme-si-la-france-est-championne-nous-ne-relaierons-pas-l-exploit-sportif_5359216.html'
                                    },
                                    {
                                        name: 'Raphaël Glucksmann',
                                        position: 'député européen',
                                        link: 'https://www.linkedin.com/posts/raphaelglucksmann_signez-la-p%C3%A9tition-activity-6982591437070606336--V8e/?originalSubdomain=be'
                                    },
                                    {
                                        name: 'Martine Aubry',
                                        position: 'maire de Lille',
                                        link: 'https://www.huffingtonpost.fr/politique/article/apres-strasbourg-lille-boycottera-la-coupe-du-monde-au-qatar_208430.html'
                                    },
                                    {
                                        name: 'Christian Teyssèdre',
                                        position: 'maire de Rodez',
                                        link: 'https://www.nouvelobs.com/societe/20221003.OBS64027/apres-lille-et-strasbourg-bordeaux-rodez-ces-villes-qui-boycottent-la-coupe-du-monde-au-qatar.html'
                                    },
                                ].map(personality => (
                                    <li key={personality.name}>
                                        <a href={personality.link} rel="external">
                                            <span className="personality-name">
                                                {personality.name}
                                            </span>
                                            <span className="personality-position">
                                                {personality.position}
                                            </span>
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className="map-container">
                            <h3>
                                Ces villes qui ne diffuseront pas les matchs
                            </h3>
                            <figure className="map">
                                <Map/>
                            </figure>
                        </div>
                    </div>

                    <div className="block-action action-second" id="profile">
                        <div className="avatar-tool">
                            <span className="action-order">
                                2
                            </span>
                            <div className="action-explain">
                                <h2>
                                    Crée ta photo de profil
                                </h2>
                                <p>
                                    Je montre mon désaccord en téléchargeant un bandeau
                                    «&nbsp;{constants.hashtag}&nbsp;» et j’actualise ma photo de profil sur les réseaux
                                    sociaux&nbsp;:
                                </p>
                            </div>
                            <div>
                                {
                                    hasProfilePicture ?
                                        <AvatarEditor
                                            profilePicture={profilePicture}
                                            resetPicture={() => setHasProfilePicture(false)}
                                        />
                                        :
                                        <Uploader handlePictureUploaded={handlePictureUploaded}/>
                                }
                                <p className="disclaimer-privacy">
                                    Nous ne sauvegardons pas les images avec lesquelles tu créeras ta photo de profil.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="go-further">
                    <div className="further-action">
                        <h2>
                            Pour aller plus loin
                        </h2>
                        <p>
                            Et avoir encore plus d’impact, quelques actions à mener :
                        </p>
                        <ul>
                            <li>
                                Boycotter les sponsors et partenaires de l’événement et ne pas consommer ou acheter
                                leurs produits : McDonalds, Coca-Cola, Budweiser, Adidas, Hyundai, KIA, Qatar Airways,
                                VISA, Crypto.com, BYJU&apos;S, Wanda Group, Hisense, VIVO, Mengniu.
                            </li>
                            <li>
                                Signer des pétitions, comme <a
                                href="https://www.amnesty.fr/petitions/coupe-du-monde-qatar-2022-fff?utm_medium=boycottqatar2022.fr">celle
                                d’Amnesty International</a> et celle de <a
                                href="https://www.change.org/p/m-le-pr%C3%A9sident-ne-participez-pas-%C3%A0-la-coupe-du-monde-au-qatar">Raphaël
                                Glucksmann</a>
                            </li>
                            <li>
                                Passer à l’action avec <a href="https://carton-rouge-qatar-2022.org/">Carton Rouge</a>
                            </li>
                        </ul>
                    </div>
                    <div className="further-action">
                        <h2>
                            Qu&apos;est ce qu’on fait à la place&nbsp;?
                        </h2>
                        <p>
                            Que tu fasses un foot entre potes, une soirée film, un gros jeu de société, une bonne grosse
                            tartiflette, montre au monde que la vie continue aussi sans la Coupe du monde avec le
                            hashtag <strong>#HappyBoycott</strong> !
                        </p>
                    </div>
                </div>

                <div className="footer">
                    <h2>
                        Sources
                    </h2>
                    <ol>
                        {[
                            'https://www.theguardian.com/global-development/2021/feb/23/revealed-migrant-worker-deaths-qatar-fifa-world-cup-2022',
                            'https://digitalhub.fifa.com/m/283d8622accb9efe/original/ocv9xna0lkvdshw30idr-pdf.pdf',
                            'https://carbonmarketwatch.org/publications/poor-tackling-yellow-card-for-2022-fifa-world-cups-carbon-neutrality-claim/',
                            'https://www.lequipe.fr/Football/Actualites/Un-avion-toutes-les-10-minutes-pour-les-supporters-qui-sejourneront-hors-du-qatar-lors-du-mondial/1356313',
                            'https://www.theguardian.com/football/2015/may/27/fifa-officials-world-cup-fraud-us-prosecutors',
                            'https://www.blast-info.fr/articles/2021/qatar-connection-comment-le-qatar-sest-offert-la-coupe-du-monde-2022-ikgi8tVSRb6CM1gtBqD8KA',
                            'https://www.lemonde.fr/sport/article/2022/01/13/coupe-du-monde-2022-au-qatar-l-ex-secretaire-general-de-la-fifa-entendu-par-les-juges_6109380_3242.html',
                            'https://www.lemonde.fr/sport/article/2022/05/19/coupe-du-monde-2022-au-qatar-amnesty-international-pointe-les-responsabilites-de-la-fifa-dans-les-atteintes-aux-droits-humains_6126712_3242.html',
                            'https://amnestyfr.cdn.prismic.io/amnestyfr/01ef9c35-be83-4b22-8b9b-4825374e0b1b_Qatar+Reality+Check+2021.pdf',
                            'https://www.mediapart.fr/journal/international/220922/au-qatar-l-enfer-des-travailleuses-domestiques',
                            'https://www.theguardian.com/global-development/2022/sep/20/workers-qatar-world-cup-football-stadiums-toil-in-debt-and-squalor?amp;amp;amp'
                        ].map((link, index) => (
                            <li id={`ref${index + 1}`} key={link}>
                                <a
                                    href={link}
                                    rel="external"
                                >
                                    {link}
                                </a>
                            </li>
                        ))}
                    </ol>
                </div>
            </div>
            <div id="modal-container"></div>
        </ModalProvider>
    );
}
