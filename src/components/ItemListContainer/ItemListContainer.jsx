import React from 'react'
import  Button from 'react-bootstrap/Button'
import  Card  from 'react-bootstrap/Card'
import ItemCount from '../ItemCount/ItemCount'
import {useEffect, useState} from "react"
import {getFetch} from '../../helpers/mock'
import getProducts from '../../helpers/getProducts';
import ItemList from '../ItemList/ItemList';
import { useParams } from 'react-router-dom'

function ItemListContainer() {
    const [products, setListProducts] = useState ([])
    const [loading, setloading] = useState(true)
    

    // llamada a una api. Tarea asincónica
        /* const url = "";

    const peticion = async () => {
        try {
        const peticionUrl = await fetch(url);
        const traer = await peticionUrl.json();
        console.log(traer.results);
        } catch (error) {
        console.log(error);
        }
    };*/
    /* 24-1 */
    /* useEffect(() => {
        getProducts()
        .then((data) => setProducts(data));
        .catch((err => console.log(err)) ;
    }, []); */ 

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

{/* <div className='container items'>
            
            { loading ? <h2>Cargando ...</h2> :
                products.map( prod => 
                <div 
                    key={prod.id}
                    className='col-md-4 cards'
                >                        
                    <Card style={{ width: '20rem' }}>
                        <div className='card-image'>
                            <Card.Img variant="top" src={prod.foto} />
                        </div>                        
                        <Card.Body>
                            <Card.Title>{prod.name}</Card.Title>
                            <Card.Text>
                                Some quick example text to build on the card title and make up the bulk of
                                the card's content.
                            </Card.Text>
                            <div className='price-list'>
                                <h3>${prod.price}</h3>
                            </div>
                            <ItemCount stock={prod.stock} initial={1} onAdd={onAdd}/>
                        </Card.Body>
                    </Card>
                </div>                                    
            
            ) }  
        </div> */}

export default ItemListContainer