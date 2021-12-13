import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Search from './Search';
import { Link } from 'react-router-dom';
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
                            className="me-auto my-2 my-lg-0 text-white" style={{ maxHeight: '100px' }} navbarScroll>
                            <Link to="/" className="nav-link text-white me-2">Home</Link>
                            <Link to="/form" className="nav-link text-white me-2 ">Agregar Peliculas</Link>
                            <Link to="/agregadas" className="nav-link text-white me-2">Peliculas agregadas</Link>
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
