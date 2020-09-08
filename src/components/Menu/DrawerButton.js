import React from "react";
import "./Menu.css";

const drawerButton = (props) => {
  return (
    <button className="drawer_button" onClick={props.click}>
      <div className="drawer_button_line" />
      <div className="drawer_button_line" />
      <div className="drawer_button_line" />
    </button>
  );
};
export default drawerButton;
