import React from 'react'
import "../Etude/etude.css"
import Navbar from '../../Components/Navbar/Navbar'
import Home from '../../Components/Home'
import Footer from '../../Components/Footer'

import met from "../../assets/DG.jpeg"
import mis from "../../assets/Directrice.jpeg"
const Etude = () => {
  return (
    <div>
      <Navbar/>
      <Home/>
      <div className="text">
            <h1>Etude Financiere</h1>
            <div className="depa">
                <div className="trai"></div>
            </div>
            </div>
            <br /><br /><br />
            <div className="container">
              <div className="mets">
                <div className="tire">
                  <h1>Pourquoi s'eduquer financiérement ?</h1>
                </div>
                <div className="para">
                  <p>L'éducation financière s'adresse à tous, non seulement aux enfants, mais également aux adultes. S'éduquer financièrement, c'est se donner les moyens de développer des connaissances pour comprendre le monde financier, pour être en mesure de prendre ses propres décisions, en connaissance de cause et en toute confiance. L’éducation financière est non seulement un atout de taille pour apprendre à gérer son argent, se constituer une épargne et investir sur le long terme, mais c’est aussi une arme solide pour contribuer à l’économie.</p>
                </div>
              </div>
<br /><br />
              <div className="mets">
                <div className="tire">
                  <h1>Comment avoir une bonne éducation financière ?</h1>
                </div>
                <div className="para">
                  <p>L'éducation financière s'adresse à tous, non seulement aux enfants, mais également aux adultes. S'éduquer financièrement, c'est se donner les moyens de développer des connaissances pour comprendre le monde financier, pour être en mesure de prendre ses propres décisions, en connaissance de cause et en toute confiance. L’éducation financière est non seulement un atout de taille pour apprendre à gérer son argent, se constituer une épargne et investir sur le long terme, mais c’est aussi une arme solide pour contribuer à l’économie.</p>
                </div>
              </div>

              <br /><br />
              <div className="mets">
                <div className="tire">
                  <h1>C'est quoi l'intelligence financière ? ?</h1>
                </div>
                <div className="para">
                  <p>L'éducation financière s'adresse à tous, non seulement aux enfants, mais également aux adultes. S'éduquer financièrement, c'est se donner les moyens de développer des connaissances pour comprendre le monde financier, pour être en mesure de prendre ses propres décisions, en connaissance de cause et en toute confiance. L’éducation financière est non seulement un atout de taille pour apprendre à gérer son argent, se constituer une épargne et investir sur le long terme, mais c’est aussi une arme solide pour contribuer à l’économie.</p>
                </div>
              </div>

              <br /><br />

              <div className="mets">
                <div className="tire">
                  <h1>Comment bien réussir dans la vie financierement ?</h1>
                </div>
                <div className="para">
                  <p>L'éducation financière s'adresse à tous, non seulement aux enfants, mais également aux adultes. S'éduquer financièrement, c'est se donner les moyens de développer des connaissances pour comprendre le monde financier, pour être en mesure de prendre ses propres décisions, en connaissance de cause et en toute confiance. L’éducation financière est non seulement un atout de taille pour apprendre à gérer son argent, se constituer une épargne et investir sur le long terme, mais c’est aussi une arme solide pour contribuer à l’économie.</p>
                </div>
              </div>
<br /><br />
              <div className="mesCadres">
              <div className="text">
            <h1>Nos experts Financiers</h1>
            <div className="depa">
                <div className="trai"></div>
            </div>
            </div>
            <br /><br />
            <div className="part1">
          <div className="prob">
            <img src={met} alt="" />
          </div>
          <div className="ecrire">
            <h1>Abraham KOULATE</h1>
            <p>
              Expert Financie a NaN digital academy
            </p>
            <button className="bttn">Contacter</button>
          </div>
        </div>
<br /> <br />
        <div className="part1">
          
          <div className="ecrire">
            <h1>Marie Constance</h1>
            <p>
              Expert Comptable a Boulangère
            </p>
            <button className="bttn">Contacter</button>
          </div>

          <div className="prob">
            <img src={mis} alt="" />
          </div>
        </div>
              </div>
            </div>

<br /><br /><br />
            <div className="text">
            <h1>Nos Formations</h1>
            <div className="depa">
                <div className="trai"></div>
            </div>
            </div>
            <Footer/>
    </div>
  )
}

export default Etude
