import React, { Component } from "react";
import DataService from '../../services/dataService';
import { connect } from "react-redux";
import { setUserInfo } from "../../redux/actions/userActions";
//import Calendar from "../Calendar/Calendar";
import './FormRoomDetail.scss';


class FormRoomDetail extends Component {
    constructor(props) {
        super(props);
    
        this.state = {
          name         : '',
          surname     : '',
          phone        : '',
          specialRequests    : '',
          startDate: '',
          endDate: '',
          roomType: '',
         // uid:this.props.userInfo.uid,
        }
      }
    
      onChangeInput = (e) => {
        this.setState({[e.target.name]: e.target.value})
      }
  
      onFormSubmit = async (event) => {
        event.preventDefault();
        console.log("estado",this.state)
        let {name,surname,phone,specialRequests,startDate,endDate,roomType,uid}=this.state;
        await DataService.addForm('reservations',{name:name,surname:surname,phone:phone,specialRequests:specialRequests, startDate, endDate,roomType,uid});
      }

      onReservationDetailClicked = (reservationsId) => {
        this.props.history.push(`/reservationsdetail/${reservationsId}`);
      }

      render() {
          const{name, surname, phone, specialRequests,endDate,startDate,reservationsId}=this.state
          console.log('state', this.state);
        return (
            <div className="container-form-room-detail">

              <h3 className="tittle-form-room-detail">Form Room Detail</h3>

              <form onSubmit={this.onFormSubmit} className="form-signup" name="name">
                <div>
                  <label className="label-name">Name</label>
                  <input type="text" name="name" value={name} onChange={this.onChangeInput} class="form-control" />
                </div>
                <div>
                  <label className="label-name" >Surname</label>
                  <input type="text" name="surname" value={surname} onChange={this.onChangeInput} class="form-control"/>
                </div>
                <div>
                  <label className="label-name">Phone</label>
                  <input type="phone" name="phone" value={phone} onChange={this.onChangeInput} class="form-control"/>
                </div>
                <div>
                  <label className="label-name">Check-in</label>
                  <input type="date" name="startDate" value={startDate} onChange={this.onChangeInput} class="form-control"/>
                </div>
                <div>
                  <label className="label-name">Check-out</label>
                  <input type="date" name="endDate" value={endDate} onChange={this.onChangeInput} class="form-control"/>
                </div>
                <div>
                  <label className="label-name">Room Type</label>
                  <select name="roomType" id="room" onChange={this.onChangeInput}>
                      <option value="junior">Junior Suite</option>
                      <option value="standar">Junior Suite Standar</option>
                      <option value="premium">Junior Suite Premium</option>
                    </select>
                </div>
                <div>
                  <label>Special Requests</label>
                  <textarea type="text" name="specialRequests" value={specialRequests} onChange={this.onChangeInput} class="form-control text-form"/>
                </div>
                <button className="button-basic" onClick={() => this.onReservationDetailClicked(reservationsId.id)}>Book Now</button>
              </form>
            </div>
          )
        }
      }


const mapStateToProps = state => {
  return {
    userInfo: state.userReducer.user
  };
};

const mapDispatchToProps = dispatch => {
  return {
    setUserInfo: user => dispatch(setUserInfo(user))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FormRoomDetail);