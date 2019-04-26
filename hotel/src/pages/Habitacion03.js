import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Habitacion03 extends Component {
    render() {
      return (
        <div>
          Habitacion03
          <Link to="/habitaciones/:habitaciones01">Habitacion premium</Link>
        </div>
      )
    }
  }
  