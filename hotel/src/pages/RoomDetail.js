import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import { connect } from "react-redux";
import { setReservation } from "../redux/actions/reservationActions";
import AuthService from "../services/authService";
import DataService from "../services/dataService";
import "../style/reservation.scss";
import Reservation from '../pages/reservation';
class RoomDetail extends Component {
  state = {
    rooms: null,
  };

  async componentDidMount() {
    const rooms = await DataService.getAvailableRoomsByDates(
   this.props.match.reservartion //match ??
    );
    this.setState({ rooms })
  }

  render() {
    const { rooms,loading } = this.state;
    return (
      <div>
        <h3>ROOM DETAIL</h3>
        <Link to="/reservation">
          <button>Atrás</button>
        </Link>

        
        </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    reservation: state.reservationReducer.reservation
  };
};

const mapDispatchToProps = dispatch => {
  return {
    setReservation: reservartion => dispatch(setReservation(reservartion))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RoomDetail);
