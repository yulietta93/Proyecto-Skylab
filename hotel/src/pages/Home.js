import React, { Component } from "react";
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
        <div className="container-textAbout">
          <h2 className="about-tittle">
            What's <br /> Naturae?
          </h2>

          <div className="textAbout">
            <p className="p-about">
              {" "}
              We comply with the standards established by European regulations
              to respect sustainability standards, which take into account the
              materials used in construction, energy efficiency and waste
              management. In Naturae you will find from ecological amenities to
              local and seasonal ingredients for restoration.
            </p>
          </div>
        </div>

        <RoomsHome />
        <PictosHome />
        <Gallery />
        <Footer />
      </div>
    );
  }
}
export default Home;
