import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Habitacion02 extends Component {
    render() {
      return (
        <div>
          Habitacion02
          <Link to="/habitaciones/:habitaciones02">Habitacion 02</Link>
        </div>
      )
    }
  }
  