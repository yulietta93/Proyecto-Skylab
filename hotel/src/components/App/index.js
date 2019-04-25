import React, { Component } from "react";
import HomeBackground from "./HomeBackground.jpg";
import logo from "./logo-blanco.svg";
import "./index.css";

class App extends Component {
  render() {
    return (
      <div class="container-home">
        <img
          src={HomeBackground}
          alt="background"
          width="100%"
          className="background-home"
        />
        <img src={logo} alt="logotipo" width="100%" className="logo" />

        <div className="texto-cabecera">
          <h1>
            Welcome to <br />
            your news home
          </h1>
          <span className="slogan-h1">Slogan, slogan slogan ipsum</span>
          <span className="discover">Discover nature</span>
          <span className="scroll"> Scroll more</span>
          <span className="slogan-vertical"> Slogan, slogan slogan ipsum</span>
        </div>
        <div class ="container-body">
        <div className="about">
          <h2>
            What's <br />
            NN?
          </h2>
          <p className="text-about">
            Ark-Shelters are prefabricated, fully finished, modular <br/>units. By a
            lake, deep in a forest, at the edge of a field,<br/> a steep mountain
            hill or your<br/>city rooftop! Make your dream come true, installed in
            one day,<br/> no extra on-site work.
          </p>
        </div>
      </div>
      </div>
    );
  }
}

export default App;
