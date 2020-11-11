import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'font-awesome/css/font-awesome.min.css'
import React from 'react'
import Formulario from '../components/templates/Formulario'
import Header from '../components/templates/Header'
import Tabela from '../components/templates/Tabela'

import User from '../usuario/User'

export default props =>
<div className="app">
    <div id="vazio"></div>
    <Header></Header>
    <User/>
        
    <div id="vazio2"></div>
</div>