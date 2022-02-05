import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import getProducts from '../../helpers/getProducts';
import ItemDetail from '../ItemDetail/ItemDetail';

const ItemDetailContainer = () => {
  const [products, setProduct] = useState([]);
  const {idProducto} = useParams();
  const [loading, setloading] = useState(true)
  
  //Usar lo visto en la clase de firebase para llamar a un documento particular 
  useEffect(() => {
    setloading(true)
    getProducts()
      .then((data) => {
        setProduct(
          data.find((item) => item.id === idProducto));
      })

    .catch((err) => console.log(err))
    .finally(()=> setloading(false))  
  }, [])


  return (
    <>
      { loading ? 
                <h2>Cargando ...</h2>
      :
      <ItemDetail product={products} />
      }
    </>
  );
};

export default ItemDetailContainer;