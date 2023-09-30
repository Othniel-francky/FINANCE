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
    </div>
  )
}

export default Etude
