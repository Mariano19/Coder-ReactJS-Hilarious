import React, { useState } from 'react';
import  Button from 'react-bootstrap/Button'
import  Card  from 'react-bootstrap/Card'
import { Link } from 'react-router-dom';
import { useCartContext } from '../../context/CartContext';
import ItemCount from '../ItemCount/ItemCount';




const ItemDetail = (prod) => {
  const { name, categoria, stock, price, foto } = prod.product; 

  const [counter, setCounter] = useState(0);



  //Agregar al carrito
  function onAdd(cant) {
    setCounter(cant)
  }


  const{addProduct} = useCartContext();

  
  return (    
    <div className='container card-container'>
      <Card className='card-detail'>
          <div className='card-image-detail'>
            <Card.Img variant="top" src={foto} />
          </div>
          <Card.Body>
            <Card.Title>{name}</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the bulk of
              the card's content.
            </Card.Text>
            <div className='price-list'>
              <h3>${price}</h3>
            </div>  
            {
              counter === 0 ?
                <ItemCount stock={stock} initial={1} onAdd={onAdd} /> 
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
  );
};

export default ItemDetail;
