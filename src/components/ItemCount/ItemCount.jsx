import { useState } from "react";
import './itemCount.css'
import { BsChevronDown,BsChevronUp } from "react-icons/bs";


function ItemCount({ initial, stock, onAdd, categoria }) {
    const [contador, setcontador] = useState(initial);
    

    const handleAumentar = () => {
        if (contador < stock) {
            setcontador(contador + 1)
        }
    }

    const handlerRestar = () => {
        if (contador > initial) {
            setcontador(contador - 1)
        }
    }

    const addToCart = () => {
        onAdd(contador)
    }

    /* //
    const{addProduct} = useCartContext(); */

    return (
        <div className="buttons">
            <div>
                <span>En stock</span>
                <div className="button-count">
                    <button type="button" className="btn btn-light contador1" onClick={handlerRestar}> <BsChevronDown/> </button>                    
                    <div className="contador">
                        {contador}
                    </div>
                    <button type="button" className="btn btn-light contador2"onClick={handleAumentar}> <BsChevronUp/> </button>
                </div>
            </div>            

            <div className="button-add">   
                {categoria === 'verano'?
                <button className='button-principal' onClick={addToCart}>Agregar</button>
                :
                <button className='button-principal-winter' onClick={addToCart}>Agregar</button>    
                }        
            </div>            
        </div>
    )
}

export default ItemCount;
