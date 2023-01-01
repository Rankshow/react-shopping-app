import React, { Component } from 'react';

import { Navbar, Nav, Container} from 'react-bootstrap';

class NavbarComp extends Component {
    render() {
        return (
            <div>
                <Navbar bg="secondary" expand="lg">
                <Container>
                    <Navbar.Brand href="#home" flex='d-flex' className='text-white'>Vian apparel</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                    <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ml-auto">
                        <Nav.Link className='text-white ml-auto' href="#home">Home</Nav.Link>
                        <Nav.Link className='text-white ml-auto' href="#about">About</Nav.Link>
                        <Nav.Link className='text-white ml-auto' href="#contact">Contact</Nav.Link>
                        <Nav.Link className='text-white ml-auto' href="#contact">Features</Nav.Link>
                    </Nav>
                    </Navbar.Collapse>
                </Container>
                </Navbar>
        </div>
  );
}
}
export default NavbarComp;