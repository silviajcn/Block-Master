import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useParams } from 'react-router';
import get from '../url/httpClient';

import { ContenedorPrincipal, ContenedorDetails, Poster, DetallesMovie, Title, InglesTitle, Genero, Popularidad, Sinopsis, Duracion, Votos, NumerosMovie } from '../styles/Details.elements';
import Cargando from './Cargando';
import { getMovieImg } from '../url/getMovieImg';


export default function DetallesMovies() {

    const navegar = useNavigate();

    const { movieId } = useParams();
    //console.log(movieId);

    const [isLoading, setIsLoading] = useState(true);

    const [movie, setMovie] = useState(null);

    useEffect(() => {
        setIsLoading(true);

        get("/movie/" + movieId).then(data => {
            setMovie(data);
            setIsLoading(false);
        })
    }, [movieId]);

    if (isLoading) {
        return <Cargando />
    }

    const imageUrl = getMovieImg(movie.poster_path);

    return (
        <ContenedorPrincipal>
            <ContenedorDetails>
                <Poster src={imageUrl} alt={movie.title}/>
                <DetallesMovie>
                    <Title>
                        {movie.title}
                    </Title>
                    <InglesTitle>
                        {movie.original_title}
                    </InglesTitle>

                    <NumerosMovie>
                    <Votos>
                       <strong>Votos: </strong>{movie.vote_average}
                    </Votos>
                    <Popularidad>
                        <strong>Popularidad: </strong>{movie.popularity} views
                    </Popularidad>
                    </NumerosMovie>

                    <div>
                        <strong>Fecha de estreno: </strong> {movie.release_date}
                    </div>

                    <Duracion>
                        <strong>Duracion:</strong> {movie.runtime} minutos.
                    </Duracion>

                    <Sinopsis>
                        {movie.overview}
                    </Sinopsis>
                    <Genero>
                        <strong>Genero: </strong>
                        {movie.genres.map(genre => genre.name).join(", ")}
                    </Genero>
                    
                    <button className="btn btn-warning btm-sm mx-2" onClick={() => navegar(`/`)}>
                    Atras
                    </button>
                </DetallesMovie>
            </ContenedorDetails>
        </ContenedorPrincipal>
    )
}