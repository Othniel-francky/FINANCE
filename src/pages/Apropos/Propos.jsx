import React from "react";
import Navbar from "../../Components/Navbar/Navbar";
import Home from "../../Components/Home";
import {GiSandsOfTime} from "react-icons/gi"
import "../Apropos/propos.css";



import pho from "../../assets/Partenaire.jpeg";
const propos = () => {
  return (
    <section className="propos">
      <Navbar />
      <Home />
      <div className="container">

        <div className="text">
            <h1>A propos de nous</h1>
            <div className="depa">
                <div className="trai"></div>
            </div>
            </div>

        <div className="live">
          <div className="living">
            <img src={pho} alt="" />
          </div>
          <div className="loom">
            <div className="ecriture">
              <h1>Nous nous soucions de votre argent et de votre sécurité.</h1>
            </div>

            <div className="loi">
                <div className="car">
                <GiSandsOfTime/>
                </div>
                <div className="pi">
                    <h5>Notre mission</h5>
                    <p>Nous nous concentrons sur la construction et le maintien de relations générationnelles à long terme avec nos clients.</p>
                </div>
            </div>

          </div>
        </div>


      </div>
    </section>
  );
};

export default propos;
