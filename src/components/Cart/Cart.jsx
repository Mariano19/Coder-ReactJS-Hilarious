import React, { useState } from "react";
import { useCartContext } from "../../context/CartContext";
import Button from "react-bootstrap/esm/Button";
import { Link } from "react-router-dom";

import Form from '../Form/Form';

const Cart = () => {

  const { cartList, vaciarCarrito, sumaTotal, borrarItem } = useCartContext()


  return <div>
    
    <br />
    {cartList.length !== 0 ? <>
      {cartList.map(produ => <div>
        <li>{produ.product.name} precio: {produ.product.price} cantidad: {produ.cantidad}</li>
        <button onClick={() => borrarItem(produ.product.id)}>x</button>
      </div>)}
      {`la suma es ${sumaTotal()}`}
      <button onClick={vaciarCarrito} >Vaciar Carrito</button>      
      <br />
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
  </div>;

};


export default Cart;
