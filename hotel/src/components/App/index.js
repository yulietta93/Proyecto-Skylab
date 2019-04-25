import React, { Component } from "react";
import HomeBackground from 'HomeBackground.jpg';

class App extends Component {
  render() {
    return (
      <div class="container-home">
        <h1>
          Welcome to <br />your news home
        </h1>
        <div className="cabecera">
          <img src={HomeBackground} alt="logotipo" width="100%" />
        </div>
      </div>
    );
  }
}

export default App;
