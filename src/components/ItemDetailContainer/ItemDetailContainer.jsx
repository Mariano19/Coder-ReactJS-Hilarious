import { doc, getDoc, getFirestore } from 'firebase/firestore';
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import getProducts from '../../helpers/getProducts';
import ItemDetail from '../ItemDetail/ItemDetail';

const ItemDetailContainer = () => {
  const [products, setProduct] = useState([]);
  const {idProducto} = useParams();
  const [loading, setloading] = useState(true)
  
  useEffect(() => {
    //llamada a una api. Tarea asincónica  
    const db = getFirestore()      
    const itemRef = doc(db, 'items', idProducto) 
    getDoc(itemRef)
    .then(resp => setProduct( { id: resp.id, ...resp.data() } ))
    .catch(err => console.log(err))        
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