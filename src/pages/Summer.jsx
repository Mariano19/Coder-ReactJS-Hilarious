import React from 'react'
import './summer.css'
import { BsInstagram } from "react-icons/bs";

const Summer = () => {

  return (
    
    <div className='summer'>
      <div className='summer-container'>     
        
        <a href="https://www.instagram.com/hilarious.lp/" target="_blank" rel="noreferrer">
        <button className="summer-button-redes"><BsInstagram/>Hilarious.lp</button>
        </a>
        
        <div className='summer-title'>
          <span className='summer-title-1'>Verano</span>
          <span className='summer-title-2'>Verano</span>
        </div>

        <div className="summer-button-pos">
          <a href="#products-container">
            <button className="summer-button-principal">COMPRAR</button>
          </a>          
        </div>   
      </div> 
      <div className='summer-logo-pos'>
        <img src={require('../assets/img/logo.png')} alt="logo" />
      </div> 
    </div>
  )
}

export default Summer

