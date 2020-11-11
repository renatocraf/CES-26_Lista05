import './Formulario.css'
import React from 'react'

export default props =>
<aside className="formulario">
    <form method="post">
        <label id="label1">Nome: </label>
        <input required type="text" name="nome" placeholder="Digite seu nome"></input>
        <label id="label2">Idade: </label>
        <input required min="18" type="number" name="idade" placeholder="Digite sua idade"></input>
        <button className="btn btn-primary"        
            onClick= {e=>props.save(e)}>
            Enviar
        </button>
    </form>
</aside>