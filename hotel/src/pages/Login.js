import React, { Component } from "react";
import AuthService from "../services/authService";
import Modal from "../components/Modal";
import "rodal/lib/rodal.css";

import "../style/login.scss";

export default class Signup extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      lastname: "",
      email: "",
      password: "",
      errorMessage: "",
      showModal: false
    };

    this.authUnRegister = null;
  }

  onChangeInput = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  componentWillUnmount() {
    this.authUnRegister && this.authUnRegister();
  }

  componentDidMount() {
    this.authUnRegister = AuthService.registerAuthObserver(user => {
      if (user) {
        this.setState({ showModal: true });
      }
    });
  }

  onSignup = async e => {
    e.preventDefault();
    const { email, password } = this.state;

    this.setState({ errorMessage: "" });

    if (!email || !password) {
      this.setState({ errorMessage: "Email y password son necesarios" });
      return;
    }

    const error = await AuthService.login(email, password);

    if (error) {
      this.setState({ errorMessage: AuthService.getErrorMessage(error) });
    }
  };

  onCloseModal = () => {
    this.setState({ showModal: false });
    this.props.history.push("/");
  };

  render() {
    const { email, password, errorMessage, showModal } = this.state;

    return (
      <div className="container-signup">
        <h3 className="tittle-signup">Login</h3>
        <p className="text-signup"> Welcome back! Login to access the Name.</p>
        <form onSubmit={this.onSignup}>
          <div>
            <label className="label-name">Email</label>
            <input
              type="email"
              name="email"
              value={email}
              onChange={this.onChangeInput}
              class="form-control"
            />
          </div>
          <div>
            <label className="label-name">Password</label>
            <input
              type="password"
              name="password"
              value={password}
              onChange={this.onChangeInput}
              class="form-control"
            />
          </div>
          <button className="button-basic">Enter</button>
          {errorMessage && <p>{errorMessage}</p>}
        </form>
        <Modal
          customStyles={{ backgroundColor: "white", borderRadius: "0px" }}
          visible={showModal}
          onClose={this.onCloseModal}
          size="s"
          message="Welcome to Naturae"
          closeButtonText="Go to home "
        />
      </div>
    );
  }
}
