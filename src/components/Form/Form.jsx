import React, { useState } from "react";
import { useCartContext } from "../../context/CartContext";
import Button from "react-bootstrap/esm/Button";
import { Link } from "react-router-dom";
import { addDoc, collection, documentId, getDocs, getFirestore, query, where, writeBatch } from "firebase/firestore";

const Form = () => {

    const { cartList, vaciarCarrito, sumaTotal, borrarItem } = useCartContext()
    const [id, setId] = useState('')
    const [dataForm, setDataForm] = useState({
        email: '',
        phone: '',
        name: ''
    })


    //
    const realizarCompra = async (e) => {
        e.preventDefault()

        // Nuevo objeto de orders    
        let orden = {}

        orden.buyer = dataForm //{name:'Federico',email: 'f@gmail.com', phone: '1234567890'}
        orden.total = sumaTotal();

        orden.items = cartList.map(cartItem => {
            const id = cartItem.product.id;
            const nombre = cartItem.product.name;
            const precio = cartItem.product.price * cartItem.cantidad;
            const cantidad = cartItem.cantidad

            return {
                id,
                nombre,
                precio,
                cantidad
            }
        })

        const db = getFirestore()
        const ordersCollection = collection(db, 'orders')
        await addDoc(ordersCollection, orden)
            .then(resp => setId(resp.id))


        const queryCollection = collection(db, 'items')


        const queryActulizarStock = query(
            queryCollection,
            where(documentId(), 'in', cartList.map(it => it.product.id))
        )

        const batch = writeBatch(db)

        await getDocs(queryActulizarStock)
            .then(resp => resp.docs.forEach(res => batch.update(res.ref, {
                stock: res.data().stock - cartList.find(item => item.product.id === res.id).cantidad
            })
            ))
            .catch(err => console.log(err))
            .finally(() => {
                setDataForm({
                    email: '',
                    phone: '',
                    name: ''
                })
                vaciarCarrito()
            })
        batch.commit()

    }

    const handleChange = (event) => {
        setDataForm({
            ...dataForm,
            [event.target.name]: event.target.value
        })
    }

    console.log(dataForm);

    return <div>
        {id !== '' && `El id de la orden es : ${id} `}
        <>

            <form
                onSubmit={realizarCompra}
            >
                <input
                    type='text'
                    name='name'
                    placeholder='name'
                    onChange={handleChange}
                    value={dataForm.name}
                />
                <br />
                <input
                    type='number'
                    name='phone'
                    placeholder='tel'
                    onChange={handleChange}
                    value={dataForm.phone}
                />
                <br />
                <input
                    type='email'
                    name='email'
                    placeholder='email'
                    onChange={handleChange}
                    value={dataForm.email}
                />
                <input
                    type='email'
                    name='validarEmail'
                    placeholder='Repetir Email'
                    onChange={handleChange}
                //value={}
                />
                <br />
                <button>Generar Orden</button>
            </form>
        </>       
    </div>





}

export default Form