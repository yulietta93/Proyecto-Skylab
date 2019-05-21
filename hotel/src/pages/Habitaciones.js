import React, { Component } from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";

import Header from "../components/Header/header";
import Footer from "../components/Footer/Footer";
import PictosHome from "../components/Pictos/PictosHome";
import '../style/rooms.scss';

export default class Habitaciones extends Component {
  render() {
    return (
      <div>
        <Header />
<div className="container-total-room">
        <div className="container-rooms">
          <h3 className="titlle-rooms">Room 01 <br /> Junior Suite</h3>
          <div className="container-image">
            <img className="image-rooms-" src="https://images.unsplash.com/photo-1518733057094-95b53143d2a7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=630&q=80"/>
            <img className="image-rooms2-" src="https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80"/>
            <img className="image-rooms3-" src="https://static1.squarespace.com/static/56bc469bc2ea510ab0f63e1f/5b693e20575d1f99a6160d42/5b693e3503ce6404fb721228/1533624374699/samuel-zeller-358919-unsplash.jpg?format=1000w"/>
          </div>
          <p className="description-rooms">
            Lorem ipsum dolor sit amet consectetur adipiscing elit inceptos, in
            donec nec tellus sagittis neque sed posuere sem, hac litora torquent
            luctus nullam dapibus porttitor. Bibendum a sociis interdum nec
            cubilia maecenas
          </p>

          <div className="viewmore-rooms-room01">
            <Link to="/habitaciones/habitacion01">
              <button className="button-deital-rooms">Detail</button>
            </Link>
          </div>
        </div>

        <div className="container-rooms room02-container">
          <h3 className="titlle-rooms"> Room 02<br /> Standar</h3>
          <div className="container-image"><img className="image-rooms-" src= "https://images.unsplash.com/photo-1552902019-ebcd97aa9aa0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=668&q=80"/>
            <img className="image-rooms2-" src="https://images.unsplash.com/photo-1549638441-b787d2e11f14?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80"/>
            <img className="image-rooms3-" src="https://images.unsplash.com/photo-1545039986-c631605fb605?ixlib=rb-1.2.1&auto=format&fit=crop&w=668&q=80"/>
          </div>
          <p className="description-rooms">
          Lorem ipsum dolor sit amet consectetur adipiscing elit inceptos,
           in donec nec tellus sagittis neque sed posuere sem, hac litora
            torquent luctus nullam dapibus porttitor. Bibendum a sociis interdum 
            nec cubilia maecenas
          </p>

          <div className="viewmore-rooms-room01">
            <Link to="/habitaciones/habitacion02">
              <button className="button-deital-rooms">Detail</button>
            </Link>
          </div>
        </div>

        <div className="container-rooms room03-container">
          <h3 className="titlle-rooms"> Room 03<br /> Premium</h3>
          <div className="container-image">
            <img className="image-rooms-" src=  "https://images.unsplash.com/photo-1515094189972-f6f607878a49?ixlib=rb-1.2.1&auto=format&fit=crop&w=668&q=80"/>
            <img className="image-rooms2-" src= "https://images.unsplash.com/photo-1515362778563-6a8d0e44bc0b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80"/>
            <img className="image-rooms3-" src= "https://images.unsplash.com/photo-1533093818119-ac1fa47a6d59?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=668&q=80"/>
          </div>
          <p className="description-rooms">
          Lorem ipsum dolor sit amet consectetur adipiscing elit inceptos,
           in donec nec tellus sagittis neque sed posuere sem, hac litora
            torquent luctus nullam dapibus porttitor. Bibendum a sociis interdum 
            nec cubilia maecenas
          </p>

          <div className="viewmore-rooms-room01">
            <Link to="/habitaciones/habitacion03">
              <button className="button-deital-rooms">Detail</button>
            </Link>
          </div>
        </div>

        </div>




        <PictosHome />
        <Footer />
      </div>
    );
  }
}
