import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import Cabecalho from './header';
import Formulario from './formulario';
import Dados from './dadoscoletados';


ReactDOM.render(
  <React.StrictMode>
    <Cabecalho/>
    <Formulario/>
    <Dados/>

  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
