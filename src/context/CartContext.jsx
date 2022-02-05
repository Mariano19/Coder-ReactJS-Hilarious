/* import { createContext } from "react";
export const CartContext = createContext([])

function CartContextProvider ({ children }) {

    return <CartContext.Provider>
    {children}
    </CartContext.Provider>
}

export default CartContextProvider; */

import { createContext, useState, useContext } from 'react';

const CartContext = createContext(null)

export const useCartContext = () => useContext(CartContext)

export const CartContextProvider = ({ children }) => {
    const [products, setProducts] = useState([])


    function addProduct(element) {
        if (avoidDuplicate(element)) {
            const changeCount = [...products]
            changeCount.forEach(x => {
                if (x.name === element) {
                    x.quantity += 1
                }
            })
            return setProducts(changeCount)
        }
        return setProducts([...products, { name: element, quantity: 1 }])
    }

    const avoidDuplicate = (parametro) => {
        const findCharacter = products.find((i) => {
            return i.name === parametro
        })
        return findCharacter
    }

    const deleteOne = (item) => {
        const eliminarItem = [...products]
        const itemEliminado = eliminarItem.filter(x => x.name !== item)
        console.log('se ejecuta')
        return setProducts(itemEliminado)
    }

    const deleteAll = () => setProducts([])

    return (
        <CartContext.Provider value={{ addProduct, products, deleteOne, deleteAll }}>
            {children}
        </CartContext.Provider>
    )

    
}

export default CartContextProvider