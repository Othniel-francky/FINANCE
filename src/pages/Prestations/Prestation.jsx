import React from "react";
import Navbar from "../../Components/Navbar/Navbar";
import Home from "../../Components/Home";
import "../Prestations/prestation.css";

import myImg from "../../assets/education.png";
import myIm from "../../assets/economie.jpeg";
import myM from "../../assets/suivis.jpeg";
import bad from "../../assets/BAD.jpeg";
import societe from "../../assets/SGBCI.jpeg";
import bicici from "../../assets/BICICI.jpeg";

const Prestation = () => {
  return (
    <section className="prestation">
      <Navbar />
      <Home />
      <div className="container">
        <div className="text">
          <h1>Nos Services</h1>
          <div className="depa">
            <div className="trai"></div>
          </div>
          <div className="para">
            <h2>Nous vous rendons la vie confortable avec nos services.</h2>
          </div>
        </div>

        <div className="grande">
          <div className="gras">
            <div className="gros">
              <img src={myImg} alt="" />
            </div>
            <div className="toit">
              <h1>Education Financiere</h1>
            </div>
            <div className="carte">
              <p>
                Une seule application pour garder un oeil sur tous vos comptes
                (courant, épargne, crédit, pro…) détenus dans une ou plusieurs
                banques.
              </p>
            </div>
            <div className="leve">
              <button className="buton">Consulter</button>
            </div>
          </div>

          <div className="gras">
            <div className="gros">
              <img src={myIm} alt="" />
            </div>
            <div className="toit">
              <h1>Gestion Financiere</h1>
            </div>
            <div className="carte">
              <p>
                Une seule application pour garder un oeil sur tous vos comptes
                (courant, épargne, crédit, pro…) détenus dans une ou plusieurs
                banques.
              </p>
            </div>
            <div className="leve">
              <button className="buton">Consulter</button>
            </div>
          </div>

          <div className="gras">
            <div className="gros">
              <img src={myM} alt="" />
            </div>
            <div className="toit">
              <h1>Suivis de Compte</h1>
            </div>
            <div className="carte">
              <p>
                Une seule application pour garder un oeil sur tous vos comptes
                (courant, épargne, crédit, pro…) détenus dans une ou plusieurs
                banques.
              </p>
            </div>
            <div className="leve">
              <button className="buton">Consulter</button>
            </div>
          </div>
        </div>

        <div className="text">
          <h1>Nos Partenaires Banquaires</h1>
          <div className="depa">
            <div className="trai"></div>
          </div>
        </div>

        <div className="partenaire">
          <div className="parten">
          <img src={bad} alt="" />
          </div>

          <div className="parten">
          <img src={societe} alt="" />
          </div>

          <div className="parten">
          <img src={bicici} alt="" />
          </div>
        </div>


      </div>

    </section>
  );
};

export default Prestation;
