import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import { connect } from "react-redux";
import { setReservation } from "../redux/actions/reservationActions";
import AuthService from "../services/authService";
import DataService from "../services/dataService";
import "../style/reservation.scss";
import Reservation from "../pages/reservation";
import storage from "../utils/storage";

class RoomDetail extends Component {

  constructor(props){
    super(props);
    this.state = {
      room: null,
      loading: true
    };
  }
  

  async componentDidMount() {
    //AÑADIDO ROOM ID
   const room = await DataService.getRoomsDetail('rooms',this.props.match.params.id);
   console.log("room",room);
    this.setState({ room, loading:false });
  }

  render() {

    const {room, loading} = this.state;
    return (
    <div>
      {!loading && <h3>{room.name}</h3>}

      <div>

      </div>
      <Link to="/reservation"><button>Atrás</button></Link>
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
