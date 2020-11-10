import {Component} from 'react';
import './header.css';

class Cabecalho extends Component{
    render(){
        return(
            <div id ='inicio'>
                <h1 className="centro"> 5° Série de Programas de CES 26 - 2020</h1>
                <h2 className="centro">Aluno: Carlos Renato de Andrade Figueiredo</h2>
                <h3 className="centro">Turma: 22</h3>
            </div>
        )
    }

}

export default Cabecalho;