import {Component} from 'react';
import './formulario.css';
import axios from 'axios';
import {url} from './linkBD';

class Formulario extends Component{
    constructor(props) {
        super(props);
        this.stateInicial = {
            nome: '',
            idade: '',
        };
        this.state = this.stateInicial;
        this.mySubmitHandler = this.mySubmitHandler.bind(this);
    }  

    /*componentWillMount() {
        axios(url).then(resp => {
            this.setState({ list: resp.data })
        })
    }*/

    mySubmitHandler(event){
     /*   event.preventDefault();
        const data ={
            "nome": event.target.nome.value,
            "idade": event.target.idade.value,
        }

        fetch("http://localhost:3030/formSubmit" , {
        method: "POST",
        headers: {
            'Content-type': 'application/json'
        },
        body: JSON.stringify(this.state)
        })
        .then((result) => result.json())
        .then((info) => { console.log(info); })

        this.setState(this.stateInicial) */
        //console.log(this.state)
        /*this.setState({
            nome : "maria",
            idade: "25"});
        const estado = this.state
        const user = this.state.nome;
        const baseurl = 'http://locahost:3030/formSubmit';       
        const method = 'post';*/
        
        /*axios[method](baseurl,estado)
        .then(resp => {
            const list = this.getUpdatedList(resp.data)
        })
        */
        console.log("enviou")
        axios['post']('http://localhost:3030/formSubmit',
        {
            nome:"maria",
           idade: "25"
        })
    }
            


    render(){      
        return(
            <div >
                <div onClick={this.mySubmitHandler}>TESTE</div>
                <form name="formulario" method="POST">
                    <div>
                        <label>Nome: </label>
                        <input type="text" name="nome" required placeholder="Nome"></input>
                    </div>
                    <br/>
                    <div>
                        <label>Idade: </label>
                        <input type="number" name="idade" min="18" required placeholder="Idade" ></input>
                    </div>
                    <br/>
                    <div>
                        <button type="submit" onClick={this.mySubmitHandler}>Enviar</button>
                    </div>
                </form>
            </div>
        )
    }

}

export default Formulario;