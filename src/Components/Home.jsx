import React from 'react'
import '../Style/home.css';


const Home = () => {
  return (
    <section className='home'>
        <div className="secContainer">
            <div className="homeText">

                <h1 className='title'>
                    La gestion performante de votre budget financière
                    </h1>
                    <p className='subtitle'>
                    Parce que vous êtes exigeants, SIKA FINANCE est l'outil le plus efficace pour optimiser la gestion de votre budget.
                    </p>
                    <button className="btn">
                        <a href="#">Eplore Now</a>
                    </button>
            </div>
        </div>
    </section>
  )
}

export default Home