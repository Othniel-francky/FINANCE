import React from "react";
import "../Contact/contact.css";
import Navbar from "../../Components/Navbar/Navbar";
import Home from "../../Components/Home";
import { MdPersonOutline } from "react-icons/md";

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
                  <span>first name</span>
                  <input required="" placeholder="" type="text" class="input" />
                  <MdPersonOutline className="kpa" />
                </label>

                <label>
                  <span>first name</span>
                  <input required="" placeholder="" type="text" class="input" />
                </label>
              </div>

              <label>
                  <span>first name</span>
                  <input required="" placeholder="" type="text" class="input1" />
                </label>

                <label>
                  <span>first name</span>
                  <input required="" placeholder="" type="text" class="input1" />
                </label>

                <label>
                <span>first name</span>
                  <textarea name="" id="" cols="30" rows="10"></textarea>
                </label>

                <button className="bttn">Envoyer</button>
            </form>

          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
