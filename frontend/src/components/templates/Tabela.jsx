import './Tabela.css'
import React from 'react'

export default props =>
<aside className="tabela">
    <button id="cadastros" className="btn btn-primary">Ver Cadastros</button>
    
    <table className="table table-striped">
    <thead>
        <tr>
        <th scope="col">Id</th>
        <th scope="col">Nome</th>
        <th scope="col">Idade</th>
        </tr>
    </thead>
    <tbody>
        <tr>
        <th scope="row">1</th>
        <td>Mark</td>
        <td>Otto</td>
        </tr>
        <tr>
        <th scope="row">2</th>
        <td>Jacob</td>
        <td>Thornton</td>
        </tr>
        <tr>
        <th scope="row">3</th>
        <td>Larry</td>
        <td>the Bird</td>
        </tr>
    </tbody>
    </table>
</aside>