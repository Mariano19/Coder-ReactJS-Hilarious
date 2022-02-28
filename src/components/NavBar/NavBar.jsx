import React from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import NavDropdown from 'react-bootstrap/NavDropdown'
import Cartwidget from '../CartWidget/Cartwidget'
import { Link } from 'react-router-dom'
import { useCartContext } from '../../context/CartContext'
import './NavBar.css'; 


const NavBar = () => {
    const { cantidad } = useCartContext() 
    return (
        <Navbar collapseOnSelect expand="lg" >
            <Container>
                <Link to='/'>
                    <Navbar.Brand>
                        <button className='brand-title'>Hilarious</button>                   
                    </Navbar.Brand>
                </Link>                
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">                       
                          
                        <NavDropdown title="Temporada" id="collasible-nav-dropdown">                            
                            <Link to='/categoria/verano' className="dropdown-item">Verano</Link>
                            <Link to='/categoria/invierno' className="dropdown-item">Invierno</Link>                               
                        </NavDropdown>                        
                        <Link to='/contacto'>Contacto</Link>
                        <Link to='/nosotros'>Nosotros</Link>  
                    </Nav>
                    <Nav>
                        <Link to='/cart'>
                            {cantidad()}
                            <Cartwidget></Cartwidget>
                        </Link>                        
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default NavBar