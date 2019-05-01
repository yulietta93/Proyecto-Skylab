import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./home.scss";
import "bootstrap/dist/css/bootstrap.css";

//image
import piscina from "../image/piscina.jpg";

//componentes
import Header from "../components/Header/header";
import Footer from "../components/Footer/Footer";
import PictosHome from "../components/Pictos/PictosHome";

export default class Servicios extends Component {
  render() {
    return (
      <div>
        <Header />

        <div className="section01">
            <h2> Discover the real <br /> ipsum nature!</h2>
            <p className="text-service">
               Lorem ipsum dolor sit amet consectetur adipiscing elit nibh
               venenatis, tellus malesuada tempor curabitur iaculis ultricies nulla
               lectus rutrum porttitor. Integer pellentesque nascetur turpis semper
               pulvinar nisl sodales vivamus ligula, luctus vulputate tristique
               torquent curae nulla placerat mi curabitur suscipit, nostra cras
               euismod at.</p>
          <img src={piscina} alt="img-destacado-room" className="img-destacado-room"width="20%"/>
          <button onClick="">Boow now</button>
        </div>

        <div className="section02">
            <h2>Find your room in a <br/>small oasis in the <br/>middle of nature</h2>
            <img src={piscina} alt="img-destacado-room2" className="img-destacado-room2"width="20%"/>
            <img src={piscina} alt="img-destacado-room3" className="img-destacado-room3"width="20%"/>
            <p className="text-service02">Lorem ipsum dolor sit amet consectetur adipiscing elit nibh venenatis </p>
            <button onClick="">Boow now</button>
        </div>

        <PictosHome />

        <div className="section03">
          <h2>Reward yourself with a hot <br/>shower after a long day and then<br/>slide in-between the sheets of our <br/>incredible beds.</h2>
          <img src={piscina} alt="img-destacado-room4" className="img-destacado-room4" width="20%"/>
          <button onClick="">Boow now</button>
        </div>

        <Footer />
      </div>
    );
  }
}
