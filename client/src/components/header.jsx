import React, { useEffect, useState } from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import axios from 'axios';

function Header() {
    const [auth, setAuth] = useState(false);
    useEffect(() => {
        axios.get("http://localhost:8000")
            .then(res => {
                if (res.data == "exist") {
                    setAuth(true)
                }
            })
    }, [])
    return (
        auth ?
            <Navbar expand="lg" className="bg-body-tertiary" bg="dark" data-bs-theme="dark">
                <Container>
                    <Navbar.Brand href="/">UZAIR TRANSPORT AND TOURISM</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav"  >
                        <Nav className="ms-auto">
                            <Nav.Link href="#link" className="me-3">Link</Nav.Link>
                            <NavDropdown title="Account" className="me-auto" id="basic-nav-dropdown" align="end">
                                <NavDropdown.Item href="#action/3.1">Account Info</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="/logout">Logout</NavDropdown.Item>
                            </NavDropdown>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            :
            <Navbar expand="lg" className="bg-body-tertiary" bg="dark" data-bs-theme="dark">
                <Container>
                    <Navbar.Brand href="/">UZAIR TRANSPORT AND TOURISM</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav"  >
                        <Nav className="ms-auto">
                            <Nav.Link href="/login" className="me-3">Sign in</Nav.Link>
                            <Nav.Link href="/register" className="me-3">Register</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
    )
}

export default Header;
