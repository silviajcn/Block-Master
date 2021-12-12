import React from 'react'
import { ContenedorPrincipal, ImagenNoMovie, NoResults } from '../styles/NoMovie.elements'

const NoMovie = () => {
    return (
        <ContenedorPrincipal>
            <ImagenNoMovie src="https://res.cloudinary.com/silviajcn/image/upload/v1638985812/Im%C3%A1genes%20para%20proyectos/SPRING%202/Searching_xvzkbj.png" alt="..." />
            <NoResults>No se encontraron resultados para su busqueda</NoResults>
        </ContenedorPrincipal>
    )
}

export default NoMovie