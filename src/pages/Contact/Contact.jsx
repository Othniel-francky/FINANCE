import React from "react";
import "../Contact/contact.css";
import Navbar from "../../Components/Navbar/Navbar";
import Footer from "../../Components/Footer";
import Home from "../../Components/Home";
import { MdPersonOutline } from "react-icons/md";
import { FiMap} from "react-icons/fi";
import {AiFillMail} from "react-icons/ai";
import {SlEarphonesAlt} from "react-icons/sl"

const Contact = () => {
  return (
    <section className="contact">
      <Navbar />
      <Home />
      <div className="container">
        <div className="text">
          <h1>Nous Contactez</h1>
          <div className="depa">
            <div className="trai"></div>
          </div>
        </div>

        <div className="card">
          <div className="cadre"></div>
          <div className="cadre">
            <div className="unMot">
              <h1>N'hésitez pas à nous contacter</h1>
            </div>

            <form className="form">
              <div className="fle">
                <label>
                  <span>Nom*</span>
                  <input required="" placeholder="" type="text" class="input" />
                  <MdPersonOutline className="kpa" />
                </label>

                <label>
                  <span>E- mail*</span>
                  <input required="" placeholder="" type="text" class="input" />
                </label>
              </div>

              <label>
                  <span>Sujet*</span>
                  <input required="" placeholder="" type="text" class="input1" />
                </label>


                <label>
                <span>Message*</span>
                  <textarea name="" id="" cols="30" rows="10"></textarea>
                </label>

                <button className="bttn">Envoyer</button>
            </form>

          </div>
        </div>

        <div className="onSepare">
          <div className="nosTexte">
            <h2>Plus d'informations</h2>
          </div>

          <div className="Encore">
            <div className="grandCase">
              <div className="moyenCase">
              <div className="petiCase">
                <FiMap className="chic"/>
              </div>
              <div className="textDur">
                <h4>Adresse du Bureau</h4>
                <p>Port-Bouet Adjouffou</p>
              </div>
              </div>
            </div>

            <div className="grandCase">
              <div className="moyenCase">
              <div className="petiCase">
                <AiFillMail className="chic"/>
              </div>
              <div className="textDur">
                <h4>Adresse E-mail</h4>
                <p>kouame45@gmail.com</p>
              </div>
              </div>
            </div>

            <div className="grandCase">
              <div className="moyenCase">
              <div className="petiCase">
                <SlEarphonesAlt className="chic"/>
              </div>
              <div className="textDur">
                <h4>Numéro de telephone</h4>
                <p>+225 0789105791</p>
              </div>
              </div>
            </div>
            
          </div>
        </div>
      </div>
      <Footer />
    </section>
  );
};

export default Contact;
