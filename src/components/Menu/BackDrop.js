import React from "react";
import "./Menu.css";

const backDrop = (props) => {
  return <div className="backdrop" onClick={props.click} />;
};

export default backDrop;
