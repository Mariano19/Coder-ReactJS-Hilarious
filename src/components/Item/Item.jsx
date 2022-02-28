import React from 'react';
import { Col } from 'react-bootstrap';
import  Button from 'react-bootstrap/Button'
import  Card  from 'react-bootstrap/Card'
import { Link } from 'react-router-dom';
import './item.css';



const Item = ({ id, name, stock, price, foto }) => {

  return (
    <Col
      key={id}      
    >
      <Card>
        <div className='card-image'>
          <div>
          <Card.Img variant="top" src={foto} />
          </div>
          
        </div>
        <Card.Body>
          <Card.Title>{name}</Card.Title>          
          <Link to={`/detalle/${id}`}>
            <button className='button-principal'>Ver mas</button>
          </Link>
        </Card.Body>
      </Card>
    </Col>
  )
};

export default Item;




