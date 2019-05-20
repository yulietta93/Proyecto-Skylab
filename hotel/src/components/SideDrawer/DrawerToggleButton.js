import React from "react";
import '../SideDrawer/DrawerToggleButton.scss';

const DrawerToggleButton = props => (
  <button className="toggle__button" onClick={props.click}>
    <div className="toggle-button__line" />
    <div className="toggle-button__line" />
    <div className="toggle-button__line" />
  </button>
);
export default DrawerToggleButton;
