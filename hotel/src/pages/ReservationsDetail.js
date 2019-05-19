import React, { Component } from "react";
import DataService from "../services/dataService";
import TakeMoney from "../components/stripe/stripe";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";

export default class ReservationsDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      reservations: null,
      loading: true,
    };
  }

  async componentDidMount() {
    const reservations = await DataService.getReservationsDetail("reservations",this.props.match.params.id);
    console.log(reservations, 'reservations muestra resultados :/ ')
    this.setState({ reservations, loading: false });
  }

  render() {
    const { reservations, loading } = this.state;
    return (
      <div className="container-roomdetail">
       <h3>Resumen de tu reserva</h3>
        {!loading && (
          <div className="detail-room">
            <p>{reservations.roomType}</p>
            <p> {reservations.startDate}</p>
           <p> {reservations.endDate}</p>
           <p> {reservations.name}</p>
           <p>{reservations.surname}</p>
           <p> {reservations.phone}</p>
           <p> {reservations.specialRequests}</p>
          </div>
        )}
      <TakeMoney />
      <div>
          <Link to="/roomdetail/:id">
            <button>Atrás</button>
          </Link>
        </div>
      </div>
 


       
    )
  }
}

