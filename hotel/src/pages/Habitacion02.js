import React, { Component } from "react";
import { Link } from "react-router-dom";

import Header from "../components/Header/header";
import Footer from "../components/Footer/Footer";
import piscina from "../image/piscina.jpg";
import PictosHome from '../components/Pictos/PictosHome';


//FALTA AÑADIR SLIDER GALERIA

const RoomDetail = props => (
  <div className="rooms-container">
    <div className="image-rooms-home">
      <img className="image-room-principal" src={props.imageroom} width="20%" />
      <img className="image-room-sec" src={props.imageroom2} width="20%" />
      <img className="image-room-terc" src={props.imageroom3} width="20%" />
    </div>
    <p>{props.descriptionroom} </p>
  </div>
);

export default class Habitacion02 extends Component {
  constructor() {
    super();
    this.state = {
      list: [
        {
          imageroom:
            "https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80",
          imageroom2:
            "https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80",
          imageroom3:
            "https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80",
          descriptionroom:
            "With all the amenities you need.For you, your family and your friends"
        }
      ]
    };
  }

  render() {
    return (
      <div>
        <Header />
        {this.state.list.map(element => (
          <RoomDetail
            imageroom={element.imageroom}
            imageroom2={element.imageroom2}
            imageroom3={element.imageroom3}
            descriptionroom={element.descriptionroom}
          />
        ))}
        <PictosHome />
        <div className="destacado">
          <h4>
            Destacado-Reward yourself with a <br /> hot shower after a long day
            and
            <br /> then slide in-between the sheets
            <br /> of our incredible beds.
          </h4>
          <p className="text-destacado">
            Lorem ipsum dolor sit amet consectetur adipiscing elit placerat
            nullam, netus elementum phasellus cursus sagittis mollis arcu.
            Ultrices habitasse felis at maecenas orci risus turpis, curae
            pharetra nostra purus tortor pretium justo sodales,
          </p>
          <img
            src={piscina}
            alt="img-destacado-room"
            className="img-destacado-room"
            width="20%"
          />
        </div>
        <Footer />
      </div>
    );
  }
}
