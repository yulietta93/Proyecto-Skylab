import React, { Component } from "react";
import ListPictos from "./index.js";
import "./pictos.scss";
import "bootstrap/dist/css/bootstrap.css";

export default class PictosHome extends Component {
  constructor() {
    super();
    this.state = {
      listPictos: [
        {
          picto01: "https://image.flaticon.com/icons/png/512/121/121800.png",
          picto02: "https://image.flaticon.com/icons/png/512/121/121800.png",
          picto03: "https://image.flaticon.com/icons/png/512/121/121800.png",
          picto04: "https://image.flaticon.com/icons/png/512/121/121800.png",

        },
      ],
      listPictos2: [
        {
          picto05: "https://image.flaticon.com/icons/png/512/121/121800.png",
          picto06: "https://image.flaticon.com/icons/png/512/121/121800.png",
          picto07: "https://image.flaticon.com/icons/png/512/121/121800.png",
          picto08: "https://image.flaticon.com/icons/png/512/121/121800.png",
        },
      ]

    };
  }

  render() {
    return (
      <div className="container-pictos">
        <h2 className="titulo-list-picto">
        Pictogramas generales <br/>de servicios que aporta <br/>el hotel en general
        </h2>
        <div className="pictos-list">
        {this.state.listPictos.map(element => (
          <ListPictos
            picto01={element.picto01}
            picto02={element.picto02}
            picto03={element.picto03}
            picto04={element.picto04}
   
          />
        ))}
</div>
<div className="pictos-list2">

        {this.state.listPictos2.map(element => (
          <ListPictos
            picto05={element.picto05}
            picto06={element.picto06}
            picto07={element.picto07}
            picto08={element.picto08}
          />
        ))}
      </div>
      </div>
    );
  }
}
