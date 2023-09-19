import React from 'react'
import Navbar from '../../Components/Navbar/Navbar';
import Home from '../../Components/Home';
import "../Prestations/prestation.css"

import myImg from "../../assets/education.png"
import myIm from "../../assets/economie.jpeg"

const Prestation =() =>{
  return (
    <section className='prestation'>
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
                  <h1>Education Finaciere</h1>
                </div>
              </div>

              <div className="gras">
                <div className="gros">
                <img src={myIm} alt="" />
                </div>
                <div className="toit">
                  <h1>Gestion Finaciere</h1>
                </div>
              </div>

              <div className="gras">
                <div className="gros">
                  
                </div>
              </div>
            </div>

      </div>

    </section>
  )
}

export default Prestation 

