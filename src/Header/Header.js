import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";

function Header(props) {
  return (
    <header className="header">
      <div className="header-logo">
        {props.logoText}
        <Link to="/">
          <img className="logo-image" src={props.image} alt="" />
        </Link>
      </div>
      <ul className="header-menu">
        {props.menu.map(item => (
          <li className="list-item" key={item.link}>
            <Link to={item.link}>{item.title}</Link>
          </li>
        ))}
      </ul>
    </header>
  );
}

export default Header;
