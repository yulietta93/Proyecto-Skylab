import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import "react-alice-carousel/lib/alice-carousel.css";
import { connect } from "react-redux";
import { setUserInfo } from "../../redux/actions/userActions";
import './index.css';

import ContactList from "../../pages/ContactsList";
import ContactDetail from "../../pages/ContactDetail";
import Signup from "../../pages/Signup";
import Login from "../../pages/Login";
import AuthService from "../../services/authService";
import DataService from "../../services/dataService";

import Home from "../../pages/Home";
import Habitaciones from "../../pages/Habitaciones";
import Habitacion01 from "../../pages/Habitacion01";
import Habitacion02 from "../../pages/Habitacion02";
import Habitacion03 from "../../pages/Habitacion03";
import Ofertas from "../../pages/Ofertas";
import Servicios from "../../pages/Servicios";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: true
    };
  }

  componentDidMount() {
    AuthService.registerAuthObserver(async user => {
      if (user) {
        console.log("User is signed in");
        const userDetail = await DataService.getObjectDetail("user", user.uid);

        if (userDetail) {
          this.props.setUserInfo(userDetail);
        } else {
          console.log("ESPERAAAAAA me estoy registrando");
        }
      } else {
        console.log("User is signed out");
      }
      this.setState({ loading: false });
    });
  }

  logout = () => {
    AuthService.logout();
    this.props.setUserInfo(null);
  };

  render() {
    const { userInfo } = this.props;
    const { loading } = this.state;

    if (loading) return <div>Loading</div>;

    return (
      <main>

        <Router>
          <nav className="nav-container">
              <ul>   
              <li> <Link to="/home">Home</Link></li>
              <li> <Link to="/habitaciones">Rooms</Link></li>
              <li> <Link to="/ofertas">Offers</Link></li>
              <li> <Link to="/servicios">Services</Link></li>
            </ul>
            <ul className="login-container">
              {!userInfo && (<li> <Link to="/signup">Signup</Link></li>)}
              {!userInfo && ( <li><Link to="/login">Login</Link> </li>)}
              </ul>
              <ul className="logout-container">
              {userInfo && (<div className="saludo-container"><span className="saludo">{userInfo.name}</span> </div>)}
              {userInfo && (<li onClick={this.logout} className="logout"><u>Logout</u></li>)}
            
              </ul>
          
           
          </nav>

          <Switch>
            <Route path="/home" component={Home} />
            <Route path="/habitaciones/:habitacion01"component={Habitacion01}/>
            <Route path="/habitaciones/:habitacion02" component={Habitacion02}/>
            <Route path="/habitaciones/:habitacion03" component={Habitacion03}/>
            <Route path="/habitaciones" component={Habitaciones} />
            <Route path="/ofertas" component={Ofertas} />
            <Route path="/servicios" component={Servicios} />
            <Route path="/signup" component={Signup} />
            <Route path="/login" component={Login} />
            <Route path="/contact/:id" component={ContactDetail} />
            <Route path="/" component={ContactList} />
          </Switch>
        </Router>
      </main>
    );
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
)(App);
