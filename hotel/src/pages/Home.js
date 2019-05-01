import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./home.scss";
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
  <Header/>
        <div className="container">
          <div className="row align-self-center">
            <div className="tittleAbout col-2">
              <h2>
                What's <br /> NN?
              </h2>
            </div>
            <div className="textAbout col-auto">
              Ark-Shelters are prefabricated, fully finished, modular <br />
              units. By a lake, deep in a forest, at the edge of a field,
              <br /> a steep mountain hill or yourcity rooftop! Make
              <br /> your dream come true, installed in one day,
              <br /> no extra on-site work.
            </div>
          </div>
        </div>

        <RoomsHome />
        <PictosHome />
        <h2>
          Find your room in a <br />
          small oasis in the <br /> middle of nature
        </h2>

        {/*<Gallery />*/}

        <p className="text-gallery">
          {" "}
          A building with roots in the textile industry, converted into a <br />{" "}
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
