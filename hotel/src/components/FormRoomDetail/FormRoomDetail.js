import React, { Component } from "react";
import DataService from '../../services/dataService';

export default class RoomDetail extends Component {
    constructor(props) {
        super(props);
    
        this.state = {
          name         : '',
          surname     : '',
          phone        : '',
          specialRequests    : '',
        }
      }
    
      onChangeInput = (e) => {
        this.setState({[e.target.name]: e.target.value})
      }
  
      onFormSubmit = async (event) => {
        event.preventDefault();
        console.log("estado",this.state)
        let {name,surname,phone,specialRequests}=this.state;
        await DataService.addForm('reservations',{name:name,surname:surname,phone:phone,specialRequests:specialRequests});
      
      }
    
    
      render() {
          const{name, surname, phone, specialRequests}=this.state
          console.log('state', this.state);
    
        return (
            <div>
              <h3>Form Room Detail</h3>
              <form onSubmit={this.onFormSubmit} className="form-signup" name="name">
                <div>
                  <label>Name</label>
                  <input type="text" name="name" value={name} onChange={this.onChangeInput} />
                </div>
                <div>
                  <label>Surname</label>
                  <input type="text" name="surname" value={surname} onChange={this.onChangeInput} />
                </div>
                <div>
                  <label>Phone</label>
                  <input type="phone" name="phone" value={phone} onChange={this.onChangeInput} />
                </div>
                <div>
                  <label>Special Requests</label>
                  <textarea type="text" name="specialRequests" value={specialRequests} onChange={this.onChangeInput} />
                </div>
                <button className="send">¡Send!</button>
                {/*errorMessage && <p>{errorMessage}</p>*/}
              </form>
            </div>
          )
        }
      }