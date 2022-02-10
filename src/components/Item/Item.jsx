import React from 'react';
import  Button from 'react-bootstrap/Button'
import  Card  from 'react-bootstrap/Card'
import { Link } from 'react-router-dom';



const Item = ({ id, name, stock, price, foto }) => {

  return (
    <div
      key={id}
      className='col-md-4 cards'
    >
      <Card style={{ width: '20rem' }}>
        <div className='card-image'>
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
          {/* <ItemCount stock={stock} initial={1} onAdd={onAdd} /> */}
          <Link to={`/detalle/${id}`}>
            <Button variant="secondary" size="sm">Ver mas</Button>
          </Link>
        </Card.Body>
      </Card>
    </div>
  )
};

export default Item;




