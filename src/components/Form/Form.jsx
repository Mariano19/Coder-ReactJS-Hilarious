import React, { useState } from "react";
import { useCartContext } from "../../context/CartContext";
import Button from "react-bootstrap/esm/Button";
import { addDoc, collection, documentId, getDocs, getFirestore, query, where, writeBatch } from "firebase/firestore";
import  Modal from 'react-bootstrap/Modal'


const Form = () => {

    /* Modal */
    const [show, setShow] = useState(false);      
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [showBuy, setShowBuy] = useState(false);      
    const handleShowBuy = () => setShowBuy(true);

    const { cartList, vaciarCarrito, sumaTotal, borrarItem } = useCartContext()
    const [id, setId] = useState('')
    const [dataForm, setDataForm] = useState({
        email: '',
        phone: '',
        name: ''
    })
        
    const realizarCompra = async (e) => {
        e.preventDefault()
        let orden = {}
        orden.buyer = dataForm
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
                handleShowBuy(true)
            })
        batch.commit()

        

    }
    
    const handleChange = (event) => {
        setDataForm({
            ...dataForm,
            [event.target.name]: event.target.value
        })
    }

    const endOrder = () => vaciarCarrito()

    console.log(dataForm);

    return <div>
        <>
            <Button variant="primary" onClick={handleShow}>
              Confirmar Compra
            </Button>
      
            <Modal
              show={show}
              onHide={handleClose}
              backdrop="static"
              keyboard={false}
            >
                {showBuy == false? 
                
                    <>
                        <Modal.Header closeButton>
                            <Modal.Title>Completa tu orden</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            <form                                
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
                                /> 
                            </form>                
                        </Modal.Body>
                        <Modal.Footer>
                            <Button variant="secondary" onClick={handleClose}>
                            Volver
                            </Button>
                            <Button variant="primary"onClick={realizarCompra}>
                                Realizar pedido
                            </Button>
                            
                        </Modal.Footer>
                    </>
                    :
                    <>
                         <Modal.Header closeButton>
                            <Modal.Title>Gracias por tu compra!</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>                            
                            {id !== '' && `El id de la orden es : ${id} `}                                           
                        </Modal.Body>
                        <Modal.Footer>                            
                            <Button variant="primary"onClick={endOrder}>
                                Volver
                            </Button>                            
                        </Modal.Footer>
                    
                    </>
                }              
            </Modal>
        </>
    
    </div>
}

export default Form
