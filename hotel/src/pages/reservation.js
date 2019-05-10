import React, { Component } from "react";
import { connect } from 'react-redux'
import { setReservation } from '../redux/actions/reservationActions'
import AuthService from "../services/authService";
import DataService from "../services/dataService";

class Reservation extends Component {

  async componentDidMount() {
    const rooms = await DataService.getAvailableRoomsByDates(this.props.reservation)
    console.log('DataService', rooms)
  }









  
  render() {
    console.log(this.props.reservation, 'eeeeeeppppp')
    return (
      <div>
        <h3>List Rooms</h3>
        <pre>{JSON.stringify(this.props.reservation, null, 4)}</pre>
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
)(Reservation);