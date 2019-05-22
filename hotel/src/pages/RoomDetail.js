import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import { connect } from "react-redux";
import { setReservation } from "../redux/actions/reservationActions";
import DataService from "../services/dataService";
import "../style/reservation.scss";
import "../style/roomdetail.scss";
import padlock01 from '../image/padlock-01.svg'
import padlock02 from '../image/padlock-02.svg'
import padlock03 from '../image/padlock-03.svg'
import FormRoomDetail from '../components/FormRoomDetail/FormRoomDetail';

class RoomDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      room: null,
      loading: true,
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
      <div>
    <div className="room-detail">

      <h3 className="tittle-principal">Please fill in your details</h3>

      <div className="roomdetail-map-description">
        {!loading && (<div className="detail-room">
            {room.typology}
            {room.name}
            <img src={room.image} width="10%"/>
            {room.price}
            {room.description} 
          </div>
        )}
      </div>

    

        <div className="container-esquema"/>
        <ul className="picto-text-info">
          <li className="presentation">
              <span className="round-tab"><img src={padlock01} alt="padlok" width="7%"></img></span>
              <p className="name-picto"> Please fill in your  details</p>
          </li>

          <li className="presentation">
              <span className="round-tab"><img src={padlock02} alt="padlok" width="7%"></img></span>
              <p className="name-picto">Make your payment</p>
          </li>

          <li className="presentation">
              <span className="round-tab"><img src={padlock03} alt="padlok" width="7%"></img></span>
              <p className="name-picto">Payment  completed</p>       
          </li>
        </ul>
        </div>


        <div className="form-select-info">
        <FormRoomDetail />
            <div className="button-atras">
               <Link to="/reservation">
               <button>Atrás</button>
               </Link>
            </div>
        </div>
        

      <div className="container-ventajas-pictogramas">
        <h3 className="tittle-about-booking">More about your booking</h3>
        <ul className="list-picto-ventajas">
        
        
       <li> <span className="round-tab"><img src="https://image.flaticon.com/icons/png/512/82/82646.png" alt="padlok" width="2%"></img>
        Best price guaranteed</span>
       </li>

       <li> <span className="round-tab"><img src="https://image.flaticon.com/icons/png/512/70/70482.png" alt="padlok" width="2%"></img>
        Free Wi-Fi</span>
       </li>

       <li> <span className="round-tab"><img src="https://image.flaticon.com/icons/png/512/91/91834.png" alt="padlok" width="2%"></img>
        24h service</span>
       </li>

       <li> <span className="round-tab"><img src="https://image.flaticon.com/icons/png/512/85/85966.png" alt="padlok" width="2%"></img>
       Simple check-in</span>
       </li>

        </ul>
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
)(RoomDetail);