import React, { useEffect, useState } from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';
import { ImagenMovieAgre } from '../styles/Cards.elements';
import { TituloForm } from '../styles/Agregar.elements';
import { url } from '../helpers/urlApi';

export const ListAgregar = () => {

    const [movies, setMovies] = useState([])

    useEffect(() => {
        getData()
    }, [])

    const getData = () => {
        axios.get(url)
            .then(response => {
                setMovies(response.data);
            }).catch(error => {
                console.log(error);
        })
    }
 
    return (
        <div>
            <TituloForm className="text-center">Peliculas agregadas</TituloForm>
            <div>
                <div className='container testimonial-group row'>
                {
                    movies.map(movie => (
                        <div className='col text-center' key={movie.id}>
                        <Link to={`/detalleagre/${movie.id}`}>
                            <ImagenMovieAgre src={movie.poster_path}  alt="..." />
                        </Link>
                        </div>
                    ))
                }
                </div>
            </div>
        </div>
    )
}