import React, { Component } from "react";
import "./header.scss"
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import { connect } from 'react-redux'
import {setReservation} from '../../redux/actions/reservationActions'
import { withRouter } from 'react-router-dom'
import logo from "../../image/logo-blanco.svg";
import Calendar from "../Calendar/Calendar";

class Header extends Component {
/*
  state = {
    startDate: null,
    endDate: null,
    roomType: null
  }

  handleReservation = () => {
    const {startDate, endDate, roomType} = this.state
    this.props.setReservation({startDate, endDate, roomType})
    this.props.history.push('/reservation')
  }

  handleReservationData = (event) => {

    if(event.target.name === 'startDate' || event.target.name === "endDate") {
      let parsedDate = event.target.value.split("-");
        parsedDate = `${parsedDate[1]}/${parsedDate[2]}/${parsedDate[0]}`
        parsedDate = new Date(parsedDate).getTime()

      const date = {
        displayDate: event.target.value,
        timestamp: parsedDate
      }
        this.setState({[event.target.name]: date})
    }

    if(event.target.name === 'roomType') {
      this.setState({[event.target.name]: event.target.value})
    }

  }*/

  render() {
    return (
      <div className="cabecera">
        <iframe
          src="https://player.vimeo.com/video/120909442?autoplay=1&color=ffffff&title=0&byline=0&portrait=0"
          width="1900"
          height="700"
          frameborder="0"
          allow="autoplay; fullscreen"
          allowfullscreen
          className="video"
        />
        <div className="texto-cabecera">
          <h1>
            Welcome to <br />
            your new home
          </h1>
        </div>
        <img src={logo} alt="logotipo" width="100%" className="logo" />

        <div className="line" />
        <Calendar />
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    setReservation: reservation => dispatch(setReservation(reservation))
  };
};

export default connect(
  null,
  mapDispatchToProps
)(withRouter(Header));