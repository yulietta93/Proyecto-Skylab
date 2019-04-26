import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Habitacion01 extends Component {
    render() {
      return (
        <div>
          Habitacion01
          <Link to="/habitaciones/:habitacion01">Habitacion Junior</Link>
        </div>
      )
    }
  }
  