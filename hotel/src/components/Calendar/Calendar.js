import React, { Component } from "react";
/*import "./header.scss";*/
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import { connect } from 'react-redux'
import {setReservation} from '../../redux/actions/reservationActions'
import { withRouter } from 'react-router-dom'

//Imagenes
import logo from "../../image/logo-blanco.svg";
//import HomeBackground from "../../image/HomeBackground.jpg";

//<Link to="/">Home</Link>
//<Link to="/habitaciones">Habitaciones</Link>
//<Link to="/ofertas">Ofertas </Link>
//<Link to="/servicios">Servicios</Link>

class Calendar extends Component {

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

  }

  render() {
    return (
        <div>
        <form className="form-book" id="motor" onSubmit={this.handleReservation}>
          <label> Check-in </label>
          <br />
          <input name="startDate" type="date" id="entrada" className="entrada" onChange={this.handleReservationData}/>
          <br />
          <label> Check-out </label>
          <br />
          <input name="endDate" type="date" id="salida" onChange={this.handleReservationData}/>
          <br />
          <label> Room </label>
          <br />
          <select name="roomType" id="room" onChange={this.handleReservationData}>
            <option value="junior">Junior Suite</option>
            <option value="standar">Junior Suite Standar</option>
            <option value="premium">Junior Suite Premium</option>
          </select>
          <br /> <br />
          <button type="submit">Boow now</button>
        </form>
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
)(withRouter(Calendar));