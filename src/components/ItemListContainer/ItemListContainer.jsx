import React from 'react'
import {useEffect, useState} from "react"
import ItemList from '../ItemList/ItemList';
import { useParams } from 'react-router-dom'
import Loader from '../loader/loader';
import { collection, getDocs, getFirestore, query, where } from 'firebase/firestore'


function ItemListContainer() {
    const [products, setListProducts] = useState ([])
    const [loading, setloading] = useState(true)
    
    
    const {idCategoria} = useParams();

    // Firebase
    useEffect(() => {
        const db = getFirestore()
        const queryCollection = collection(db, 'items')        
             
        const queryF = !idCategoria ? 
            queryCollection                
        : 
            query(queryCollection, 
                where('categoria', '==', idCategoria)                
            )  

        getDocs(queryF)
        .then(resp => setListProducts( resp.docs.map(prod => ( { id: prod.id, ...prod.data() } )  ) ))
        .catch((err) => console.log(err))
        .finally(() => setloading(false))            
                   
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