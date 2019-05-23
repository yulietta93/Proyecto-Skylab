import React, { Component } from "react";
import "./header.scss";
import { connect } from "react-redux";
import { setReservation } from "../../redux/actions/reservationActions";
import { withRouter } from "react-router-dom";
import Calendar from "../Calendar/Calendar";

class HeaderOffer extends Component {
  render() {
    return (
      <div className="container-cabecera">
        <div className="calendario-date">
          <Calendar />
        </div>

        <div className="video-titte">
          <div className="tittle-header"> Offers</div>

          <p className="text-header">
            Is an EcoResort in which we work every day to offer a sustainable
            tourism option to our guests through energy savings, biofuels, low
            consumption lighting and environmentally friendly products.
          </p>

          <img
            className="img-cabecera"
            src="https://images.unsplash.com/photo-1539786775244-0336276a6d8a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80"
          />
        </div>

      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    setReservation: reservation => dispatch(setReservation(reservation))
  };
};

export default connect(
  null,
  mapDispatchToProps
)(withRouter(HeaderOffer));
