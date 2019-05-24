import React, { Component } from "react";
import DataService from "../services/dataService";
import TakeMoney from "../components/stripe/stripe";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import "../style/ReservationsDetail.scss";

export default class ReservationsDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      reservations: null,
      loading: true
    };
  }

  async componentDidMount() {
    const reservations = await DataService.getReservationsDetail(
      "reservations",
      this.props.match.params.id
    );
    console.log(reservations, "reservations muestra resultados :/ ");
    this.setState({ reservations, loading: false });
  }

  render() {
    const { reservations, loading } = this.state;
    return (
      <div className="container-roomdetail">
        <h3 className="tittle-summary">Summary of your Reservation</h3>

        <div className="container-map-summary-description">
          {!loading && (
            <table className="detail-room">
              <tr>
                <td>
                  {" "}
                  <p className="reservations-roomType">
                    <span className="name-caracter">Typology </span> <br />{" "}
                    {reservations.roomType}
                  </p>
                </td>
                <td>
                  {" "}
                  <p className="reservations-startDate">
                    {" "}
                    <span className="name-caracter">Check-in</span> <br />{" "}
                    {reservations.startDate}
                  </p>
                </td>
                <td>
                  {" "}
                  <p className="reservations-endDate">
                    {" "}
                    <span className="name-caracter">Check-out</span> <br />{" "}
                    {reservations.endDate}
                  </p>
                </td>
                <td>
                  <p className="reservations-name">
                    <span className="name-caracter">Name</span> <br />{" "}
                    {reservations.name}
                  </p>
                </td>
              </tr>

              <tr>
                <td>
                  <p className="reservations-surname">
                    <span className="name-caracter">Lastname</span> <br />{" "}
                    {reservations.surname}
                  </p>
                </td>
                <td>
                  {" "}
                  <p className="reservations-phone">
                    <span className="name-caracter"> Phon</span>e <br />{" "}
                    {reservations.phone}
                  </p>
                </td>
                <td>
                  {" "}
                  <p className="reservations-specialRequests">
                    <span className="name-caracter"> Special Requests</span>{" "}
                    <br /> {reservations.specialRequests}
                  </p>
                </td>
                <td>
                  <TakeMoney />
                </td>
              </tr>
            </table>
          )}
        </div>

        <div>
          <Link to="/roomdetail/:id">
            <button className="button-basic button-reservationdetail">
              Back
            </button>
          </Link>
        </div>

        <div className="message-finally">
          <h3 className="tittle-message-finally">
            Thank you for your reservation!
          </h3>
          <div>
            <Link to="/">
              <button className="button-basic button-home">Home</button>
            </Link>
          </div>
        </div>
      </div>
    );
  }
}
