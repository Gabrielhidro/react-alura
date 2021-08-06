import { Component } from "react";
import CardNota from "../CardNota";

export default class ListaDeNotas extends Component {
  render() {
    return (
      <ul>
        {Array.of("trabalho", "trabalho", "estudo").map((categorias, index) => {
          return (
            <li key={index}>
              <h4>{categorias}</h4>
              <CardNota />
            </li>
          );
        })}
      </ul>
    );
  }
}
