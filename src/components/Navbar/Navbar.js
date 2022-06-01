import React from "react";
import "./Navbar.css";
import logo from "../../images/Logo.svg";
import LinkList from "../LinkList/LinkList";

export default function Navbar() {
  return (
    <nav className="navbar">
      <img src={logo} alt=""></img>
      <LinkList />
    </nav>
  );
}
