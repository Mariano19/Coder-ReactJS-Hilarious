import React from 'react'
import  Button from 'react-bootstrap/Button'
import  Card  from 'react-bootstrap/Card'
import ItemCount from '../ItemCount/ItemCount'
import {useEffect, useState} from "react"
import {getFetch} from '../../helpers/mock'


function ItemListContainer() {
    const [productos, setProductos] = useState ([])
    const [loading, setloading] = useState(true)

    // llamada a una api. Tarea asincónica
        /* const url = " https://pokeapi.co/api/v2/pokemon?limit=100&offset=200";

    const peticion = async () => {
        try {
        const peticionUrl = await fetch(url);
        const traer = await peticionUrl.json();
        console.log(traer.results);
        } catch (error) {
        console.log(error);
        }
    };

    useEffect(() => {
        peticion();
    }, []); */

    useEffect(() => {        
        getFetch
        .then(res => setProductos(res))
        .catch(err => console.log(err))        
        .finally(()=> setloading(false))   
        //console.log('api')     
    }, [])

    //Agregar al carrito
    function onAdd(cant) {
        console.log(cant)
    }

    return (

        <div className='container items'>
            
            { loading ? <h2>Cargando ...</h2> :
                productos.map( prod => 
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
                            <ItemCount stock={8} initial={1} onAdd={onAdd}/>
                        </Card.Body>
                    </Card>
                </div>                                    
            
            ) }  
        </div>        
    )
}



export default ItemListContainer