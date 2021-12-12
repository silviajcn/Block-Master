import React from 'react';
import { ListAgregar } from '../components/ListAgregar';
import { ContanedorPrincipalForm } from '../styles/Agregar.elements';


export default function AgregarMovies() {
    return (
        <ContanedorPrincipalForm>
            <ListAgregar />
        </ContanedorPrincipalForm>
    )
}