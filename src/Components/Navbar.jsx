import React from "react";
import {TbGridDots} from "react-icons/tb";
import {AiFillCloseCircle} from "react-icons/ai";
import '../Style/navbar.css';

import imag1 from '../assets/LOGO.png'
const Navbar = () => {
    return (
        <div>
           <header>

            <div className="logoDiv">
              <a href="#" className="logo">
            <img src={imag1} alt="" />SIKA FINANCE
        </a>
            </div>
           
        <div className="toggleNabar">
                <TbGridDots className="icon"/>
                </div>

                <ul className="Navbar">
                  <li>ACCEUIL</li>
                  <li>A PROPOS DE NOUS</li>
                  <li>PRESTATION DE SERVICE</li>
                  <li>CONTACTS</li>
                  <li>ETUDE FINANCIERE</li>

                  <div className="headerBtns flex">
                        <button className="btn ">
                            Mon Espace
                        </button>
                     </div>
                </ul>
                <div className="closeNavbar">
                <AiFillCloseCircle className="icon"/>
                </div>

           </header>
        </div>
    )
}
export default Navbar; 