import { Component } from "react";
import CardNota from "./CardNota";

export default class ListaDeNotas extends Component {
  render() {
    return (
      <ul>
        <CardNota />
        <CardNota />
        <CardNota />
      </ul>
    );
  }
}
