import React, { Component } from "react";
import { BrowserRouter as Router,Route, Switch } from "react-router-dom";

import Home from "../../pages/Home";
import Habitaciones from "../../pages/Habitaciones";
import Habitacion01 from "../../pages/Habitacion01";
import Habitacion02 from "../../pages/Habitacion02";
import Habitacion03 from "../../pages/Habitacion03";
import Ofertas from "../../pages/Ofertas";
import Servicios from "../../pages/Servicios";

class App extends Component {
  render() {
    return (
      <div className="routes">
        <Router>

          <Switch>
            <Route path="/" component={Home} />
            <Route path="/habitaciones" component={Habitaciones} />
            <Route
              path="/habitaciones/:habitaciones01"
              component={Habitacion01}
            />
            <Route
              path="/habitaciones/:habitaciones02"
              component={Habitacion02}
            />
            <Route
              path="/habitaciones/:habitaciones03"
              component={Habitacion03}
            />
            <Route path="/ofertas" component={Ofertas} />
            <Route path="/servicios" component={Servicios} />
          </Switch>

        </Router>
      </div>
    );
  }
}

export default App;
