import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Home from '../components/Home';
import DetallesMovies from '../components/DetallesMovies';
import Search from '../components/Search';
import FormAgre from '../pages/FormAgre';
import AgregarMovies from '../pages/AgregarMovies';

export default function Container() {

    return (
        <BrowserRouter>
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/details/:movieId" element={<DetallesMovies />} />
                <Route path="/form" element={<FormAgre />} />
                <Route path="/agregadas" element={<AgregarMovies />} />
                <Route path="/search" element={<Search />} />
            </Routes>
        </BrowserRouter>
    )
}