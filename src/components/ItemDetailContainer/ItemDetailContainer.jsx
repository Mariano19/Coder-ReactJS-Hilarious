import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import getProducts from '../../helpers/getProducts';
import ItemDetail from '../ItemDetail/ItemDetail';

const ItemDetailContainer = () => {
  const [products, setProduct] = useState([]);
  const {idProducto} = useParams();
  

  useEffect(() => {
    getProducts()
      .then((data) => {
        setProduct(data.find((item) => item.id === idProducto));
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <>
      <ItemDetail product={products} />
    </>
  );
};

export default ItemDetailContainer;