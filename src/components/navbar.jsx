import React from "react";
import {FaUser, FaShoppingCart} from "react-icons/fa";
import {Container, Navbar, Nav} from 'react-bootstrap';
const Navigation=()=>{
    return(
    <Navbar bg="light" variant="light" expand="lg" 
    className="position-absolute top-15 start-50 translate-middle-x w-75 shadow-lg rounded px-4 py-2 mt-3">
        <Container>
            <Navbar.Brand href="#" className="fw-bold">Food APP</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav"/>
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                    <Nav.Link href="#" className="fw-semibold">Home</Nav.Link>
                    <Nav.Link href="#" className="fw-semibold">Menu</Nav.Link>
                </Nav>
                <Nav className="ms-auto">
                    <Nav.Link href="cart" className="d-flex align-items-center gap-2">
                        <FaShoppingCart size={20}/> Cart
                    </Nav.Link>
                    <Nav.Link href="profile"className="d-flex align-items-center gap-2">
                        <FaUser size={20}/> Profile
                    </Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Container>
    </Navbar>
    );
}
export default Navigation;