import React from "react";
import { Link, useNavigate } from "react-router-dom";

import "./Button.css";

export default function Button({ btnText, link, onBtnClick, navigateTo }) {
  const navigate = useNavigate();
  const handleBtnClick = () => {
    if (typeof onBtnClick === "function") {
      onBtnClick();
    }
    navigate(navigateTo);
  };
  return (
    <button className="btn" onClick={() => handleBtnClick()}>
      {/* <Link className="btn-link" to={{ pathname: link }}>
        {btnText}
      </Link> */}
      {btnText}
    </button>
  );
}
