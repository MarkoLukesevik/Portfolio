import React, { useState } from "react";
import { NavLink } from "react-router-dom";

import "./LinkList.css";

export default function LinkList() {
  const [menu, setMenu] = useState(false);
  const hamburgerMenu = !menu
    ? require(`../../images/hamburger.png`)
    : require(`../../images/close.png`);
  const mobileNav = !menu ? "mobile-nav" : "mobile-nav-active";

  const navMenu = [
    { name: "HOME", value: "home", url: "/home" },
    { name: "PORTFOLIO", value: "portfolio", url: "/portfolio" },
    { name: "CONTACT", value: "contact", url: "/contact" },
  ];

  const handleMenuClick = () => {
    setMenu((prev) => !prev);
  };

  return (
    <>
      <img
        onClick={() => handleMenuClick()}
        className="menuIcon"
        src={hamburgerMenu}
        alt=""
      ></img>
      <div className="list">
        {navMenu.map((menuItem) => {
          return (
            <NavLink
              style={({ isActive }) => {
                return {
                  color: isActive ? "#5FB4A2" : "",
                };
              }}
              className="nav-item"
              to={menuItem.url}
              key={menuItem.value}
            >
              {menuItem.name}
            </NavLink>
          );
        })}
      </div>

      <div className={mobileNav}>
        <div className="list-small">
          {navMenu.map((menuItem) => {
            return (
              <NavLink
                style={({ isActive }) => {
                  return {
                    color: isActive ? "#5FB4A2" : "",
                  };
                }}
                className="nav-item"
                onClick={() => handleMenuClick()}
                to={menuItem.url}
                key={menuItem.value}
              >
                {menuItem.name}
              </NavLink>
            );
          })}
        </div>
      </div>
    </>
  );
}
