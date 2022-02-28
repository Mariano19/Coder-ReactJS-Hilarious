import React , {memo} from 'react';
import { Row } from 'react-bootstrap';
import Item from '../Item/Item';


const ItemList = memo( ({ products }) => {
  console.log('itemlist')
  return (
    
    <Row xs={1} md={2} className="g-4">
      {products.map(prod =>
        <Item
          key={prod.id}
          id={prod.id}
          name={prod.name}
          stock={prod.stock}
          price={prod.price}
          categoria={prod.categoria}
          foto={prod.foto}
        />
      )}
    </Row>
    
  )
});

export default ItemList;
