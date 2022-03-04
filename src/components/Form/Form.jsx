import React, { useState } from "react";
import { useCartContext } from "../../context/CartContext";
import { addDoc, collection, documentId, getDocs, getFirestore, query, where, writeBatch } from "firebase/firestore";
import  Modal from 'react-bootstrap/Modal'
import './form.css'
import Loader from "../loader/loader";
import { Link } from 'react-router-dom';


const Form = () => {

    const [loading, setloading] = useState(false)
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
        setloading(true)        
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
                setloading(false) 
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
            <button className="button-principal" onClick={handleShow}>
              Confirmar Compra
            </button>
      
            
                {showBuy === false? 

                <Modal
                show={show}
                onHide={handleClose}
                backdrop="static"
                keyboard={false}
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered
                >                
                    <>  
                        { loading === false? 
                        <>
                        <Modal.Header closeButton>
                            <div className="title-cart">
                                <span>Completa tus datos</span>
                            </div>                          
                        </Modal.Header>
                        <Modal.Body>
                            <form>
                                <div className="form-name">
                                <input
                                    id="name"
                                    type='text'
                                    name='name'
                                    placeholder=' Nombre'
                                    onChange={handleChange}
                                    value={dataForm.name}
                                />
                                <input
                                    type='text'
                                    name='phone'
                                    placeholder=' Telefono'
                                    onChange={handleChange}
                                    value={dataForm.phone}
                                />
                                </div>    
                                
                                <input
                                    type='email'
                                    name='email'
                                    placeholder=' Email'
                                    onChange={handleChange}
                                    value={dataForm.email}
                                />
                                <input
                                    type='email'
                                    name='validarEmail'
                                    placeholder='Repetir Email'
                                    onChange={handleChange}                                
                                /> 
                                <select className="delivery">                                    
                                    <option value="">Donde lo retiras?</option>
                                    <option value="1">La plata</option>
                                    <option value="2">Comodoro Rivadavia</option>                                    
                                </select>
                            </form>                
                        </Modal.Body>
                        <Modal.Footer>
                            <div className="buttons-cart">
                                <button className='button-secundario' id="bts" onClick={handleClose}>Volver</button>
                                <button className='button-principal' onClick={realizarCompra}>Realizar pedido</button>
                            </div>                            
                        </Modal.Footer>
                        
                        </>              
                        :  
                        <Loader/> 
                        }
                    </>
                </Modal>
                :
                <Modal
                show={show}
                onHide={handleClose}
                backdrop="static"
                keyboard={false}
                dialogClassName="modal-90w"
                aria-labelledby="contained-modal-title-vcenter"
                centered
                >  
                    <div className="modal-end">                                                   
                        <span>Id de la orden : ${id}</span>                                         
                        
                        <div className="footer-btn">  
                            <Link to = '/'> 
                            <button className='button-principal' onClick={endOrder}>Volver al home</button>   
                            </Link>                              
                        </div>     
                    </div>
                </Modal>
            }              
            
        </>
    
    </div>
}

export default Form



{/* <div className="modal-end">                        
<Modal.Header closeButton>
   <Modal.Title>Gracias por tu compra!</Modal.Title>
</Modal.Header>
<Modal.Body className="order-body">                            
   <span>El id de la orden es : ${id}</span>                                         
</Modal.Body>
<Modal.Footer>    
   <button className='button-principal' onClick={endOrder}>Volver al home</button>                                 
</Modal.Footer>     
</div> */}