import React from 'react'
import "../Style/footer.css";
import { Link } from 'react-router-dom';
import {SiYourtraveldottv} from "react-icons/si";


import img6 from '../assets/AApstore.png';
import img7 from '../assets/GooglePlay.png'

const Footer = () => {
  return (
    <section className='footer'>
        <hr />
        <div className='container'>
            <div className="pourSeparer">
        <div className="logoDiv">
                    <Link to="/" className="logo">
                        <h1 className="flex"><SiYourtraveldottv className="icon"/>
                        SIKA FINANCE
                        </h1>
                    </Link>
                    <p>Maîtrisez votre budget, contrôlez vos dépenses et <br /> gagnez du temps !</p>
                    <div className='separeImage'>
                        <img src={img6} alt="" />
                        <img src={img7} alt="" />
                    </div>
                </div>

                <div className="pouApropos">
                    <div className='monTitre'>
                        <h2>A PROPOS</h2>
                    </div>
                    <br />
                    <ul>
                        <li>Notre mission</li>
                        <li>Sécurité</li>
                        <li>Nous Rejoindre</li>
                        <li>Partenaires</li>
                        <li>Blog</li>
                    </ul>
                </div>

                <div className='pouProduits'>
                <div className='monTitre'>
                        <h2>PRODUITS</h2>
                    </div>
                    <br />
                    <ul>
                        <li>Nos offres</li>
                        <li>Nos solutions</li>
                    </ul>
                </div>

                <div className='pouProduits'>
                <div className='monTitre'>
                        <h2>AIDE</h2>
                    </div>
                    <br />
                    <ul>
                        <li>Nous contacter</li>
                        <li>FAQ</li>
                    </ul>
                </div>
                </div>
        </div>
    </section>
  )
}

export default Footer