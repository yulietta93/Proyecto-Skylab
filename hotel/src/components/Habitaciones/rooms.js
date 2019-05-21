/*import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";

import "./rooms.scss";

const ListRoomsHome = props => (
 

        {
          imagenUrl:
            "https://images.unsplash.com/photo-1552902019-ebcd97aa9aa0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=668&q=80"
          image2:
            "https://images.unsplash.com/photo-1549638441-b787d2e11f14?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80"
          image3:
            "https://images.unsplash.com/photo-1545039986-c631605fb605?ixlib=rb-1.2.1&auto=format&fit=crop&w=668&q=80"
          title: "Room 02",
          title2: "Standar",
          description:
            Lorem ipsum dolor sit amet consectetur adipiscing elit inceptos, in donec nec tellus sagittis neque sed posuere sem, hac litora torquent luctus nullam dapibus porttitor. Bibendum a sociis interdum nec cubilia maecenas
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
      <div className="map-rooms">
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
        

          <div className="viewmore-rooms-room02">
          <Link to="/habitaciones/habitacion02">
            <button className="button-deital-rooms">Detail</button>
          </Link>
          </div>

          <div className="viewmore-rooms-room03">
          <Link to="/habitaciones/habitacion03">
            <button className="button-deital-rooms"> Detail</button>
          </Link>
        </div>
      </div>
    );
  }
}
*/