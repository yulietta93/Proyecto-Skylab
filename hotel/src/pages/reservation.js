import React, { Component } from "react";
import { connect } from 'react-redux'
import { setReservation } from '../redux/actions/reservationActions'
import AuthService from "../services/authService";
import DataService from "../services/dataService";
import Calendar from "../components/Calendar/Calendar";
import '../pages/reservation.scss'


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
        
        <Calendar />
        <div>
          {rooms && rooms.map(room => {
            if(room.available) {
              return <div className="Rooms-list-available">
              <div className="typology-name">{room.typology} </div>
              <div className="available-name">{room.name}</div>
               <div className="typology-name"> {room.price} </div>  
                {room.totalRooms}
                {room.description}
                <img src={room.image} />
                
                <button>Select</button>
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