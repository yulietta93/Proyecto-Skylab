import React, { Component } from "react";
import CarouselSlider from "react-carousel-slider";
import "./slider.css";

export default class Test extends Component {
  render() {
    let data = [
      {
        imgSrc:
          "https://images.unsplash.com/photo-1553531384-cc64ac80f931?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=80"
      },
      {
        imgSrc:
          "https://images.unsplash.com/photo-1553531384-cc64ac80f931?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=80"
      },
      {
        imgSrc:
          "https://images.unsplash.com/photo-1553531384-cc64ac80f931?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=80"
      },
      {
        imgSrc:
          "https://images.unsplash.com/photo-1553531384-cc64ac80f931?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=80"
      }
    ];

    return (
      <div className="container-slider">
        <CarouselSlider slideItems={data} />
      </div>
    );
  }
}
