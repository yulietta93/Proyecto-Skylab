import React from 'react';
import "./toolbar.scss";
import logo from "../../image/logo-blanco.svg";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";


const Toolbar = props =>(
<header className="toolbar">
    <nav className="toolbar_navigation">
        <div></div>
        <div className="toolbar_logo"><a href="/">LOGOTIPO</a>
        {/*<img src={logo} alt="logotipo" className="toolbar_logo"/>*/}
        </div>
        <div className="spacer"></div>
        <div className="toolbar_navigation_items">
            <ul>
              <li> <Link to="/">Home</Link></li>
              <li> <Link to="/habitaciones">Rooms</Link></li>
              <li> <Link to="/ofertas">Offers</Link></li>
              <li> <Link to="/servicios">Services</Link></li>
            </ul>
        </div>
    </nav>
</header>
);
export default Toolbar;

