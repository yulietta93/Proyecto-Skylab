import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Habitaciones extends Component {
    render() {
      return (
        <div>
          Habitaciones
          <Link to="/habitaciones">Habitaciones landing</Link>
        </div>
      )
    }
  }
  