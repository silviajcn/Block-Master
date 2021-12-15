import React, {useState, useEffect} from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Home from '../components/Home';
import DetallesMovies from '../components/DetallesMovies';
import Search from '../components/Search';
import FormAgre from '../pages/FormAgre';
import AgregarMovies from '../pages/AgregarMovies';
import { url } from '../helpers/urlApi';
import { DetalleAgre } from '../pages/DetalleAgre';

export default function Container() {

    const [movies, setMovies] = useState([])

    useEffect(() => {
        cargarMovies();
    }, [])

    const cargarMovies = async () => {
        //console.log(fetch(url));
        const respuesta = await fetch(url);
        //console.log(respuesta);
        const datos = await respuesta.json();
        //console.log(datos);
        setMovies(datos);
    }

    return (
        <BrowserRouter>
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/details/:movieId" element={<DetallesMovies />} />
                <Route path="/form" element={<FormAgre />} />
                <Route path="/agregadas" element={<AgregarMovies movies={movies}/>} />
                <Route path="/detalles/:id" element={<DetalleAgre detalle={movies}/>}/>
                <Route path="/search" element={<Search />} />
                <Route path="*" element={<Navigate replace to="/"/>} />
            </Routes>
        </BrowserRouter>
    )
}