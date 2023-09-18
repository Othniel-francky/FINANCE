import React from 'react'
import '../Style/barre.css'

import img4 from '../assets/AApstore.png'
import img5 from '../assets/GooglePlay.png'

const Barre = () => {
  return (
    <section className='barre'>
        <div className='contain'>
            <div className="grandeBrre">
                <div className="mot">
                    <h1>Plus de 0 millions d’utilisateurs</h1>
                    <p>ont décidé de gérer leur argent en téléchargeant SIKA FINANCE</p>
                    <div className="sepation">
                        <div className="picture">
                            <img src={img4} alt="" />
                        </div>
                        <div className="picture">
                            <img src={img5 } alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </div>

    </section>
  )
}

export default Barre
