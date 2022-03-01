import React, { useState } from 'react';
import  Button from 'react-bootstrap/Button'
import  Card  from 'react-bootstrap/Card'
import { Link, useParams } from 'react-router-dom';
import { useCartContext } from '../../context/CartContext';
import ItemCount from '../ItemCount/ItemCount';
import './itemDetail.css'




const ItemDetail = (prod) => {
  const { name, categoria, stock, price, foto } = prod.product; 
  const [counter, setCounter] = useState(0);
  const { cartList, agregarAlCarrito } = useCartContext()
  const {idCategoria} = useParams();


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
          <Card.Body>
            <div className='card-top'>
              <div className='card-text'>
                <Card.Title>{name}</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up the bulk of
                  the card's content.
                </Card.Text>
              </div>
              <div className='price-list'>
                <h3>${price}</h3>
              </div> 
            </div>              
            {
              counter === 0 ?
                <div className='card-bot'>                  
                  <ItemCount stock={stock} initial={1} onAdd={onAdd} /> 
                </div>
                
              :
                <div className='card-bot'>
                  <Link to = '/cart'>
                    <Button>Terminar compra</Button> 
                  </Link>
                  <Link to = '/'>
                    <Button>Volver al home</Button> 
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
          <div className='card-image-detail'>
            <Card.Img variant="top" src={foto} />
          </div>
          <Card.Body>
            <div>
              <Card.Title>{name}</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up the bulk of
                the card's content.
              </Card.Text>
            </div>
            
            <div className='price-list'>
              <h3>${price}</h3>
            </div>  
            {
              counter === 0 ?
                <div>                  
                  <ItemCount stock={stock} initial={1} onAdd={onAdd} /> 
                </div>
                
              :
                <div>
                  <Link to = '/cart'>
                    <Button>Terminar compra</Button> 
                  </Link>
                  <Link to = '/'>
                    <Button>Volver al home</Button> 
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
