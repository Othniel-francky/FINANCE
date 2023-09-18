import React from 'react'
import Navbar from '../../Components/Navbar/Navbar'
import Home from '../../Components/Home'

const connexion = () => {
  return (
   
    <div>
<Navbar />
<Home />
        <div className="alert-box">
        <p className="alert"></p>
    </div>
<div className="global">
    <div className="form">
        <h1 className="heading">login</h1>
        <input type="email" placeholder="email" autocomplete="off" className="email" required/>
        <input type="password" placeholder="password" autocomplete="off" className="password" required/>
        <button className="submit-btn">log in</button>
        <a href="/register" className="link">don't have an account? Register one</a>
    </div>

    </div>


        </div>
  )
}

export default connexion
