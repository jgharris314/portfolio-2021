import React from "react";
// import { Link, useParams, useHistory, useRouteMatch } from "react-router-dom";

import "./Header.css";

export default function Header({ headerStyles }) {
  return (
    <header className="Header" style={headerStyles ? headerStyles.background : null}>
      <div className="container">
        <div className="row">
          <div className="col textCol">
            <h1 className="" style={headerStyles ? headerStyles.h1 : null}>Jacob Harris</h1>
            <h2 className="" style={headerStyles ? headerStyles.h2 : null}>Web Developer</h2>
            <h3 style={headerStyles ? headerStyles.h3 : null}>Denver, Colorado</h3>
          </div>
        </div>
      </div>
    </header>
  );
}
