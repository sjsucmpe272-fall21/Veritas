import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Auth0Provider } from "@auth0/auth0-react"
import config from "./auth_config.json"
import App from './App';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <Auth0Provider
    domain={config.domain}
    clientId={config.clientId}
    redirectUri={window.location.origin}
  >
  <React.StrictMode>
    <App />
  </React.StrictMode>
  </Auth0Provider>,

  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();