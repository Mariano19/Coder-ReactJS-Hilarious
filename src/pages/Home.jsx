import React from 'react'
import { useParams } from 'react-router-dom';
import Summer from './Summer';
import Winter from './Winter';


const Home = () => {

    const {idCategoria} = useParams();
  
    return (
      
      <div>
        {idCategoria === 'invierno'?        
          <Winter/>    
        :           
          <Summer/> 
        }
          
      </div>
    )
  }

export default Home