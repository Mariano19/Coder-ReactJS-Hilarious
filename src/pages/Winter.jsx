import React from 'react'
import './winter.css'
import { BsInstagram } from "react-icons/bs";

const Winter = () => {
  return (
    <div className='winter'>
      <div className='winter-container'>     
        
        <a href="https://www.instagram.com/hilarious.lp/" target="_blank" rel="noreferrer">
        <button className="winter-button-redes"><BsInstagram/>Hilarious.lp</button>
        </a>
        
        <div className='winter-title'>
          <span className='winter-title-1'>Invierno</span>
          <span className='winter-title-2'>Invierno</span>
        </div>

        <div className="winter-button-pos">
          <a href="#products-container">
            <button className="winter-button-principal">COMPRAR</button>
          </a>          
        </div>   
      </div> 
      <div className='winter-logo-pos'>
        <img src={require('../assets/img/logo.png')} alt="logo" />
      </div> 
    </div>
  )
}

export default Winter