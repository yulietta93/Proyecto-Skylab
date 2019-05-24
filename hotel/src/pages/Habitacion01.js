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

export default class Habitacion01 extends Component {
  constructor() {
    super();
    this.state = {
      list: [
        {
          title01: "Junior Suite",
          imageroom:
            "https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80",
          imageroom2:
            "https://www.yurbbanpassage.com/assets/img/gallery/Habitaciones/en/detalle_yurbban_passage.jpg",
          imageroom3:
            "https://www.yurbbanpassage.com/assets/img/gallery/Habitaci%C3%83%C2%B3n%20Yurbban%20Standard/en/detalle_bano_habitacion_standard_yurbban_passage.jpg",
          descriptionroom:
            "Reward yourself with a hot shower after a long day and then slide in-between the sheets of our incredible beds."
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
              Reward yourself with a <br /> hot shower after a long day and
              <br /> then slide in-between the sheets
              <br /> of our incredible beds.
            </h4>
            <p className="text-destacado-room01">
              Lorem ipsum dolor sit amet consectetur adipiscing elit placerat
              nullam, netus elementum phasellus cursus sagittis mollis arcu.
              Ultrices habitasse felis at maecenas orci risus turpis, curae
              pharetra nostra purus tortor pretium justo sodales,
            </p>
            <img
              src="https://images.unsplash.com/photo-1536954480657-e7e726f2dd90?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=668&q=80"
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
