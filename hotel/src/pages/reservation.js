import React, { Component } from "react";
import { connect } from "react-redux";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";

import { setReservation } from "../redux/actions/reservationActions";
import AuthService from "../services/authService";
import DataService from "../services/dataService";
import Calendar from "../components/Calendar/Calendar";
import "../style/reservation.scss";
import storage from '../utils/storage'

class Reservation extends Component {
  state = {
    rooms: null,
    calendar: null
  };

  async componentDidMount() {

    if (storage.getCalendar()) {
      const calendar = storage.getCalendar();

      this.setState({calendar})

      const rooms = await DataService.getAvailableRoomsByDates(
        calendar
      );
      this.setState({ rooms });
      return;
    }


    this.setState({calendar:this.props.reservation})

    const rooms = await DataService.getAvailableRoomsByDates(
      this.props.reservation
    );
    this.setState({ rooms });
  }

  async componentDidUpdate(prevProps) {
    if (prevProps.reservation !== this.props.reservation) {
      this.setState({calendar:this.props.reservation})
      const rooms = await DataService.getAvailableRoomsByDates(
        this.props.reservation
      );
      this.setState({ rooms });
    }
  }

  onRoomDetailClicked = (roomsId) => {
    this.props.history.push(`/roomdetail/${roomsId}`);
  }


  render() {
    const { rooms, calendar } = this.state;


    return (
      <div>
        <h3>List Rooms</h3>
       

        <Calendar/>

        {calendar && calendar.startDate && calendar.endDate &&
        <div>
        <p><span>Inicio: </span><span>{calendar.startDate.displayDate}</span></p>
        <p><span>Fin: </span><span>{calendar.endDate.displayDate}</span></p>
        <p><span>Tipo de habitacion: </span><span>{calendar.roomType}</span></p></div>
        }
        <div>
          {rooms &&
            rooms.map((room,key) => {
              console.log(room)
              if (room) {
                return (
                  <div key={key} className="Rooms-list-available">
                    <div className="typology-name">{room.typology} </div>
                    <div className="available-name">{room.name}</div>
                    <div className="typology-name"> {room.price} </div>
                    {room.totalRooms}
                    {room.description}

                    {!room.available && <div>HABITACION NO DISPOBIBLE</div>}

                    <img src={room.image} />
                    <button disabled={!room.available} className={!room.available ?  'disabled' : ''} onClick={() => this.onRoomDetailClicked(room.id)} > Detail</button>
                  </div>
                );
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
