import React from "react";

import logo from "../../images/Logo.svg";
import LinkList from "../LinkList/LinkList";

import "./Navbar.css";

export default function Navbar() {
  return (
    <nav className="navbar">
      <img src={logo} alt=""></img>
      <LinkList />
    </nav>
  );
}
