import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";

import "./rooms.scss";

const ListRoomsHome = props => (
  <div className="container-rooms">
    <h3 className="titlle-rooms">{props.title} </h3>
    <h3 className="titlle2-rooms">{props.title2} </h3>
    <div className="container-image">
      <img className="image-rooms-" src={props.imagenUrl} />
      <img className="image-rooms2-" src={props.image2} />
      <img className="image-rooms3-" src={props.image3} />
    </div>
    <p className="description-rooms">{props.description} </p>


  </div>
);

export default class Rooms extends Component {
  constructor() {
    super();
    this.state = {
      list: [
        {
          imagenUrl:
            "https://images.unsplash.com/photo-1518733057094-95b53143d2a7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=630&q=80",
          image2:
            "https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80",
          image3:
            "https://static1.squarespace.com/static/56bc469bc2ea510ab0f63e1f/5b693e20575d1f99a6160d42/5b693e3503ce6404fb721228/1533624374699/samuel-zeller-358919-unsplash.jpg?format=1000w",
          title: "Room 01" ,
          title2: "Junior Suite",
          description:
            "Lorem ipsum dolor sit amet consectetur adipiscing elit inceptos, in donec nec tellus sagittis neque sed posuere sem, hac litora torquent luctus nullam dapibus porttitor. Bibendum a sociis interdum nec cubilia maecenas."
        },
        {
          imagenUrl:
            "https://images.unsplash.com/photo-1552902019-ebcd97aa9aa0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=668&q=80",
          image2:
            "https://images.unsplash.com/photo-1549638441-b787d2e11f14?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80",
          image3:
            "https://images.unsplash.com/photo-1545039986-c631605fb605?ixlib=rb-1.2.1&auto=format&fit=crop&w=668&q=80",
          title: "Room 02",
          title2: "Standar",
          description:
            "Lorem ipsum dolor sit amet consectetur adipiscing elit inceptos, in donec nec tellus sagittis neque sed posuere sem, hac litora torquent luctus nullam dapibus porttitor. Bibendum a sociis interdum nec cubilia maecenas."
        },
        {
          imagenUrl:
            "https://images.unsplash.com/photo-1515094189972-f6f607878a49?ixlib=rb-1.2.1&auto=format&fit=crop&w=668&q=80",
          image2:
            "https://images.unsplash.com/photo-1515362778563-6a8d0e44bc0b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80",
          image3:
            "https://images.unsplash.com/photo-1533093818119-ac1fa47a6d59?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=668&q=80",
          title: "Room 03",
          title2: "Premium",
          description:
            "Lorem ipsum dolor sit amet consectetur adipiscing elit inceptos, in donec nec tellus sagittis neque sed posuere sem, hac litora torquent luctus nullam dapibus porttitor. Bibendum a sociis interdum nec cubilia maecenas."
        }
      ]
    };
  }

  render() {
    return (
      <div>
        {this.state.list.map(element => (
          <ListRoomsHome
            title={element.title}
            title2={element.title2}
            imagenUrl={element.imagenUrl}
            image2={element.image2}
            image3={element.image3}
            description={element.description}
          />
        ))}
        <div className="container-button-viewmore-rooms">
          <Link to="/habitaciones/habitacion01">
            <button className="viewmore-rooms-room01">View More</button>
          </Link>
          <Link to="/habitaciones/habitacion02">
            <button className="viewmore-rooms-room02">View More</button>
          </Link>
          <Link to="/habitaciones/habitacion03">
            <button className="viewmore-rooms-room03">View More</button>
          </Link>
        </div>
      </div>
    );
  }
}
