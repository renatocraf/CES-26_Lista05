import React, {Component, useReducer} from 'react'
import axios from 'axios'
//import Formulario from '../components/templates/Formulario'
import Tabela from '../components/templates/Tabela'

const baseUrl = 'http://localhost:3030/usuarios'
const initialState = {
    usuario:{nome:'',idade:''},
    list:[],
    mostrar:true,
    cadastro:'Ocultar'
}

export default class UserCrud extends Component{

    state = {...initialState}
    componentWillMount() {
        axios(baseUrl).then(resp => {
            this.setState({ list: resp.data })
        })
    }

    save(e){
        const usuario = this.state.usuario
        console.log(usuario)
        if(usuario['nome']!=='' && !isNaN(usuario['idade']) && usuario['idade']>=18){
            console.log("Condições Válidas")
            const method = 'post'
            const url = baseUrl
            axios[method](url,usuario)
                .then(resp=>{
                    const list = this.getUpdateList(resp.data)
                    this.setState({usuario:initialState.usuario, list})
                })
        }else{
            console.log("Condições Inválidas")
        }
        
    }

    updateField(event){
        const usuario = { ...this.state.usuario }
        usuario[event.target.name] = event.target.value
        this.setState({ usuario })
    }

    renderForm(){
        return(
            <aside className="formulario">
                <form>
                    <label id="label1">Nome: </label>
                    <input 
                        required 
                        type="text" 
                        name="nome" 
                        onChange={e => this.updateField(e)} 
                        placeholder="Digite seu nome"></input>
                    <label id="label2">Idade: </label>
                    <input 
                        required 
                        min="18" 
                        onChange={e => this.updateField(e)} 
                        type="number" 
                        name="idade" 
                        placeholder="Digite sua idade"></input>
                    <button type="submit" className="btn btn-primary"        
                        onClick= {e=>this.save(e)}>
                        Enviar
                    </button>
                </form>
            </aside>        
        )
    }

    renderRows(){
        return this.state.list.map(usuario =>{
            return(
                <tr chave = {usuario.id}>
                    <td>{usuario.id}</td>
                    <td>{usuario.nome}</td>
                    <td>{usuario.idade}</td>
                </tr>
            )
        })
    }

    renderTable(){
        return(
            <table className="table table-striped">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Nome</th>
                        <th>Idade</th>
                    </tr>
                </thead>
                <tbody>
                    {this.renderRows()}
                </tbody>
            </table>
        )
        
    }
    
    getUpdateList(usuario){
        const list = this.state.list.filter(u=> u.id !==usuario.id)
        list.unshift(usuario)
        return list

    }
    
    verCadastros(){
        if(this.state.mostrar === false)
            this.setState({mostrar:true,cadastro:'Ocultar'})
        else
            this.setState({mostrar:false,cadastro:'Mostrar'})
    }

    render(){
        return(
            <div>
                {this.renderForm()}
                <button id="cadastros" className="btn btn-primary" onClick={e=>this.verCadastros(e)}>{this.state.cadastro} Cadastros</button>
                {this.state.mostrar && this.renderTable()}
            </div>
        )
    }

}