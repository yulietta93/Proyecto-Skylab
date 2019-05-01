import React, { Component } from "react";
import ListRoomsHome from "../ListRoomsHome/index";

export default class Rooms extends Component {
  constructor() {
    super();
    this.state = {
      list: [
        {
          imagenUrl:
            "https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80",
          image2:
            "https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80",
          image3:
            "https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80",
          title: "Room 01",
          title2: "Junior Suite",
          description:
            "Lorem ipsum dolor sit amet consectetur adipiscing elit inceptos, in donec nec tellus sagittis neque sed posuere sem, hac litora torquent luctus nullam dapibus porttitor. Bibendum a sociis interdum nec cubilia maecenas.",
        },
        {
          imagenUrl:
            "https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80",
          image2:
            "https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80",
          image3:
            "https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80",
          title: "Room 01",
          title2: "Standar",
          description:
          "Lorem ipsum dolor sit amet consectetur adipiscing elit inceptos, in donec nec tellus sagittis neque sed posuere sem, hac litora torquent luctus nullam dapibus porttitor. Bibendum a sociis interdum nec cubilia maecenas.",
        },
        {
          imagenUrl:
            "https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80",
          image2:
            "https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80",
          image3:
            "https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80",
          title: "Room 01",
          title2: "Premium",
          description:
          "Lorem ipsum dolor sit amet consectetur adipiscing elit inceptos, in donec nec tellus sagittis neque sed posuere sem, hac litora torquent luctus nullam dapibus porttitor. Bibendum a sociis interdum nec cubilia maecenas.",
        }
      ]
    };
  }

  render() {
    return (
      <div className="Container">
        {this.state.list.map(element => (
          <ListRoomsHome
            imagenUrl={element.imagenUrl}
            image2={element.image2}
            image3={element.image3}
            title={element.title}
            title2={element.title2}
            description={element.description}
          />
        ))}
        <button onClick=""> Book now </button>
        <button onClick=""> Book now </button>
        <button onClick=""> Book now </button>
      </div>
    );
  }
}
