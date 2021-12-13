import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { BotonLogout } from "../styles/Agregar.elements";

export const LogoutButton = () => {
  const { logout } = useAuth0();

  return (
    <BotonLogout onClick={() => logout({ returnTo: window.location.origin })}>
      Logout
    </BotonLogout>
  );
};