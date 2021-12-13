import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { BotonLogin } from "../styles/Agregar.elements";

export const LoginButton = () => {
  const { loginWithRedirect } = useAuth0();

  return <BotonLogin onClick={() => loginWithRedirect()}>Login</BotonLogin>;
};