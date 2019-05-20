import React from "react";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import "./SideDrawer.scss";
import DrawerToggleButton from "../SideDrawer/DrawerToggleButton";

const SideDrawer = props => {
    let drawerClasses='side-drawer';
    if(props.show){
        drawerClasses='side-drawer open';   
    
    }
    return(
  <main>
    <Router>
      <nav className={drawerClasses}>
        <ul>
          <li>
           <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/habitaciones">Rooms</Link>
          </li>
          <li>
            <Link to="/ofertas">Offers</Link>
          </li>
          <li>
            <Link to="/servicios">Services</Link>
          </li>
        </ul>
      </nav>
    </Router>
  </main>
);
};

export default SideDrawer;
