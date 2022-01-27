import { useState } from "react";


function ItemCount({ initial, stock, onAdd }) {
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

    return (
        <div className="buttons">
            <div>
                <p>En stock</p>
            </div>

            <div className="button-count">
                <button className="btn btn-outline-primary" onClick={handlerRestar}> - </button>
                <div className="contador">
                    {contador}
                </div>
                <button className="btn btn-outline-primary" onClick={handleAumentar}> + </button>
            </div>

            <div className="button-add">
                <button className="btn btn-primary btn-block" onClick={addToCart} >Agregar</button>
            </div>            
        </div>
    )
}

export default ItemCount;
