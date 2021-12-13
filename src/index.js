import React from 'react';
import ReactDOM from 'react-dom';
import { Auth0Provider } from "@auth0/auth0-react";
import Container from './containers/Container';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import './index.css';

ReactDOM.render(
  <Auth0Provider
      domain="dev-8k1-s7x5.us.auth0.com"
      clientId="OMxkv7DfEKpWUJnQiSm3bfIXSOqbpE87"
      redirectUri={window.location.origin}
    >
       <Container />
  </Auth0Provider>,
  document.getElementById('root')
);
