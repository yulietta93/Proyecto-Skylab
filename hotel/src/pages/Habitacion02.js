import React, { Component } from "react";
import { Link } from "react-router-dom";
import "../style/habitacion01.scss";

import HeaderRoom from "../components/Header/HeaderRoom";
import Footer from "../components/Footer/Footer";
import PictosHome from "../components/Pictos/PictosHome";

const RoomDetail = props => (
  <div className="container-description-room">
    <h2 className="tittle-room-01">{props.title01} </h2>
    <div className="container-room-01">
      <img className="image01-room-01" src={props.imageroom} />
      <img className="image02-room-01" src={props.imageroom2} />
      <img className="image03-room-01" src={props.imageroom3} />
    </div>
    <p className="description-room01">{props.descriptionroom} </p>
  </div>
);

export default class Habitacion02 extends Component {
  constructor() {
    super();
    this.state = {
      list: [
        {
          title01: "Junior Standar",
          imageroom:
            "https://www.yurbbanpassage.com/assets/img/gallery/Habitaci%C3%83%C2%B3n%20Yurbban%20Standard/en/cama_ventana_habitacion_standard_yurbban_passage.jpg",
          imageroom2:
            "https://www.yurbbanpassage.com/assets/img/gallery/Habitaci%C3%83%C2%B3n%20Yurbban%20Standard/en/cama_doble_habitacion_standard_yurbban_passage.jpg",
          imageroom3:
            "https://www.yurbbanpassage.com/assets/img/gallery/Habitaci%C3%83%C2%B3n%20Yurbban%20Standard/en/detalle_habitacion_standard_yurbban_passage.jpg",
          descriptionroom:
            "This room is designed to offer you the best rest and highest comfort considering that you are away from home. Equipped with the services and amenities that we believe necessary, the Yurbban Standard will be your small oasis of disconnection right in the heart of Barcelona."
        }
      ]
    };
  }

  render() {
    return (
      <div>
        <HeaderRoom />
        <div className="container-room">
          <div className="container-map">
            {this.state.list.map(element => (
              <RoomDetail
                title01={element.title01}
                imageroom={element.imageroom}
                imageroom2={element.imageroom2}
                imageroom3={element.imageroom3}
                descriptionroom={element.descriptionroom}
              />
            ))}

            <Link to="/reservation">
              <button className="button-room01 button-deital-rooms">
                Book now
              </button>
            </Link>
          </div>
          <PictosHome />
          <div className="destacado02-room01">
            <h4 className="tittle-destacado02-room01">
              Experiences: Surf <br /> the mountain
              <br />
              and discover
            </h4>
            <p className="text-destacado-room01">
              Campton BCN offers NN clientele their fantastic longboards
              handcrafted in wood with a design inspired by Barcelona and San
              Sebastian. Ultrices habitasse felis at maecenas orci risus turpis,
              curae pharetra nostra purus tortor pretium justo sodales,
            </p>
            <img
              src="https://www.yurbbanpassage.com/assets/img/gallery/Experiencias/en/experiencia_longboard_pack.jpg"
              alt="image04-room-01"
              className="image04-room-01"
            />
          </div>
          <Footer />
        </div>
      </div>
    );
  }
}
