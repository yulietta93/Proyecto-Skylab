// LOGOTIPO
//MENU
//IDIOMAS CON REDUX

import React, { Component } from "react";
import "./header.scss";

//Imagenes
import logo from "../../image/logo-blanco.svg";
//import HomeBackground from "../../image/HomeBackground.jpg";

//<Link to="/">Home</Link>
//<Link to="/habitaciones">Habitaciones</Link>
//<Link to="/ofertas">Ofertas </Link>
//<Link to="/servicios">Servicios</Link>

export default class Header extends Component {
  render() {
    return (
      <div className="cabecera">
        <iframe
          src="https://player.vimeo.com/video/120909442?autoplay=1&color=ffffff&title=0&byline=0&portrait=0"
          width="1900"
          height="700"
          frameborder="0"
          allow="autoplay; fullscreen"
          allowfullscreen
          className="video"
        />
        <div className="texto-cabecera">
          <h1>
            Welcome to <br />
            your new home
          </h1>
        </div>
        <img src={logo} alt="logotipo" width="100%" className="logo" />

        <div className="line" />

        <h2 className="title-booknow">
          Reserve a <br />
          room. <br />
          Choose
          <br /> yours!
        </h2>
        <form className="form-book" id="motor" action="">
          <label> Check-in </label>
          <br />
          <input type="date" id="entrada" />
          <br />
          <label> Check-out </label>
          <br />
          <input type="date" id="salida" />
          <br />
          <label> Room </label>
          <br />
          <select name="room" id="room">
            <option value="junior">Junior Suite</option>
            <option value="standar">Junior Suite Standar</option>
            <option value="premium">Junior Suite Premium</option>
          </select>
          <br />  <br />
          <button type="submit">Boow now</button>
        </form>

        <div className="account">
          <h4 className="prueba-sign">Sign in</h4>
          <h4 className="login">Login</h4>
        </div>
      </div>
    );
  }
}
