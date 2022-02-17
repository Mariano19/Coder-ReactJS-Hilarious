import React from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import NavDropdown from 'react-bootstrap/NavDropdown'
import Cartwidget from '../CartWidget/Cartwidget'
import { Link } from 'react-router-dom'
import { useCartContext } from '../../context/CartContext'


const NavBar = () => {
    const { cantidad } = useCartContext() 
    return (
        <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
            <Container>
                <Link to='/'>
                    <Navbar.Brand>
                        <img src="assets/logo.jpg"/>
                    </Navbar.Brand>
                </Link>                
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">                        
                        <Link to='/contacto'>Contacto</Link>
                        <Link to='/nosotros'>Nosotros</Link>    
                        <NavDropdown title="Articulos" id="collasible-nav-dropdown">                            
                            <Link to='/categoria/lentes' className="dropdown-item">Lentes</Link>
                            <Link to='/categoria/gorros' className="dropdown-item">Gorros</Link>   
                            {/* <Nav.Link as={Link} to="/contact">anywords</Nav.Link>  
                            <NavDropdown.Item><Link to='/categoria/gorros'>Gorros</Link></NavDropdown.Item>  */}                  
                            {/* <NavDropdown.Divider />
                            <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item> */}
                        </NavDropdown>
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