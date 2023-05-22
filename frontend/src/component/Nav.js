import React from "react";

import { Link } from "react-router-dom";

import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Container from 'react-bootstrap/Container';
import './Nav.css';
const NavMenu = () => {
    return (
        <div>



            <Navbar bg="light" expand="lg">
             
                    <Navbar.Brand href="#home">Dashboard</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link><Link to="/">Product</Link></Nav.Link>
                            <Nav.Link><Link to="/add">Add Product</Link></Nav.Link>
                            <Nav.Link><Link to="/update">update Product</Link></Nav.Link>
                            <Nav.Link><Link to="/signup">Sign Up</Link></Nav.Link>
                            <NavDropdown title="User" id="basic-nav-dropdown">
                                <NavDropdown.Item><Link to="/profile">Profile</Link></NavDropdown.Item>
                                <NavDropdown.Item >
                                    <Link to="/logout">Log Out</Link>
                                </NavDropdown.Item>

                            </NavDropdown>
                        </Nav>
                    </Navbar.Collapse>
               
            </Navbar>
        </div>

    )
}


export default NavMenu;