import React, { Component } from "react";
import { Link } from "react-router-dom";
import "../style/home.scss";
import "bootstrap/dist/css/bootstrap.css";

//componentes

import Header from "../components/Header/header";
import RoomsHome from "../components/ListRoomsHome/RoomsHome";
import PictosHome from "../components/Pictos/PictosHome";
import Gallery from "../components/Slider/Gallery";
import Footer from "../components/Footer/Footer";


class Home extends Component {
  render() {
    return (
      <div>
        <Header />
        <div className="container">
          <div className="row align-self-center">
            <div className="tittleAbout col-2">
              <h2 className="col-3 about-tittle">
                What's <br /> NN?
              </h2>
            </div>
            <div className="textAbout col-6">
              Ark-Shelters are prefabricated, fully finished, modular units. By
              a lake, deep in a forest, at the edge of a field, a steep mountain
              hill or yourcity rooftop! Make your dream come true, installed in
              one day, no extra on-site work.
            </div>
          </div>
        </div>
        <RoomsHome />
        <PictosHome />
        <h2 className="galery-tittle">
          Spaces...
          <br />
          Spaces in which <br /> to create and share.
        </h2>
        <Gallery />
        <p className="text-gallery">
          A building with roots in the nature, converted into a <br />
          hotel. A hotel situated above a passage frequented by <br />
          merchants, neighbors and visitors. We believe in the evolution <br />
          of spaces and respect for the surrounding areas.
        </p>
        <Footer />
      </div>
    );
  }
}
export default Home;
