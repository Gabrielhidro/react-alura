import { Component } from "react";
import CardNota from "../CardNota";
import "./estilo.css";

export default class ListaDeNotas extends Component {
  render() {
    return (
      <ul className="lista-notas">
        {Array.of("trabalho", "trabalho", "estudo").map((categorias, index) => {
          return (
            <li className="lista-notas_item" key={index}>
              <CardNota />
            </li>
          );
        })}
      </ul>
    );
  }
}
