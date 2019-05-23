import React, { Component } from "react";
import "./header.scss";
import { connect } from "react-redux";
import { setReservation } from "../../redux/actions/reservationActions";
import { withRouter } from "react-router-dom";
import Calendar from "../Calendar/Calendar";

class HeaderRoom extends Component {
  render() {
    return (
      <div className="container-cabecera">
        <div className="calendario-date">
          <Calendar />
        </div>

        <div className="video-titte">
          <div className="tittle-header"> Rooms</div>

          <p className="text-header">
            Is an EcoResort in which we work every day to offer a sustainable
            tourism option to our guests through energy savings, biofuels, low
            consumption lighting and environmentally friendly products.
          </p>

          <img
            className="img-cabecera"
            src="https://www.yurbbanpassage.com/assets/img/gallery/Habitaci%C3%83%C2%B3n%20Yurbban%20Standard/en/cama_ventana_habitacion_standard_yurbban_passage.jpg"
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
)(withRouter(HeaderRoom));
