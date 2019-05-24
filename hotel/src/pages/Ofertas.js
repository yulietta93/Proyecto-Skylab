import React, { Component } from "react";
import { Link } from "react-router-dom";

import "../style/ofertas.scss";

import "bootstrap/dist/css/bootstrap.css";

//componentes
import HeaderOffer from "../components/Header/HeaderOffer";
import Footer from "../components/Footer/Footer";

export default class Ofertas extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div>
        <HeaderOffer />
        <div className="contenedor-offer">
          <div className="offer-left">
            <h3 className="tittle-offer-left">
              Reward yourself with a hot shower after a long day and then slide
              in-between the sheets of our incredible beds.
            </h3>
            <img
              className="image-offer-left"
              src="https://images.unsplash.com/photo-1532926381893-7542290edf1d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80"
              width="20%"
            />
            <p className="description-offer-left">
              Lorem ipsum dolor sit amet consectetur adipiscing elit placerat
              nullam, netus elementum phasellus cursus sagittis mollis arcu.
              Ultrices habitasse felis at maecenas orci risus turpis, curae
              pharetra nostra purus tortor pretium justo sodales{" "}
            </p>
            <Link to="/reservation">
              <button className="button-offer-left button-room01 button-deital-rooms">
                Book now
              </button>
            </Link>
          </div>

          <div className="offer-left">
            <h3 className="tittle-offer-left">
              Reward yourself with a hot shower after a long day and then slide
              in-between the sheets of our incredible beds.
            </h3>
            <img
              className="image-offer-left"
              src="https://images.unsplash.com/photo-1424847651672-bf20a4b0982b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2850&q=80"
              width="20%"
            />
            <p className="description-offer-left">
              Lorem ipsum dolor sit amet consectetur adipiscing elit placerat
              nullam, netus elementum phasellus cursus sagittis mollis arcu.
              Ultrices habitasse felis at maecenas orci risus turpis, curae
              pharetra nostra purus tortor pretium justo sodales{" "}
            </p>
            <Link to="/reservation">
              <button className="button-offer-left button-room01 button-deital-rooms">
                Book now
              </button>
            </Link>
          </div>

          <div className="container-offer-right">
            <div className="offer-right">
              <img
                className="image-offer-right"
                src="https://images.unsplash.com/photo-1492552181161-62217fc3076d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1673&q=80"
                width="20%"
              />
              <h3 className="tittle-offer-right">
                Reward yourself with a hot shower after a long day and then
                slide in-between the sheets of our incredible beds.
              </h3>
              <p className="description-offer-right">
                Lorem ipsum dolor sit amet consectetur adipiscing elit placerat
                nullam, netus elementum phasellus cursus sagittis mollis arcu.
                Ultrices habitasse felis at maecenas orci risus turpis, curae
                pharetra nostra purus tortor pretium justo sodales{" "}
              </p>
              <Link to="/reservation">
                <button className="button-offer-right button-room01 button-deital-rooms">
                  Book now
                </button>
              </Link>
            </div>

            <div className="offer-right">
              <img
                className="image-offer-right"
                src="https://images.unsplash.com/photo-1509600110300-21b9d5fedeb7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80"
                width="20%"
              />
              <h3 className="tittle-offer-right">
                Reward yourself with a hot shower after a long day and then
                slide in-between the sheets of our incredible beds.
              </h3>
              <p className="description-offer-right">
                Lorem ipsum dolor sit amet consectetur adipiscing elit placerat
                nullam, netus elementum phasellus cursus sagittis mollis arcu.
                Ultrices habitasse felis at maecenas orci risus turpis, curae
                pharetra nostra purus tortor pretium justo sodales{" "}
              </p>
              <Link to="/reservation">
                <button className="button-offer-right button-room01 button-deital-rooms">
                  Book now
                </button>
              </Link>
            </div>
          </div>

          <Footer />
        </div>
      </div>
    );
  }
}
