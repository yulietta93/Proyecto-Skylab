// LOGOTIPO
//MENU
//IDIOMAS CON REDUX

import React, {Component} from 'react';
//Imagenes
import logo from "./logo-blanco.svg";
import HomeBackground from "./HomeBackground.jpg";


//<Link to="/">Home</Link>
//<Link to="/habitaciones">Habitaciones</Link>
//<Link to="/ofertas">Ofertas </Link>
//<Link to="/servicios">Servicios</Link>

export default class Header extends Component {
  render() {
    return (

  <div className="cabecera">
          <img
            src={HomeBackground}
            alt="background"
            className="background-home"
          />
          <div className="texto-cabecera">
            <h1>
              Welcome to <br />
              your news home
            </h1>
            <span className="slogan-h1">Slogan, slogan slogan ipsum</span>
            <span className="discover">
              Discover nature <br /> Scroll more
            </span>
            <span className="slogan-vertical">
              Slogan, slogan slogan ipsum
            </span>
          </div>
          <img src={logo} alt="logotipo" width="100%" className="logo" />

        </div>


)
}
}

