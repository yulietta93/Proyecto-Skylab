import React, { Component } from "react";
import ListRoomsHome from "./index.js";

export default class RoomsHome extends Component {
  constructor() {
    super();
    this.state = {
      list: [
        {
          imagenUrl:
            "https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80",
          title: "Junior Suite",
          description:
            "With all the amenities you need.For you, your family and your friends",
          picto: "https://image.flaticon.com/icons/png/512/114/114833.png",
          picto2: "https://image.flaticon.com/icons/png/512/114/114833.png",
          picto3: "https://image.flaticon.com/icons/png/512/114/114833.png",
          price: "from 150€/night"
        },
        {
          imagenUrl:
            "https://images.unsplash.com/photo-1522061634923-98236ee38c8d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=658&q=80",
          title: "Double Room",
          description:
            "Perfect for couples or people who come to NN accompanied",
          picto: "https://image.flaticon.com/icons/png/512/114/114833.png",
          picto2: "https://image.flaticon.com/icons/png/512/114/114833.png",
          picto3: "https://image.flaticon.com/icons/png/512/114/114833.png",
          price: "from 250€/night"
        },

        {
          imagenUrl:
            "https://images.unsplash.com/photo-1519449556851-5720b33024e7?ixlib=rb-1.2.1&auto=format&fit=crop&w=1502&q=80",
          title: "Room Premium",
          description:
            "Immerse yourself in the true NN by opening the doors of the terrace",
          picto: "https://image.flaticon.com/icons/png/512/114/114833.png",
          picto2: "https://image.flaticon.com/icons/png/512/114/114833.png",
          picto3: "https://image.flaticon.com/icons/png/512/114/114833.png",
          price: "from 300€/night"
        }
      ]
    };
  }

  render() {
    return (
      <div className="Container">
        <h2 className="titulo-list-room">
          Find your room in a small <br /> oasis in the middle of <br /> nature{" "}
        </h2>
        ,
        {this.state.list.map(element => (
          <ListRoomsHome
            imagenUrl={element.imagenUrl}
            title={element.title}
            description={element.description}
            picto={element.picto}
            picto2={element.picto2}
            picto3={element.picto3}
            price={element.price}
          />
        ))}
        <button onClick=""> Book now </button> 
        <button onClick=""> Book now </button>
        <button onClick=""> Book now </button>
      </div>
    );
  }
}
