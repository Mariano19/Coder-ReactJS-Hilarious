import { doc, getDoc, getFirestore } from 'firebase/firestore';
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ItemDetail from '../ItemDetail/ItemDetail';
import Loader from '../loader/loader';

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
        <Loader/> 
      :
      <ItemDetail product={products} />
      }
    </>
  );
};

export default ItemDetailContainer;