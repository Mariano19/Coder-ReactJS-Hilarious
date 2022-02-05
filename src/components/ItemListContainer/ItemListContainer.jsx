import React from 'react'
import {useEffect, useState} from "react"
import getProducts from '../../helpers/getProducts';
import ItemList from '../ItemList/ItemList';
import { useParams } from 'react-router-dom'

function ItemListContainer() {
    const [products, setListProducts] = useState ([])
    const [loading, setloading] = useState(true)
    
    
    const {idCategoria} = useParams();

    useEffect(() => { 
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
            
            { loading ? <h2>Cargando ...</h2>:
            <ItemList products={products} />
            }
        </div>
        

                
    )
};


export default ItemListContainer