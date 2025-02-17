import React from "react";
import { Link } from "react-router-dom";
import "./Navigation.css";

function Navigation() {
  return (
    <div className="nav">
      <Link to="/">홈</Link>
      <Link to="/about">대해서</Link>
    </div>
  );
}

export default Navigation;
