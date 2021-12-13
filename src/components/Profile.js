import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import Cargando from "./Cargando";
import { ImagenProfile } from "../styles/Agregar.elements";

export const Profile = () => {
  const { user, isAuthenticated, isLoading } = useAuth0();

  if (isLoading) {
    return <div><Cargando /></div>;
  }

  return (
    isAuthenticated && (
      <div>
        <ImagenProfile src={user.picture} alt={user.name} title={user.name}/>
      </div>
    )
  );
};