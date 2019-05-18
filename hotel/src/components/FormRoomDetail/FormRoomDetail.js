import React, { Component } from "react";

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
  
      onFormSubmit = async (e) => {
        e.preventDefault();
        const { name, surname, phone, specialRequests } = this.state;
      }
    
        // Add a new document with a generated id.
        static async onFormSubmit(onFormSubmit) {
          const db = firebase.firestore();
          let success = false;
      
          try {
            const docRef = await db.collection('reservation').add(onFormSubmit);
            if(docRef && docRef.id) {
              success = true;
            }
          } catch (err) {
            console.log("TCL: DataService -> addContact -> err", err)
          }
      
          return success;
        }


        /*this.setState({errorMessage: ''});
        const error = await AuthService.signup(email, password)
        if(error) {
          this.setState({errorMessage: AuthService.getErrorMessage(error)});
        }*/
      
    
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