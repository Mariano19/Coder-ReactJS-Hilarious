import React from 'react';


const ItemDetail = (prod) => {
  const { name, categoria, stock, price } = prod.product; 
  return (
    <>
      <h1>{name}</h1>      
      <h4>Stock: {stock}</h4>
      <h4>Price: ${price}</h4>
    </>
  );
};

export default ItemDetail;
