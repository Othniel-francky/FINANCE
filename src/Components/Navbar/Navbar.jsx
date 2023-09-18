import React, { useState } from "react";
import './navbar.css';
import {SiYourtraveldottv} from "react-icons/si";
import {AiFillCloseCircle} from "react-icons/ai";
import {TbGridDots} from "react-icons/tb";
import { Link } from "react-router-dom";

const Navbar = () =>{

    const [active, setActive] = useState("navBar")
    const showNav = () =>{
        setActive('navBar activeNavbar')    
    }

// code pour supprimer ma navbar
    const removeNav = () =>{
        setActive('navBar')
    }


// coder pour ajouter une couleur a mon header au scroll

const [transparent, setTransparent] = useState("header")
const addBg =()=>{
    if(window.scrollY >= 10){
        setTransparent("header activeHeader")
    }
    else{
        setTransparent("header") 
    }
}
window.addEventListener('scroll',addBg)

    return(
        <section className="navBarSection">
            <div className={transparent}>

                <div className="logoDiv">
                    <a href="#" className="logo">
                        <h1 className="flex"><SiYourtraveldottv className="icon"/>
                        SIKA FINANCE
                        </h1>
                    </a>
                </div>

             <div className={active}>
                <ul className="navLists flex">
                    
                    <li className="navItem">
                        <a href="#" className="navLink">ACCUEIL</a>
                    </li>

                    <li className="navItem">
                        <a href="#" className="navLink">A PROPOS DE NOUS</a>
                    </li>

                    <li className="navItem">
                        <a href="#" className="navLink">PRESTATION DE SERVICE</a>
                    </li>

                    <li className="navItem">
                        <a href="#" className="navLink">CONTACTS</a>
                    </li>

                    <li className="navItem">
                        <a href="#" className="navLink">ETUDE FINANCIERE</a>
                    </li>
                     
                     <div className="headerBtns flex">
                        <button className="btn loginBtn">
                            <Link to="/Connexion">Mon espace</Link>
                        </button>
                        {/* <button className="btn">
                            <a to="/Connexion">Mon espace</a>
                        </button> */}
                     </div>
                </ul>

                <div onClick={removeNav} className="closeNavbar">
                <AiFillCloseCircle className="icon"/>
                </div>

                </div>   

                <div onClick={showNav} className="toggleNabar">
                <TbGridDots className="icon"/>
                </div>
            </div>
        </section>
    )
}
export default Navbar;