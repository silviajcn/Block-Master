import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Search from './Search';
import { NavLink, Link } from 'react-router-dom';
import { Navbar, Nav, Container } from "react-bootstrap";

import { Imagen } from '../styles/Navbar.elements';
import { Profile } from './Profile';

export default function Bootstrap() {
    return (
        <div>
            <Navbar expand="lg" bg="black" text="white">
                <Container fluid>
                    <Link to="/" className="ms-5 me-2"><Imagen src="https://res.cloudinary.com/silviajcn/image/upload/v1638722550/Im%C3%A1genes%20para%20proyectos/SPRING%202/logo-blockBuster_izhbos.png" alt="..."></Imagen></Link>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                        <Nav
                            className="me-auto my-2 my-lg-0" style={{ maxHeight: '100px' }} navbarScroll>
                            <NavLink
                                to="/"
                                className="nav-link me-2"
                                style={({ isActive }) => isActive ? { color: "#ffc107" } : { color: "white" }}
                            >Home</NavLink>
                            <NavLink
                                to="/form"
                                className="nav-link me-2 "
                                style={({ isActive }) => isActive ? { color: "#ffc107" } : { color: "white" }}
                            >Agregar Peliculas</NavLink>
                            <NavLink
                                to="/agregadas"
                                className="nav-link  me-2"
                                style={({ isActive }) => isActive ? { color: "#ffc107" } : { color: "white" }}
                            >Peliculas agregadas</NavLink>
                        </Nav>

                        <Search />

                        <div>
                            <Profile />
                        </div>
                        
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    )
}
