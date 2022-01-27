import React from 'react';
import Item from '../Item/Item';


const ItemList = ({ products }) => {
  return (

    <div className='container items'>
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
    </div>
    
  )
};

export default ItemList;
