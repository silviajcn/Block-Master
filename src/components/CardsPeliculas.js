import React from 'react';
import { Link } from 'react-router-dom';
import { VotosMovie, ImagenMovie, ContainerIcon } from '../styles/Cards.elements';
import { FaStar } from "react-icons/fa";
import { getMovieImg } from '../url/getMovieImg';


export default function CardsPeliculas({ movie }) {

    const imagenUrl = getMovieImg(movie.poster_path);

    return (
        <div>
            <Link to={"/details/" + movie.id}>
                <ImagenMovie src={imagenUrl} alt={movie.vote_average}/>
                <VotosMovie>
                   <ContainerIcon><FaStar /></ContainerIcon>
                   {movie.vote_average}
                </VotosMovie>
            </Link>
        </div>

    )
}
