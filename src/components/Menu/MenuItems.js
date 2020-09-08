import React, { useState } from "react";
import "./Menu.css";

const MenuItem = (props) => {
  const ListItem = ({ value, onClick }) => {
    return (
      <div>
        <li style={{ float: "left" }} onClick={onClick}>
          <a href="/">{value}</a>
        </li>
      </div>
    );
  };

  const List = ({ items }) => (
    <ul>
      {items.map((item, i) => (
        <ListItem key={i} value={props.items[i].label} onClick={() => console.log(props.items[i].link)} />
      ))}
    </ul>
  );

  return (
    <nav className="Menu_Item">
      <ul>
        <List items={props.items} />
        <li>
          <a href="/">Settings</a>
        </li>
        <li>
          <a href="/">Logout</a>
        </li>
      </ul>
    </nav>
  );
};

export default MenuItem;
