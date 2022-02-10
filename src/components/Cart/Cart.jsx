import React from "react";
import { useCartContext } from "../../context/CartContext";
import Button from "react-bootstrap/esm/Button";


const Cart = () => {

  
  const { cartList, vaciarCarrito, sumaTotal, borrarItem } = useCartContext()
  
return <div>
    
    {cartList.length !== 0 ?<>
      {cartList.map(produ => <div>
          <li>{produ.product.name} precio: {produ.product.price} cantidad: {produ.cantidad}</li>
          <button onClick={() => borrarItem(produ.product.id)}>x</button>
        </div> ) }
     {`la suma es ${sumaTotal()}`}
     </> 
     :
     
        <label>Tu carrito esta vacio</label>

     }
      <button onClick={vaciarCarrito} >Vaciar Carrito</button>
</div>;
};


export default Cart;
