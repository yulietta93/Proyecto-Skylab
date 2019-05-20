import React from 'react';
import "./toolbar.scss";
import logo from "../../image/logo-blanco.svg";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import DrawerToggleButton from '../SideDrawer/DrawerToggleButton';

const Toolbar = props =>(
<header className="toolbar">
    <nav className="toolbar_navigation">
        <div className="toolbar__toggle-button">
            <DrawerToggleButton click={props.drawerToggleClickHandler}/>
        </div>
        <div className="toolbar_logo">
            <a href="/"><img src={logo} alt="logotipo" className="toolbar_logo" width="30%"/></a>
        </div>
        <div className="spacer"></div>
        <div className="toolbar_navigation_items">
        <Router>
            <ul>
              <li> <Link to="/">Home</Link></li>
              <li> <Link to="/habitaciones">Rooms</Link></li>
              <li> <Link to="/ofertas">Offers</Link></li>
              <li> <Link to="/servicios">Services</Link></li>
            </ul>
            </Router>
        </div>
    </nav>
</header>
)
export default Toolbar;