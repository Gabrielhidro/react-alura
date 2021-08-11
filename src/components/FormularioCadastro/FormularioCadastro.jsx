import { Component } from "react";
import "./estilo.css";

export default class FormularioCadastro extends Component {
  constructor(props) {
    super(props);
    this.titulo = "";
    this.texto = "";
    this.categoria = "Sem Categoria";
  }

  handleMudancaCategoria(evento) {
    evento.stopPropagation();
    this.categoria = evento.target.value;
  }

  handleChange(event) {
    event.stopPropagation();
    this.titulo = event.target.value;
  }

  handleChangeText(event) {
    event.stopPropagation();
    this.texto = event.target.value;
  }

  criarNota(event) {
    event.preventDefault();
    event.stopPropagation();

    this.props.criarNota(this.titulo, this.texto, this.categoria);
  }

  render() {
    return (
      <form className="form-cadastro" onSubmit={this.criarNota.bind(this)}>
        <select
          onChange={this.handleMudancaCategoria.bind(this)}
          className="form-cadastro_input"
        >
          <option>Sem categoria</option>
          {this.props.categorias.map((categoria) => {
            return <option>{categoria}</option>;
          })}
        </select>
        <input
          type="text"
          placeholder="Título"
          className="form-cadastro_input"
          onChange={this.handleChange.bind(this)}
        />
        <textarea
          rows={15}
          placeholder="Escreva sua nota..."
          className="form-cadastro_input"
          onChange={this.handleChangeText.bind(this)}
        />
        <button className="form-cadastro_input form-cadastro_submit">
          Criar nota
        </button>
      </form>
    );
  }
}
