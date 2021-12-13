import React from 'react';
import { FormAgregar } from '../components/FormAgregar';
import { useAuth0 } from "@auth0/auth0-react";
import { LoginButton } from '../components/Login';
import { LogoutButton } from '../components/Logout';
import { Profile } from '../components/Profile';
import { ContanedorPrincipalForm, ContenedorBtn, ContenedorBtnLogout, ContenedorButon, ContenedorLogin, ContenedorLogout, Fotoperfil } from '../styles/Agregar.elements';


export default function AgregarMovies() {

    const { isAuthenticated } = useAuth0();

    return (
        <div>
            
            <div>
            {isAuthenticated ? (
                <div>
                    
                    <ContanedorPrincipalForm>
                        <FormAgregar />
                    </ContanedorPrincipalForm>
                    
                    <ContenedorLogout>
                        <ContenedorBtnLogout>
                            <Fotoperfil>
                            <Profile />
                            </Fotoperfil>
                            
                            <ContenedorButon>
                                <LogoutButton />
                            </ContenedorButon>
                        </ContenedorBtnLogout>
                    </ContenedorLogout>
                    
                    
                </div>
            ) : (
                <>
                    <ContenedorLogin>
                        <ContenedorBtn>
                            <LoginButton />
                        </ContenedorBtn>
                    </ContenedorLogin>
                </>
            )} 
            </div>   
        </div>
    )
}