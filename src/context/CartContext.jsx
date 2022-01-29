import { createContext } from "react";
export const CartContext = createContext([])

function CartContextProvider ({ children }) {

    return <CartContext.Provider>
    {children}
    </CartContext.Provider>
}

export default CartContextProvider;