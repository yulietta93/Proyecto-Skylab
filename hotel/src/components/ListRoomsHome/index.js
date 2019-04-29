import React, { Component } from "react";
//import habitacion from "./habitacion.jpg"; //imagen


const ListRoomsHome = (props) => (
  <div className="rooms-container">
  
     <div className="image-rooms-home">
        <img className="image-rooms" src={props.imagenUrl} />
      </div>
      <div className="content">
         <h3>{props.title} </h3>
         <p>{props.description} </p>
         <img className="picto" src={props.picto} />
         <img className="picto2" src={props.picto2} />
         <img className="picto3" src={props.picto3} />
         <span>{props.price}</span>
      </div>
  </div>);

export default ListRoomsHome;




