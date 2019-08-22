import React from "react";
import "./Header.css";

function Header(props) {
  console.log("Header", props);

  return (
    <header className="header">
      <div className="header-logo">
        <img src={props.logo} alt="nope" />
      </div>
      <ul className="header-menu">
        <span>
          {props.menu.map(item => (
            <li className="item-list" key={item}>
              {item}
            </li>
          ))}
        </span>
      </ul>
    </header>
  );
}

export default Header;
