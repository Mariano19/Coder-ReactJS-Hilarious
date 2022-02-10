import React from "react";
import { useCartContext } from "../../context/CartContext";

export default function Cart() {
  const { products, deleteOne, deleteAll } = useCartContext();
  return (
    <h2>carrito</h2>
    
  );
}

