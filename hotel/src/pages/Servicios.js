import React, { Component } from "react";
import { Link } from "react-router-dom";
import "../style/servicios.scss";
import "bootstrap/dist/css/bootstrap.css";

//image
import piscina from "../image/piscina.jpg";

//componentes
import HeaderServices from "../components/Header/HeaderServices";
import Footer from "../components/Footer/Footer";

export default class Servicios extends Component {
  render() {
    return (
      <div>
        <HeaderServices />
        <div className="container-service">
          <div className="section01-service">
            <h2 className="title-service-01">
              Discover the real <br /> ipsum nature!
            </h2>
            <p className="text-service">
              Lorem ipsum dolor sit amet consectetur adipiscing elit nibh
              venenatis, tellus malesuada tempor curabitur iaculis ultricies
              nulla lectus rutrum porttitor. Integer pellentesque nascetur
              turpis semper pulvinar nisl sodales vivamus ligula, luctus
              vulputate tristique torquent curae nulla placerat mi curabitur
              suscipit, nostra cras euismod at.
            </p>
            <img src={piscina} alt="img01-service" className="img01-service" />

            <Link to="/reservation">
              <button className="button-service-01 button-room01 button-deital-rooms">
                Book now
              </button>
            </Link>
          </div>

          <div className="section02">
            <h2 className="title-service-02">
              Gastronomy It’s not <br />
              about eating,
              <br /> it’s about enjoying <br />
              every bite.
            </h2>
            <img
              src="https://images.unsplash.com/photo-1521962347155-662d077f81e9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80"
              alt="img02-service"
              className="img02-service"
            />
            <img
              src="https://images.unsplash.com/photo-1514537099923-4c0fc7c73161?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2592&q=80"
              alt="img03-service"
              className="img03-service"
            />
            <p className="text-service02">
              Headed up by a Michelin star chef, our restaurant represents a
              firm commitment to local cuisine and Catalan products that will
              far exceed your expectations
            </p>
            <Link to="/reservation">
              <button className="button-service-01 button-room01 button-deital-rooms">
                Book now
              </button>
            </Link>
          </div>

          <div className="section03">
            <h2 className="title-service-03">
              For casual meetings,
              <br />
              our Multi-purpose Room.
            </h2>
            <img
              src="https://images.unsplash.com/photo-1497366811353-6870744d04b2?ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80"
              alt="img01-service"
              className="img04-service"
            />
            <img
              src="https://images.unsplash.com/photo-1511376979163-f804dff7ad7b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=668&q=80"
              alt="img01-service"
              className="img05-service"
            />
            <p className="text-service03">
              Lorem ipsum dolor sit amet consectetur adipiscing elit nibh
              venenatis, tellus malesuada tempor curabitur iaculis ultricies
              nulla lectus rutrum porttitor.
            </p>
          </div>
        </div>

        <Footer />
      </div>
    );
  }
}
