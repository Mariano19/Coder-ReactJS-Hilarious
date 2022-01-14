import React from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import NavDropdown from 'react-bootstrap/NavDropdown'
import Cartwidget from '../CartWidget/Cartwidget'


const NavBar = () => {
    return (
        <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
            <Container>
                <Navbar.Brand href="#home">
                    <img src="assets/logo.jpg"/>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="#features">Contacto</Nav.Link>
                        <Nav.Link href="#pricing">Nosotros</Nav.Link>
                        <NavDropdown title="Articulos" id="collasible-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">Lentes</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">Gorros</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Bufandas</NavDropdown.Item>
                            {/* <NavDropdown.Divider />
                            <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item> */}
                        </NavDropdown>
                    </Nav>
                    <Nav>
                        <Nav.Link>
                            <Cartwidget></Cartwidget>
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default NavBar