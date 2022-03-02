import React from "react";
import { useCartContext } from "../../context/CartContext";
import Button from "react-bootstrap/esm/Button";
import { Link } from "react-router-dom";
import  Card  from 'react-bootstrap/Card'
import './cart.css'
import { BsXLg } from "react-icons/bs";
import Form from '../Form/Form';

const Cart = () => {

  const { cartList, vaciarCarrito, sumaTotal, borrarItem } = useCartContext()


  return <div>
    
    <div className='background-cart'>
       <div className='container'>
        <Card className='card-detail'>
          <Card.Body className='card-body-detail'>
            <div className="title-cart">
              <span>Carrito</span>
            </div>
            {cartList.length !== 0 ? 
              <>
              {cartList.map(produ => 
              <div className="item-cart">
                <div className="item-cart-divider">
                  <div className="image-cart">
                    <Card.Img variant="top" src={produ.product.foto} />
                  </div>
                  <div className="text-cart">
                    <span className="name">{produ.product.name}</span>
                    <span>{produ.cantidad} unidades</span>
                  </div>
                </div>
                
                
                <button type="button" className="btn btn-light" onClick={() => borrarItem(produ.product.id)}><BsXLg/></button>

              </div>)
              }

              {`la suma es ${sumaTotal()}`}
              
              <button type="button" className="btn btn-light" onClick={vaciarCarrito} >Vaciar Carrito</button>      
              
              <Form></Form>
              
              </>
              :
              <div>
                <label>Tu carrito esta vacio</label>
                <Link to='/'>
                  <Button>Volver al home</Button>
                </Link>
              </div>
            }   
          </Card.Body>
        </Card>
      </div>
    </div>
    
    


  </div>;

};


export default Cart;
