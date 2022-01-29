import React from 'react';
import { Card, Button } from 'react-bootstrap';

const ItemDetail = (prod) => {
  const { name, categoria, stock, price, foto } = prod.product; 
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
          </Card.Body>
        </Card>
    </div>
  );
};

export default ItemDetail;
