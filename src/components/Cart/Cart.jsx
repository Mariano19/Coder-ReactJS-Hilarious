import React from "react";
import { useCartContext } from "../../context/CartContext";

export default function Cart() {
  const { products, deleteOne, deleteAll } = useCartContext();
  return (
    <h2>carrito</h2>
    
  );
}

{/* <div>
      <h1>No hay items seleccionados</h1>
	  <button onClick={deleteAll}>borrarTodo</button>
      {products.map((prod) => (
        <div key={prod.name}>
          <h2>{prod.nombre}</h2>
          <p>{prod.quantity}</p>
          <button onClick={() => deleteOne(prod.nombre)}>eliminar</button>
        </div>
      ))}
    </div> */}