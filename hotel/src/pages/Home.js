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
                What's <br /> NN?
              </h2>
 

            <div className="textAbout">
             <p className="p-about"> Ark-Shelters are prefabricated, fully finished, modular units. By
              a lake, deep in a forest, at the edge of a field, a steep mountain
              hill or yourcity rooftop! Make your dream come true, installed in
              one day, no extra on-site work.</p>
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
