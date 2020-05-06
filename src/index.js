import React from 'react'
import ReactDOM from 'react-dom';
import Header from './components/Header';
import Body from './components/Body'
import 'bootstrap/dist/css/bootstrap.css'

// Declaración de Contenedores
const containerHeader = document.getElementById('header');
const containerBody = document.getElementById('body');

// Inserción en el DOM
ReactDOM.render(<Header />,containerHeader);
ReactDOM.render(<Body/>, containerBody);
