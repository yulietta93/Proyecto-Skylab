import React, { Component } from "react";

const ListRoomsHome = props => (
  <div className="rooms-container">
    <div className="image-rooms-home">
      <img className="image-rooms" src={props.imagenUrl} width="20%"/>
    </div>
    <div className="content">
      <h3>{props.title} </h3>
      <p>{props.description} </p>
      <img className="picto" src={props.picto} width="2.5%"/>
      <img className="picto2" src={props.picto2} width="2.5%" />
      <img className="picto3" src={props.picto3}  width="2.5%"/>
      <span>{props.price}</span>
    </div>
  </div>
);

export default ListRoomsHome;
