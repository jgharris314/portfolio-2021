import React, { useState } from "react";
// import { Route, Switch, useParams } from "react-router-dom";
import Header from "../Header/Header";
import Navigation from "../Navigation/Navigation";
import Body from "../Body/Body";
import "./index.css";
import { StyleList, DefaultStyle } from "./Styles"; 

export default function Layout() {
  const [styles, setStyles] = useState(DefaultStyle);

  const styleArray = [...StyleList];

  const styleSwitchOnClick = (event)=> {
    setStyles(styleArray[event.target.value])
  };

  return (
    <div className="container layoutDiv">
      <div className="row headerDiv">
         <div className="row styleOptions">
        <label style={styles.header.h1}> Don't like the colors?&nbsp;</label>
        
        <select
          name="color_option"
          id="color_option"
          onChange={styleSwitchOnClick}
        >
          {styleArray.map((x, index) => (
            <option
              key={index}
              value={index}
            >{`Style ${index + 1}`}</option>
          ))}
        </select>
        </div>

        <Header headerStyles={styles.header} />
      </div>

      <div className="row bodyDiv">
        <Body bodyStyles={styles.body} />
      </div>
      <div className="row navDiv">
        <Navigation navigationStyles={styles.navigation} />
      </div>
    </div>
  );
}
