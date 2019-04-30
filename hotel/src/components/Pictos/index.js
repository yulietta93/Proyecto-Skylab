import React, { Component } from "react";

const ListPictos = props => (
  <div className="pictos-container">
    <img className="picto-list-1" src={props.picto01} width="3%" />
    <img className="picto-list-2" src={props.picto02} width="3%" />
    <img className="picto-list-3" src={props.picto03} width="3%" />
    <img className="picto-list-4" src={props.picto04} width="3%" />
    <img className="picto-list-5" src={props.picto05} width="3%" />
    <img className="picto-list-6" src={props.picto06} width="3%" />
    <img className="picto-list-7" src={props.picto07} width="3%" />
    <img className="picto-list-8" src={props.picto08} width="3%" />
  </div>
);

export default ListPictos;
