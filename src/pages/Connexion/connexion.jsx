import React from "react";
import "../Connexion/connexion.css";
import { Link } from "react-router-dom";
import { SiYourtraveldottv } from "react-icons/si";

const connexion = () => {
  return (
    <div>
      <div className="simpleNavbar">
        <div className="logoDiv">
          <Link to="/" className="logo">
            <h1 className="flex">
              <SiYourtraveldottv className="icon" />
              SIKA FINANCE
            </h1>
          </Link>
        </div>

        <div className="autreNavbar">
          <a href="#">Deja Inscrit ?Connectez-vous</a>
        </div>
      </div>
      <hr />
      <div className="contai">
        <div className="global">
          <p>Inscrivez-vous gratuitement</p>
          <form className="for">
            <div className="bois">
              <label className="babel1">
                <span>Votre adresse email:</span>
                <input type="text" />
              </label>
            </div>
            <br />
            <div className="bois">
              <label className="babel">
                <span>Choisissez votre mot de passe:</span>
                <input type="text" />
              </label>
            </div>
            <br />
            <div className="bois">
              <label className="babel">
                <span>Confirmez votre mot de passe:</span>
                <input type="text" />
              </label>
            </div>

            <div className="foi">
              <div className="loi">
                <input type="checkbox" className="look" />
              </div>
              <span>
                J’accepte les Conditions Générales
                d'Utilisation et la <br /> Politique de Confidentialité
              </span>
            </div>

            <div className="myButton">
                <button className="bttn">Creer mon espace</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default connexion;
