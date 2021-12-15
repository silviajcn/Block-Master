import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ContenedorPrincipal, ContenedorDetails, Poster, DetallesMovie, Title, InglesTitle, NumerosMovie, Votos, Popularidad, Duracion, Sinopsis, Genero } from '../styles/Details.elements';

export const DetalleAgre = ({detalle}) => {
    //console.log(detalle);

    const navegar = useNavigate();

    const params = useParams();
    //console.log(params);
    const { id } = params;
    //console.log(id);

    const buscado = detalle.find(movie => movie.id === Number(id))
    //console.log(buscado);

    const { title, original_title, poster_path, release_date, runtime, overview, genre } = buscado;

    return (
        <ContenedorPrincipal>
            <ContenedorDetails>
                <Poster src={poster_path} alt={title}/>
                <DetallesMovie>
                    <Title>
                        {title}
                    </Title>
                    <InglesTitle>
                        {original_title}
                    </InglesTitle>

                    <NumerosMovie>
                    <Votos>
                       <strong>Votos: </strong> 0
                    </Votos>
                    <Popularidad>
                        <strong>Popularidad: </strong>0 views
                    </Popularidad>
                    </NumerosMovie>

                    <div>
                        <strong>Fecha de estreno: </strong> {release_date}
                    </div>

                    <Duracion>
                        <strong>Duracion:</strong> {runtime} minutos.
                    </Duracion>

                    <Sinopsis>
                        {overview}
                    </Sinopsis>
                    <Genero>
                        <strong>Genero: </strong>
                        {genre}
                    </Genero>
                    
                </DetallesMovie>
            </ContenedorDetails>
        </ContenedorPrincipal>
    )
}