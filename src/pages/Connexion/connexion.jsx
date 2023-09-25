import {React, useState} from "react";
import "../Connexion/connexion.css";
import { Link } from "react-router-dom";
import { SiYourtraveldottv } from "react-icons/si";
import Footer from "../../Components/Footer";
import Load from "../Load/Load";
import axios from "axios";


const connexion = () => {

  const [nom, setNom] = useState();
  const [email, setEmail] = useState();
  const [motDepasse, setmotDepasse] = useState();
  const [confirm, setConfirm] = useState();
  const handleSubmit =(e) => {
    e.preventDefault()
    axios.post('',{nom, email, motDepasse, confirm })
    .then(result => console.log(result))
    .catch(err => console.log(err))
  }
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
          <Link to="/Load">Deja Inscrit ?Connectez-vous</Link>
        </div>
      </div>
      <hr />
      <div className="contai">
        <div className="global">
          <p>Inscrivez-vous gratuitement</p>
          <form className="for" onSubmit={handleSubmit}>
          <div className="bois">
              <label className="babel1">
                <span>Votre Nom:</span>
                <input type="text" onChange={(e)=>setNom(e.target.value)}/>
              </label>
            </div>
            <br />
            <div className="bois">
              <label className="babel1">
                <span>Votre adresse email:</span>
                <input type="text" onChange={(e)=>setEmail(e.target.value)}/>
              </label>
            </div>
            <br />
            <div className="bois">
              <label className="babel">
                <span>Choisissez votre mot de passe:</span>
                <input type="text" onChange={(e)=>setmotDepasse(e.target.value)}/>
              </label>
            </div>
            <br />
            <div className="bois">
              <label className="babel">
                <span>Confirmez votre mot de passe:</span>
                <input type="text" onChange={(e)=>setConfirm(e.target.value)}/>
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
      <Footer />
    </div>
  );
};

export default connexion;
