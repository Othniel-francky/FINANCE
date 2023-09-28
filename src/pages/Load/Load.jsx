import React from 'react'
import "../Load/Load.css"
import { Link } from "react-router-dom";
import { SiYourtraveldottv } from "react-icons/si";
import Footer from '../../Components/Footer';


const Load = () => {
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
      <Link to="/Connexion">Nouveau sur SIKA FINANCE ? Je m'inscris gratuitement
</Link>
    </div>
  </div>

  <div className="contai">
  <div className="global">
          <p>Connexion</p>
          <form className="for">
            <div className="bois">
              <label className="babel1">
                <input type="text" placeholder='exemple:jeandupont@gmail.com'/>
              </label>
            </div>
            <br />
            <div className="bois">
              <label className="babel">
                <input type="text" placeholder='.........'/>
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
              <Link to ="/Dashboard"><button className="bttn">Creer mon espace</button></Link>
                
            </div>
          </form>
        </div>
  </div>
  <Footer />
  </div>
  )
}

export default Load