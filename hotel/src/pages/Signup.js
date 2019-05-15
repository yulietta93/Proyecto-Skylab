import React, { Component } from 'react'
import AuthService from '../services/authService';
import DataService from '../services/dataService';
import '../style/signup.scss';

export default class Signup extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name         : '',
      lastname     : '',
      email        : '',
      password     : '',
      errorMessage : ''
    }
  }

  onChangeInput = (e) => {
    this.setState({[e.target.name]: e.target.value})
  }

  componentDidMount() {
    AuthService.registerAuthObserver((user) => {
      if (user) {
        // User is signed in.
        const { name, lastname, email } = this.state;
        const success = DataService.addObjectWithId('user', user.uid, { 
          name, 
          lastname, 
          email,
          uid: user.uid 
        });

        if(success) {
          console.log("GUARDAR NUEVO USUARIO EN REDUX");
          this.props.history.push('/home');
        }
        
      } else {
        console.log("OJO: no hay usuario")

      }
    })
  }

  onSignup = async (e) => {
    e.preventDefault();
    const { email, password } = this.state;

    this.setState({errorMessage: ''});

    const error = await AuthService.signup(email, password)

    if(error) {
      this.setState({errorMessage: AuthService.getErrorMessage(error)});
    }
  }

  render() {
    const { email, name, lastname, password, errorMessage } = this.state;

    return (
      <div>
        <h1>Signup and manage your contacts now!</h1>
        <form onSubmit={this.onSignup} className="form-signup">
          <div>
            <label>Name</label>
            <input type="name" name="name" value={name} onChange={this.onChangeInput} />
          </div>
          <div>
            <label>Lastname</label>
            <input type="lastname" name="lastname" value={lastname} onChange={this.onChangeInput} />
          </div>
          <div>
            <label>Email</label>
            <input type="email" name="email" value={email} onChange={this.onChangeInput} />
          </div>
          <div>
            <label>Contraseña</label>
            <input type="password" name="password" value={password} onChange={this.onChangeInput} />
          </div>
          <button className="crear-cuenta">¡Crear cuenta!</button>
          {errorMessage && <p>{errorMessage}</p>}
        </form>
      </div>
    )
  }
}
