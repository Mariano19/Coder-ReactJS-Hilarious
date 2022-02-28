import React from 'react'
import './main.css'
import { BsInstagram } from "react-icons/bs";

const Summer = () => {

  return (
    
    <div className='summer'>
      <div className='summer-container'>     
        
        <a href="https://www.instagram.com/hilarious.lp/" target="_blank" rel="noreferrer">
        <button className="button-redes"><BsInstagram/>Hilarious.lp</button>
        </a>
        
        <div className='title'>
          <span className='title-1'>Verano</span>
          <span className='title-2'>Verano</span>
        </div>

        <div className="button-pos">
          <a href="#products-container">
            <button className="button-principal">COMPRAR</button>
          </a>          
        </div>        
      </div> 
        
    </div>
  )
}

export default Summer

