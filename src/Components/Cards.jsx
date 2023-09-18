import React from 'react'
import '../Style/cards.css';

import img from '../assets/Portable.jpeg'
import img1 from '../assets/finance.jpeg'
import img2 from '../assets/decisions.png'
import img3 from '../assets/Transaction.jpeg'
const cards = ()=> {
  return (
    <section className='card'>
        <div className='container'>
            <div className="teste">
                <h1>Notre technologie, Vos décisions</h1>
            </div>
          <div className="content">
            <div className="carre">
            <div className='carre1'>
            <div className='carre2'>
                <img src={img} alt="" />
                </div>
            </div>
            <h4>Suivez tous vos comptes</h4>
            <p>Une seule application pour garder un oeil sur tous vos comptes (courant, épargne, crédit, pro…) détenus dans une ou plusieurs banques.</p>
            </div>


            <div className="carreer">
            <div className='carre3'>
            <div className='carre2'>
                <img src={img1} alt="" />
                </div>
            </div>
            <h4>Gérez votre patrimoine financier</h4>
            <p>Regroupez, visualisez et suivez tous vos investissements quel que soit l’établissement et le type de compte épargne.</p>
            </div>


            <div className="carre">
            <div className='carre1'>
            <div className='carre2'>
                <img src={img2} alt="" />
                </div>
            </div>
            <h4>Prenez les bonnes décisions</h4>
            <p>Lecture synthétique de votre budget, prévision du solde de vos comptes sur 30 jours, possibilité de faire des virements : vous gardez le contrôle.</p>
            </div>
          </div>



          <div className="outils">
            <div className="text">
                <h1>Des outils pour maîtriser votre budget Financier</h1>
            </div>
            <div className="divers">
                <div className="passe">
                    <div className="pass">
                        <img src={img3} alt="" />
                    </div>
                    <h4>Transactions catégorisées</h4>
                    <p>SIKA FINANCE catégorise automatiquement vos opérations : supermarché, logement, voyages… Vous pouvez même créer vos catégories (Premium).</p>
                    <div className="appuie">
                    <button className='bttn'>En Voir Plus</button>
                    </div>
                     
                </div>

                <div className="passe">
                    <div className="pass">
                        <img src={img3} alt="" />
                    </div>
                    <h4>Prévision sur 30 jours</h4>
                    <p>SIKA FINANCE vous donne une vision prévisionnelle du solde de vos comptes. Ne tombez plus à découvert accidentellement (Premium).</p>
                    <div className="appuie">
                    <button className='bttn'>En Voir Plus</button>
                    </div>
                </div>

                <div className="passe">
                    <div className="pass">
                        <img src={img3} alt="" />
                    </div>
                    <h4>Suivi des placements financiers</h4>
                    <p>Accédez à une vue détaillée de vos investissements. Suivez l’évolution du solde de vos comptes Épargne.</p>
                    <div className="appuie">
                    <button className='bttn'>En Voir Plus</button>
                    </div>
                </div>
                <div className="passe1">
                    <div className="pass">
                        <img src={img3} alt="" />
                    </div>
                    <h4>Recherche illimitée</h4>
                    <p>Retrouvez une dépense selon son montant, sa date ou sa catégorie sur toutes vos opérations sans limite de temps (Premium).</p>
                    <div className="appuie">
                    <button className='bttn'>En Voir Plus</button>
                    </div>
                </div>

                <div className="passe1">
                    <div className="pass">
                        <img src={img3} alt="" />
                    </div>
                    <h4>Virements sécurisés</h4>
                    <p>Alimentez vos comptes, épargnez, ou réalisez un virement sans passer par l’application de votre banque.</p>
                    <div className="appuie">
                    <button className='bttn'>En Voir Plus</button>
                    </div>
                </div>

                <div className="passe">
                    <div className="pass">
                        <img src={img3} alt="" />
                    </div>
                    <h4>Votre argent sous contrôle</h4>
                    <p>Lecture synthétique de votre budget, prévision du solde de vos comptes sur 30 jours, possibilité de faire des virements : vous gardez le contrôle.</p>
                    <div className="appuie">
                    <button className='bttn'>En Voir Plus</button>
                    </div>
                </div>
            </div>
          </div>
        </div>
    </section>
  )
}

export default cards