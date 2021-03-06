import React from "react";
import { useCartContext } from "../../context/CartContext";
import { Link } from "react-router-dom";
import  Card  from 'react-bootstrap/Card'
import './cart.css'
import { BsXLg, } from "react-icons/bs";
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
                
                <div>
                  <span>${produ.product.price}</span>
                </div>
                
                <button type="button" className="btn btn-light" onClick={() => borrarItem(produ.product.id)}><BsXLg/></button>

              </div>)
              }

              <div className="total-cart">
                <span className="text">Total</span>
                <span className="text2">${sumaTotal()}</span>
              </div>              

              <div className="buttons-cart">
                <button id="bts" type="button" className="button-secundario" onClick={vaciarCarrito} >Vaciar Carrito</button>     
                <Form></Form>
              </div>             
              
              </>
              :
              <div className="empty-cart">
                <label>Tu carrito esta vacio</label>
                <Link to='/'>
                  <button className="button-principal">Volver al home</button>
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
