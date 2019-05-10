import React, { Component } from "react";
import { connect } from 'react-redux'
import { setReservation } from '../redux/actions/reservationActions'
import AuthService from "../services/authService";
import DataService from "../services/dataService";

class Reservation extends Component {

  state = {
    rooms: null
  }

  async componentDidMount() {
    const rooms = await DataService.getAvailableRoomsByDates(this.props.reservation)
    this.setState({rooms})
  }

  render() {
    const {rooms} = this.state
    return (
      <div>
        <h3>List Rooms</h3>
        <pre>{JSON.stringify(this.props.reservation, null, 4)}</pre>
        <div>
          {rooms && rooms.map(room => {
            if(room.available) {
              return <div>
                {room.price}
                {room.name}
                {room.typology}
                {room.totalRooms}
              </div>
            }
          })}
        </div>

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