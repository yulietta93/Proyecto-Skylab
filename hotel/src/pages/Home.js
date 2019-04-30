import React, { Component } from "react";
import { Link } from 'react-router-dom';
import "./index.css";

//Imagenes
import logo from "./logo-blanco.svg";
import HomeBackground from "./HomeBackground.jpg";


//componentes
import RoomsHome from '../components/ListRoomsHome/RoomsHome';
import PictosHome from '../components/Pictos/PictosHome';
import Test from '../components/Slider/Test';


class Home extends Component {


  render() {
    return (
      <div class="container-home">
      <img src={logo} alt="logotipo" width="100%" className="logo" />
        <Link to="/">Home</Link>
      <Link to="/habitaciones">Habitaciones</Link>
      <Link to="/ofertas">Ofertas </Link>
      <Link to="/servicios">Servicios</Link>
        <img
          src={HomeBackground}
          alt="background"
          width="100%"
          className="background-home"
        />
        

        <div className="texto-cabecera">
          <h1>
            Welcome to <br />
            your news home
          </h1>
          <span className="slogan-h1">Slogan, slogan slogan ipsum</span>
          <span className="discover">Discover nature <br/> Scroll more</span>
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
            hill or yourcity rooftop! Make<br/> your dream come true, installed in
            one day,<br/> no extra on-site work.
          </p>
        </div>
        <RoomsHome/>
        <PictosHome/>
        <Test/>
      
      </div>
    
      </div>
    );
  }
}

export default Home;
