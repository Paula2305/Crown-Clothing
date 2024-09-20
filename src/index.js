import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom'; // mediante la url realiza un seguiumiento del historial de navegacion
import './index.scss';
import App from './App';
import reportWebVitals from './reportWebVitals';

// Selecciona el elemento raíz
const container = document.getElementById('root');

// Crea el root utilizando createRoot
const root = createRoot(container);

// Renderiza tu aplicación
root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
