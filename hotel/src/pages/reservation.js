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
    this.props.reservation);
    this.setState({ rooms });
  }

  async componentDidUpdate(prevProps) {
    if (prevProps.reservation !== this.props.reservation) {
      this.setState({calendar:this.props.reservation})
      const rooms = await DataService.getAvailableRoomsByDates(this.props.reservation);
      this.setState({ rooms });
    }
  }

  onRoomDetailClicked = (roomsId) => {
    this.props.history.push(`/roomdetail/${roomsId}`);
  }
  render() {
    const { rooms, calendar } = this.state;

    return (
  

      <div className="container-reservation">

    <div className="container-description-reservation">
      <div className="select-date">
      {calendar && calendar.startDate && calendar.endDate &&
      <div>
        <h4 className="tittle-date-selected"> Your Dates</h4>
      <p className="start-parraf"><span className="check-selected" >Check-in: </span><span className="date-selected">{calendar.startDate.displayDate}</span></p>
      <p className="end-parraf"><span className="check-selected">Check-out: </span><span className="date-selected">{calendar.endDate.displayDate}</span></p>
      <p className="roomType-parraf"><span className="check-selected">Room Type: </span><span className="date-selected">{calendar.roomType}</span></p></div>
      }
    </div>

      <h3 className="tittle-reservation">Select your room</h3>
      <img className="image-description" src="https://www.massalagros.com/wp-content/uploads/2018/05/Gastronomia25.jpg" ></img>
      <p className="text-description-reservation">NN is the first EcoResort 100% ecological of the peninsula.
      We are located in a natural reserve, overlooking the protected 
      park of the Serralada Litoral. Our location, together with our 
      100% sustainable operation, make this a unique place in 
      the peninsula.</p>

      </div>
       

        <div className="container-map-room-firebase">
          {rooms &&
            rooms.map((room,key) => {
              console.log(room)
              if (room) {
                return (
                  <div className="container-room-firebase">

                  <div className="image-room">
                      <img className="room-image" src={room.image} />
                  </div>

                  <div key={key} className="rooms-list-available">
                    <div className="room-typology">{room.typology} </div>
                    <div className="room-name">{room.name}</div>
                    <div className="room-totalRooms">Available: {room.totalRooms} </div>
                    <div className="room-description">{room.description} </div>
                  </div>
                   

                  <div className="button-price">
                  {!room.available && <div className="room-nodisponible">ROOM NOT AVAILABLE</div>}
                    <div className="room-price"> {room.price}€ </div>
                    <button disabled={!room.available} className={!room.available ?  'disabled' : 'button-deital-rooms'} onClick={() => this.onRoomDetailClicked(room.id)} > Book now </button>
                  </div>
                  </div>
                );
              }
            })}
              
        </div>
        <div className="calendar-page-reservation">
              <Calendar className="component-calendar"/>
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
    setReservation: reservation => dispatch(setReservation(reservation))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Reservation);
