import React, { Component } from 'react'
import habitacion from "./habitacion.jpg";

import "./listRooms.css";


export default class ListRoomsHome extends Component {
  constructor(props) {
    super(props);

    this.state = {
  
    }
  }

  render(){
      return(
        <h2 className="titulo-list-room">Find your room in a small <br/> oasis in the middle of <br/> nature </h2>,
        <img src ={habitacion} alt="habitacion"  className="image-room-home" />
      )
  }
}


// Añadir Botones con Funciones