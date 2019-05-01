// LOGOTIPO
//MENU
//IDIOMAS CON REDUX

import React, {Component} from 'react';
import "./header.scss";

//Imagenes
import logo from "../../image/logo-blanco.svg";
import HomeBackground from "../../image/HomeBackground.jpg";


//<Link to="/">Home</Link>
//<Link to="/habitaciones">Habitaciones</Link>
//<Link to="/ofertas">Ofertas </Link>
//<Link to="/servicios">Servicios</Link>

export default class Header extends Component {
  render() {
    return (

  <div className="cabecera">
          <img src={HomeBackground} alt="background" className="background-home"/>

          <div className="texto-cabecera">
         
     
            <h1>
              Welcome to <br />
              your new home
            </h1>
            <span className="slogan-h1">SloganH11 H1, slogan slogan ipsum</span>
            {/*<span className="discover" >Discover nature  <br/>Scroll more </span>*/}
           
            
            <span className="slogan-vertical">
              Slogan, slogan slogan ipsum
            </span>
          </div>
          <img src={logo} alt="logotipo" width="100%" className="logo" />

        </div>


)
}
}

