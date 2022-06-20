import React from "react";
import { Outlet } from "react-router-dom";

import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/Navbar/Navbar";

import "./Layout.css";

export default function Layout() {
  return (
    <div className="layout">
      <Navbar />
      <div className="page-container">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
}
