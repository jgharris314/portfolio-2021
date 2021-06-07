import React from "react";
// import { Route, Switch, useParams } from "react-router-dom";
import Header from '../Header/Header'
import Navigation from'../Navigation/Navigation'
import Body from '../Body/Body'
import ColorPicker from '../ColorPicker/ColorPicker'
import './index.css'
export default function Layout () {
    return (
    <div className="container layoutDiv">
        <div className="row headerDiv">
            <Header />
        </div>
        
        <div className="row bodyDiv">
            <Body />
        </div>
        <div className="ColorPickerDiv">
            <ColorPicker />
        </div>
        {/* <div className="row navDiv">
            <Navigation />
        </div> */}
        
    </div>
    )
}