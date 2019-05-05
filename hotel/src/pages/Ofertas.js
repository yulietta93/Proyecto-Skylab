import React, { Component } from "react";
import { Link } from "react-router-dom";

import './ofertas.scss'

import "bootstrap/dist/css/bootstrap.css";


//componentes
import Header from "../components/Header/header";
import Footer from "../components/Footer/Footer";


const OfferLeft = props => (
  <div className="offer-left">
    <h3 className="tittle-offer-left">{props.title}</h3>
    <img className="image-offer-left" src={props.imageOffer01} width="20%" />
    <p className="description-offer-left">{props.descriptionOffer} </p>
    <button className="button-offer-left">Boow Now</button>
  </div>
);

const OfferRigth = props => (
  <div className="offer-right">
  <h3 className="tittle-offer-right">{props.title}</h3>
  <img className="image-offer-right" src={props.imageOffer01} width="20%" />
  <p className="description-offer-right">{props.descriptionOffer} </p>
  <button className="button-offer-right">Boow Now</button>
</div>
);

export default class Ofertas extends Component {
  constructor() {
    super();
    this.state = {
      listLeft: [
        {
          title:
            "Reward yourself with a hot shower after a long day and then slide in-between the sheets of our incredible beds.",
          imageOffer01:
            "https://images.unsplash.com/photo-1509600110300-21b9d5fedeb7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80",
          descriptionOffer:
            "Lorem ipsum dolor sit amet consectetur adipiscing elit placerat nullam, netus elementum phasellus cursus sagittis mollis arcu. Ultrices habitasse felis at maecenas orci risus turpis, curae pharetra nostra purus tortor pretium justo sodales"
        },
        {
          title:
            "Reward yourself with a hot shower after a long day and then slide in-between the sheets of our incredible beds.",
          imageOffer01:
            "https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80",
          descriptionOffer:
            "Lorem ipsum dolor sit amet consectetur adipiscing elit placerat nullam, netus elementum phasellus cursus sagittis mollis arcu. Ultrices habitasse felis at maecenas orci risus turpis, curae pharetra nostra purus tortor pretium justo sodales"
        }
      ],

      listRight: [
        {
          title:
            "Derecha Reward yourself with a hot shower after a long day and then slide in-between the sheets of our incredible beds.",
          imageOffer01:
            "https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80",
          descriptionOffer:
            "Lorem ipsum dolor sit amet consectetur adipiscing elit placerat nullam, netus elementum phasellus cursus sagittis mollis arcu. Ultrices habitasse felis at maecenas orci risus turpis, curae pharetra nostra purus tortor pretium justo sodales"
        },
        {
          title:
            "Derecha Reward yourself with a hot shower after a long day and then slide in-between the sheets of our incredible beds.",
          imageOffer01:
            "https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80",
          descriptionOffer:
            "Lorem ipsum dolor sit amet consectetur adipiscing elit placerat nullam, netus elementum phasellus cursus sagittis mollis arcu. Ultrices habitasse felis at maecenas orci risus turpis, curae pharetra nostra purus tortor pretium justo sodales"
        }
      ]
    };
  }
  render() {
    return (
      <div>
        <Header />

        {this.state.listLeft.map(element => (
          <OfferLeft
            title={element.title}
            imageOffer01={element.imageOffer01}
            descriptionOffer={element.descriptionOffer}
          />
        ))}

        {this.state.listRight.map(element => (
          <OfferRigth
            title={element.title}
            imageOffer01={element.imageOffer01}
            descriptionOffer={element.descriptionOffer}
          />
        ))}

        <Footer />
      </div>
    );
  }
}
