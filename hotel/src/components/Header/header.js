import React, { Component } from "react";
import "./header.scss"
import { connect } from 'react-redux'
import {setReservation} from '../../redux/actions/reservationActions'
import { withRouter } from 'react-router-dom'
import Calendar from "../Calendar/Calendar";


class Header extends Component {
/*
  state = {
    startDate: null,
    endDate: null,
    roomType: null
  }

  handleReservation = () => {
    const {startDate, endDate, roomType} = this.state
    this.props.setReservation({startDate, endDate, roomType})
    this.props.history.push('/reservation')
  }

  handleReservationData = (event) => {

    if(event.target.name === 'startDate' || event.target.name === "endDate") {
      let parsedDate = event.target.value.split("-");
        parsedDate = `${parsedDate[1]}/${parsedDate[2]}/${parsedDate[0]}`
        parsedDate = new Date(parsedDate).getTime()

      const date = {
        displayDate: event.target.value,
        timestamp: parsedDate
      }
        this.setState({[event.target.name]: date})
    }

    if(event.target.name === 'roomType') {
      this.setState({[event.target.name]: event.target.value})
    }
  }*/

  render() {
    return (
      <div className="container-cabecera">
   
     <div className="calendario-date">
      <Calendar />
      </div>
      
      <div className="video-titte">
        <div className="tittle-header"> Named</div>
 
          <p className="text-header">Is an EcoResort in which we work every 
            day to offer a sustainable tourism option 
            to our guests through energy savings, biofuels, 
            low consumption lighting and environmentally 
            friendly products.</p>
 
        <img className="img-cabecera"src="https://images.unsplash.com/photo-1503278501277-e50457741130?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80"/>
      </div>

        <div className="image-mobile">
            <img  src="https://images.unsplash.com/photo-1537240937103-98b1d7a1c466?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2100&q=80"/> 
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
)(withRouter(Header));