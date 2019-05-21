import React, { Component } from "react";
import { Link } from "react-router-dom";
import "../style/habitacion01.scss";

import Header from "../components/Header/header";
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

export default class Habitacion03 extends Component {
  constructor() {
    super();
    this.state = {
      list: [
        {
          title01: "Junior Premium",
          imageroom:
            "https://www.yurbbanpassage.com/assets/img/gallery/Habitaci%C3%83%C2%B3n%20Yurbban%20Standard/en/detalle_cama_habitacion_standard_yurbban_passage.jpg",
          imageroom2:
            "https://www.yurbbanpassage.com/assets/img/gallery/Habitaci%C3%83%C2%B3n%20Yurbban%20Premium/en/vista_salon_habitacion_standard_yurbban_passage.jpg",
          imageroom3:
            "https://www.yurbbanpassage.com/assets/img/gallery/Habitaci%C3%83%C2%B3n%20Yurbban%20Terrace/en/ventana_terraza_habitacion_terrace_yurbban_passage.jpg",
          descriptionroom:
            "We know that you are far from home, but staying in a hotel also has its perks. As such, we have ensured that this room be equipped with all the necessary services and amenities in order to offer you optimal rest. Furthermore, the Yurbban Premium Terrace is an open window to the Ciutat Vella neighborhood."
        }
      ]
    };
  }

  render() {
    return (
      <div>
        <Header />
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
              Foodie Tour <br /> exploring different bars
              <br />
              with distinct tapas
            </h4>
            <p className="text-destacado-room01">
              We are of the opinion that you have not experienced the true
              Barcelona if you haven´t performed one of the most important
              rituals for the locals: exploring different bars with distinct
              tapas and small dishes.
            </p>
            <img
              src="https://www.yurbbanpassage.com/assets/img/gallery/Experiencias/en/experiencia_foodie_tour_vertical.jpg"
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
