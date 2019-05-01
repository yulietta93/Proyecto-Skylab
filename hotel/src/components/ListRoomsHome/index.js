import React, { Component } from "react";

const ListRoomsHome = props => (
  <div className="container">

    <img className="image-rooms" src={props.imagenUrl} />
    <img className="image-rooms2" src={props.image2} />
    <img className="image-rooms2" src={props.image3} />
    <h3>{props.title} </h3>
    <h3>{props.title2} </h3>
    <p>{props.description} </p>
    <img className="picto" src={props.picto} width="4%" />
    <img className="picto2" src={props.picto2} width="4%" />
    <img className="picto3" src={props.picto3} width="4%" />
    <span>{props.price}</span>
  </div>

);

export default ListRoomsHome;
