import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.css";

import Header from "../components/Header/header";
import Footer from "../components/Footer/Footer";
import Rooms from "../components/Habitaciones/rooms";
import PictosHome from '../components/Pictos/PictosHome'

export default class Habitaciones extends Component {
    render() {
      return (
        <div>
          <Header/>
          <Rooms/>
          <PictosHome />
          <Footer/>
        </div>
      )
    }
  }
  