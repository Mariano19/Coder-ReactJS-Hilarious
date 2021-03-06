import { createContext, useState, useContext } from "react";
const cartContext = createContext([])

export function useCartContext() {return useContext(cartContext)} 


function CartContextProvider({ children }) {
    
    const [cartList, setCartList] = useState([]);

    function agregarAlCarrito(item){        
        const index = cartList.findIndex(prod => prod.product.id === item.product.id )

        if (index === -1) {            
            setCartList( [ ...cartList, item ] )
        } else {            
            const cant = cartList[index].cantidad
            cartList[index].cantidad = item.cantidad + cant 
            const newCartList = [ ...cartList ]
            setCartList(newCartList)
        }

    }
    const sumaTotal = () => {
        return cartList.reduce((acum, prod) =>  acum= acum + (prod.product.price * prod.cantidad)  ,0)
    }
    
    const cantidad = () => {
        return cartList.reduce((acum, prod) =>  acum += prod.cantidad  ,0)
    }

    const borrarItem = (id) => { 
        setCartList( cartList.filter( prod => prod.product.id !== id ) )
    }

    function vaciarCarrito() {
        setCartList([])
        
    }    
  return <cartContext.Provider value={{
      cartList,
      agregarAlCarrito,
      vaciarCarrito,
      sumaTotal,
      cantidad,
      borrarItem
  }} >
        {children}
  </cartContext.Provider>;
}

export default CartContextProvider;


