import React from "react";
// import { Link, useParams, useHistory, useRouteMatch } from "react-router-dom";

import "./Header.css";

export default function Header({ headerStyles }) {
  return (
    <header className="Header">
      <div className="container">
        <div className="row">
          <div className="col textCol">
            <h1 className="" style={{}}>Jacob Harris</h1>
            <h2 className="" style={{}}>Web Developer</h2>
            <h3 style={{}}>Denver, Colorado</h3>
          </div>
        </div>
      </div>
    </header>
  );
}
