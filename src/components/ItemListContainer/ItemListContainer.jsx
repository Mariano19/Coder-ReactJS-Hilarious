import React from 'react'
import {useEffect, useState} from "react"
import getProducts from '../../helpers/getProducts';
import ItemList from '../ItemList/ItemList';
import { useParams } from 'react-router-dom'
import Loader from '../loader/loader';

function ItemListContainer() {
    const [products, setListProducts] = useState ([])
    const [loading, setloading] = useState(true)
    
    
    const {idCategoria} = useParams();

    useEffect(() => { 

        /* const db = getFirestore()
        const queryCollection = collection(db,'items')
        getDocs(queryCollection)
        .then(resp => setListProducts( resp.docs.map(prod =>))) */

        setloading(true)
        getProducts()  
            .then((data) => {
                 setListProducts(
                     idCategoria ? data.filter((el) => el.categoria === idCategoria) : data)
                     
            })
            
        .catch(err => console.log(err))                
        .finally(()=> setloading(false))  
                     
    }, [idCategoria])

    
    return (
        <div className='container items'>
            
            { loading ? 
                <Loader></Loader>                
            :
            <ItemList products={products} />
            }
        </div>
        

                
    )
};


export default ItemListContainer