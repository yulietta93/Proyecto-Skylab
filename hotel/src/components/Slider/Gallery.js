import React, { Component } from "react";
import CarouselSlider from "react-carousel-slider";
import "./slider.scss";

export default class Gallery extends Component {
  render() {
    let data = [
      {
        imgSrc:
          "https://images.unsplash.com/photo-1549638441-b787d2e11f14?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80"
      },
      {
        imgSrc:
          "https://images.unsplash.com/photo-1515362778563-6a8d0e44bc0b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80"
      },
      {
        imgSrc:
          "https://images.unsplash.com/photo-1540961403310-79825242906e?ixlib=rb-1.2.1&auto=format&fit=crop&w=668&q=80"
      },
      {
        imgSrc:
          "https://images.unsplash.com/photo-1526880792616-4217886b9dc2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80"
      },
      
    ];

    return (
      <div className="container-slider"> 
        <h2 className="galery-tittle">Spaces...Spaces in which to create and share.</h2>
        <CarouselSlider 
        slideItems={data} />
        <div className="text-gallery">
        <p>A building with roots in the nature, converted into a 
        hotel. A hotel situated above a passage frequented by 
        merchants, neighbors and visitors. We believe in the evolution 
        of spaces and respect for the surrounding areas.
        </p>
      </div>
      </div>
 
    );
  }
}
