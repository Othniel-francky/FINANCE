import React from "react";
import "../Style/security.css";

import photo from "../assets/probleme-removebg-preview.png";
const Security = () => {
  return (
    <section className="securite">
      <div className="container">
        <div className="part1">
          <div className="prob">
            <img src={photo} alt="" />
          </div>
          <div className="ecrire">
            <h1>Vos données protégées</h1>
            <p>
              Vos données sont stockées sur des disques chiffrés. <br /> L’accès
              à votre espace SIKA FINANCE est protégé par un code, ou Face ID.
            </p>
          </div>
        </div>

        <div className="part1">
          <div className="ecrire">
            <h1>Vos données protégées</h1>
            <p>
              Vos données sont stockées sur des disques chiffrés. <br /> L’accès
              à votre espace SIKA FINANCE est protégé par un code, ou Face ID.
            </p>
          </div>
          <div className="prob">
            <img src={photo} alt="" />
          </div>
        </div>

        <div className="part1">
          <div className="prob">
            <img src={photo} alt="" />
          </div>
          <div className="ecrire">
            <h1>Un service client disponible</h1>
            <p>
              Une question, des suggestions nous sommes à votre disposition:
            </p>
            <p>→ Sur les réseaux sociaux</p>
            <p>→ Par mail assistance@sikaFinance.com</p>
            <p>→ Temps de réponse moyen 24h (heures ouvrées)</p>
            <button className="bttn">En Voir Plus</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Security;
