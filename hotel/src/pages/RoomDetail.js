import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import { connect } from "react-redux";
import { setReservation } from "../redux/actions/reservationActions";
import AuthService from "../services/authService";
import DataService from "../services/dataService";
import "../style/reservation.scss";
import storage from "../utils/storage";
import TakeMoney from "../components/stripe/stripe";
import Reservation from "../pages/reservation";
import "../style/roomdetail.scss";
import padlock from '../image/padlock.svg'
import FormRoomDetail from '../components/FormRoomDetail/FormRoomDetail';

class RoomDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      room: null,
      loading: true
    };
  }
  async componentDidMount() {
    //AÑADIDO ROOM ID
    const room = await DataService.getRoomsDetail("rooms",this.props.match.params.id);
    this.setState({ room, loading: false });
  }
  render() {
    const { room, loading } = this.state;
    return (
      <div className="container-roomdetail">
        {!loading && (
          <div className="detail-room">
            {room.typology}
            {room.name}
            {room.price}
            {room.description}
            <img src={room.image} />
          </div>
        )}
        <div>
          <Link to="/reservation">
            <button>Atrás</button>
          </Link>

        </div>
        <div className="connecting-line" />
        <ul className="picto-text-info">
          <li className="presentation">
            <a name="Step 1" class="step">
              <span className="round-tab">
                <img src={padlock} alt="padlok" width="3%"></img>
              </span>
              <br />
              <p className="name-picto"> Please fill in your details</p>
            </a>
          </li>
          <li className="presentation">
            <a name="Step 2" class="disabled">
              <span className="round-tab">
                <img src={padlock} alt="padlok" width="3%"></img>
              </span>
              <br />
              <p className="name-picto">Make your payment</p>
            </a>
          </li>
          <li className="presentation">
            <a name="Step 3" class="disabled">
              <span className="round-tab">
                <img src={padlock} alt="padlok" width="3%"></img>
              </span>
              <br />
              <p className="name-picto">Payment completed</p>
            </a>
          </li>
        </ul>

       
          <FormRoomDetail />
        <TakeMoney />
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
