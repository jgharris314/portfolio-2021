import React from "react";
// import { Link, useParams, useHistory, useRouteMatch } from "react-router-dom";
import './Navigation.css'

export default function Navigation () {

    return (
        <div className="container Navigation">
            <div className="row">
                <div className="col col-3"><a href="#">Home</a></div>
                <div className="col col-3"><a href="#about">About</a></div>
                <div className="col col-3"><a href="#projects">Projects</a></div>
                <div className="col col-3"><a href="#contact">Contact</a></div>
            </div>
        </div>
    )
}