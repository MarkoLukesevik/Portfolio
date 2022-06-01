import React from "react";
import { Link } from "react-router-dom";
import "./Button.css";

export default function Button({ btnText, link, onBtnClick }) {
  return (
    <button className="btn" onClick={onBtnClick}>
      <Link className="btn-link" to={{ pathname: link }}>
        {btnText}
      </Link>
    </button>
  );
}
