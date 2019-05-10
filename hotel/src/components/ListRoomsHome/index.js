import React, { Component } from "react";

const ListRoomsHome = props => (
  <div className="container-rooms-home">
  

    <img className="image-rooms" src={props.imagenUrl}  />
    <img className="image-rooms2" src={props.image2} />
    <img className="image-rooms3" src={props.image3} />

    <h3 className="titlle-rooms-home">{props.title} </h3>
    <p className="description-rooms-home">{props.description} </p>

    <h3 >{props.title2} </h3>
    
    <div className="pictogramas-list-room">
    <img className="picto" src={props.picto} width="15%"/>
    <img className="picto2" src={props.picto2} width="16%" />
    <img className="picto3" src={props.picto3} width="16%" />
    </div>
 

    
    <span className ="price">{props.price}</span>
  </div>

);

export default ListRoomsHome;
