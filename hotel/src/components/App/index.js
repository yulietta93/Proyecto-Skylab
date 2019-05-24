import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import "react-alice-carousel/lib/alice-carousel.css";
import { connect } from "react-redux";
import { setUserInfo } from "../../redux/actions/userActions";
import './index.scss';

//NAVBAR
import NavBar from './NavBar'

//SERVICES
import AuthService from "../../services/authService";
import DataService from "../../services/dataService";

//PAGES
import Signup from "../../pages/Signup";
import Login from "../../pages/Login";
import Home from "../../pages/Home";
import Habitaciones from "../../pages/Habitaciones";
import Habitacion01 from "../../pages/Habitacion01";
import Habitacion02 from "../../pages/Habitacion02";
import Habitacion03 from "../../pages/Habitacion03";
import Ofertas from "../../pages/Ofertas";
import Servicios from "../../pages/Servicios";
import Reservation from '../../pages/reservation';
import RoomDetail from '../../pages/RoomDetail';
import ReservationsDetail from '../../pages/ReservationsDetail';


class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: true,
      sideDrawerOpen:false,
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


  render() {
    //USER
    const { userInfo } = this.props;
    const { loading } = this.state;
    if (loading) return <div>Loading</div>;

    return (
        <main>
            <Router> 
            <NavBar />
          <Switch>
            <Route path="/reservationsdetail/:id" component={ReservationsDetail} />
            <Route path="/roomdetail/:id" component={RoomDetail} />
            <Route path="/reservation" component={Reservation} />
            <Route path="/habitaciones/habitacion01"component={Habitacion01}/>
            <Route path="/habitaciones/habitacion02" component={Habitacion02}/>
            <Route path="/habitaciones/habitacion03" component={Habitacion03}/>
            <Route path="/habitaciones" component={Habitaciones} />
            <Route path="/ofertas" component={Ofertas} />
            <Route path="/servicios" component={Servicios} />
            <Route path="/signup" component={Signup} />
            <Route path="/login" component={Login} />
            <Route path="/" component={Home} />
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
