import React, { Component } from 'react'
import AuthService from '../services/authService'
import Modal from '../components/Modal';

import '../style/login.scss'

export default class Signup extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name         : '',
      lastname     : '',
      email        : '',
      password     : '',
      errorMessage : '',
      showModal    : false
    }

    this.authUnRegister = null;
  }

  onChangeInput = (e) => {
    this.setState({[e.target.name]: e.target.value})
  }

  componentWillUnmount() {
    this.authUnRegister && this.authUnRegister();
  }

  componentDidMount() {
    this.authUnRegister = AuthService.registerAuthObserver((user) => {
      if(user) {
        this.setState({showModal: true});
      }
    })
  }

  onSignup = async (e) => {
    e.preventDefault();
    const { email, password } = this.state;

    this.setState({errorMessage: ''});

    if(!email || !password) {
      this.setState({errorMessage: 'Email y password necesarios para login... no?? '});
      return;
    }

    const error = await AuthService.login(email, password)

    if(error) {
      this.setState({errorMessage: AuthService.getErrorMessage(error)});
    }
  }

  onCloseModal = () => {
    this.setState({showModal: false});
    this.props.history.push('/'); 
  }

  render() {
    const { email, password, errorMessage, showModal } = this.state;

    return (
      <div className="form-login">
        <h1>Login</h1>
        <form onSubmit={this.onSignup}>
          <div>
            <label>Email</label>
            <input type="email" name="email" value={email} onChange={this.onChangeInput} />
          </div>
          <div>
            <label>Contraseña</label>
            <input type="password" name="password" value={password} onChange={this.onChangeInput} />
          </div>
          <button>¡Entrar!</button>
          {errorMessage && <p>{errorMessage}</p>}
        </form>
        <Modal 
          visible={showModal} 
          onClose={this.onCloseModal}
          size='s'
          message="¡Has hecho login súper bien!"
          closeButtonText="Llévame a la home :D "
        />
      </div>
    )
  }
}
