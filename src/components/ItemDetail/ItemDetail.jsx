import React, { useState } from 'react';
import  Card  from 'react-bootstrap/Card'
import { Link } from 'react-router-dom';
import { useCartContext } from '../../context/CartContext';
import ItemCount from '../ItemCount/ItemCount';
import './itemDetail.css'




const ItemDetail = (prod) => {
  const { name, categoria, stock, price, foto, description } = prod.product; 
  const [counter, setCounter] = useState(0);
  const { agregarAlCarrito } = useCartContext()
  


  //Agregar al carrito
  function onAdd(cant) {
    setCounter(cant)
    agregarAlCarrito( {...prod, cantidad: cant} )
  }

  
    
  return (   
     
    <div >
      {categoria === 'verano'?
     <div className='background-summer'>
       <div className='container'>
        <Card className='card-detail'>
          <div className='card-image-detail'>
            <Card.Img variant="top" src={foto} />
          </div>
          <Card.Body className='card-body-detail'>
            <div className='card-top'>
              <div className='card-text'>
                <Card.Title>
                  <span className='card-title'>{name}</span>
                </Card.Title>
                <Card.Text>
                  {description}
                </Card.Text>
              </div>
              <div className='price-list'>
                <span>${price}</span>
              </div> 
            </div>              
            {
              counter === 0 ?
                <div className='card-bot'>                  
                  <ItemCount stock={stock} initial={1} onAdd={onAdd} categoria={categoria} /> 
                </div>
                
              :
              <div className='card-bot-finish'>                        
                <Link to = '/' className='button-secundario-size'>
                  <button className='button-secundario'>Volver</button>  
                </Link>
                <Link to = '/cart'>
                    {categoria === 'verano'?
                    <button className='button-principal'>Finalizar compra</button>
                    :
                    <button className='button-principal-winter'>Finalizar compra</button> 
                    }                                                    
                </Link>
              </div>
            }                       
          </Card.Body>
        </Card>
      </div>
     </div>
     :
     <div className='background-winter'>
       <div className='container'>
            <Card className='card-detail'>
                <div className='card-image-detail-winter'>
                  <Card.Img className='card-top-winter' variant="top" src={foto} />
                </div>
                <Card.Body className='card-body-detail'>
                  <div className='card-top'>
                    <div className='card-text'>
                      <Card.Title>
                        <span className='card-title'>{name}</span>
                        </Card.Title>
                      <Card.Text>
                        {description}
                      </Card.Text>
                    </div>
                    <div className='price-list'>
                      <span>${price}</span>
                    </div> 
                  </div>              
                  {
                    counter === 0 ?
                      <div className='card-bot'>                  
                        <ItemCount stock={stock} initial={1} onAdd={onAdd} categoria={categoria} /> 
                      </div>
                      
                    :
                      <div className='card-bot-finish'>                        
                        <Link to = '/' className='button-secundario-size'>
                          <button className='button-secundario'>Volver</button>  
                        </Link>
                        <Link to = '/cart'>
                            {categoria === 'verano'?
                            <button className='button-principal'>Finalizar compra</button>
                            :
                            <button className='button-principal-winter'>Finalizar compra</button> 
                            }                                                    
                        </Link>
                      </div>
                  }                       
                </Card.Body>
              </Card>
      </div>
     </div>
     }
    </div>
    
  );
};

export default ItemDetail;
