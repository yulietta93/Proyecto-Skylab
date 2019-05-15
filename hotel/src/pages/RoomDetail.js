import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import { connect } from "react-redux";
import { setReservation } from "../redux/actions/reservationActions";
import AuthService from "../services/authService";
import DataService from "../services/dataService";
import "../style/reservation.scss";
import Reservation from '../pages/reservation';
import storage from '../utils/storage';

class RoomDetail extends Component {
  state = {
    rooms: null,
  };

  async componentDidMount() {
    const rooms = await DataService.getAvailableRoomsByDates(
      storage.getCalendar() //match ??
    );
    this.setState({ rooms })
  }

  render() {
    const { rooms,loading } = this.state;
    return (
      <div>
        <h3>ROOM DETAIL</h3>

        {rooms &&
            rooms.map((room,key) => {
              console.log(room)
              if (room && room.id === '9c0AXH3Uq9sEuGGKUwLv') {
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
