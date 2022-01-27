import React from 'react';
import { Card } from 'react-bootstrap';
import ItemCount from '../ItemCount/ItemCount';


const Item = ({id, name, stock, categoria, price, foto}) => {

  //Agregar al carrito
  function onAdd(cant) {
    console.log(cant)
  }

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
          <ItemCount stock={stock} initial={1} onAdd={onAdd}/>
        </Card.Body>
      </Card>
    </div>
  )
};

export default Item;




{/* <div 
    key={prod.id}
    className='col-md-4 cards'
>                        
    <Card style={{ width: '20rem' }}>
        <div className='card-image'>
            <Card.Img variant="top" src={prod.foto} />
        </div>                        
        <Card.Body>
            <Card.Title>{prod.name}</Card.Title>
            <Card.Text>
                Some quick example text to build on the card title and make up the bulk of
                the card's content.
            </Card.Text>
            <div className='price-list'>
                <h3>${prod.price}</h3>
            </div>
            <ItemCount stock={prod.stock} initial={1} onAdd={onAdd}/>
        </Card.Body>
    </Card>
</div> */}