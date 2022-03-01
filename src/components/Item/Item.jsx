import React from 'react';
import { Col } from 'react-bootstrap';
import  Card  from 'react-bootstrap/Card'
import { Link, useParams } from 'react-router-dom';
import './item.css';



const Item = ({ id, name, stock, price, foto }) => {
  const {idCategoria} = useParams();
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
            {idCategoria === 'verano'?
            <button className='button-principal'>Ver mas</button>
            :
            <button className='button-principal-winter'>Ver mas</button>         
          }
          </Link>
        </Card.Body>
      </Card>
    </Col>
  )
};

export default Item;




