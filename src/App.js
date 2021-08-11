import { Component } from 'react';
import FormularioCadastro from './components/FormularioCadastro';
import ListaDeNotas from './components/ListaDeNotas'
import ListaDeCategorias from './components/ListaDeCategorias'
import "./assets/App.css";
import './assets/index.css';
import Categorias from './dados/Categorias';
import ArrayNotas from './dados/Notas';

export default class App extends Component{

  constructor() {
    super();
    
    this.categorias = new Categorias();
    this.notas = new ArrayNotas();
  }

  render(){
    return (
      <section className="conteudo">
        <FormularioCadastro
          categorias={this.categorias.categorias}
          criarNota={this.notas.criarNota}
        />
        
        <main className="conteudo-principal">
          
          <ListaDeCategorias
            adicionarCategoria={this.categorias.adicionarCategoria}
            categorias={this.categorias.categorias}
          />
          
          <ListaDeNotas
            apagarNota={this.notas.apagarNota}
            notas={this.notas.notas}
          />
          
        </main>
      </section>
    );
    }
}

