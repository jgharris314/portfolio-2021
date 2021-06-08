import React, {useState} from "react";
// import { Route, Switch, useParams } from "react-router-dom";
import Header from '../Header/Header'
import Navigation from'../Navigation/Navigation'
import Body from '../Body/Body'
import ColorPicker from '../ColorPicker/ColorPicker'
import './index.css'
export default function Layout () {

    const [headerStyles, setHeaderStyles] = useState({
        h1: { color: "green" },
        h2: { color: "orange" },
        h3: { color: "purple" },
        background: { "background-color": "#282c34" }
      })

      const [bodyStyles, setBodyStyles] = useState({
        "background-color": "#282c34",
        "color": "white"
      })

    const styleOneHeaderStyle = {
      h1: { color: "#baee4c" },
      h2: { color: "#ce91d8" },
      h3: { color: "#84428f" },
      background: { "background-color": "#210624" }
    };

    const styleTwoHeaderStyle = {
        h1: { color: "#87ceeb" },
        h2: { color: "#5e1224" },
        h3: { color: "#dcdcdb" },
        background: { "background-color": "#eebbf5" }
      };

      const styleThreeHeaderStyle = {
        h1: { color: "#afb5fc" },
        h2: { color: "#e76aa3" },
        h3: { color: "#065535" },
        background: { "background-color": "#f94552" }
      };

      const styleFourHeaderStyle = {
        h1: { color: "#a020f0" },
        h2: { color: "#bada55" },
        h3: { color: "#cc99cc" },
        background: { "background-color": "#008080" }
      };

      const styleOneBodyStyle = {
        background: { "background-color": "black", color: "red" },
        h3: { color: "grey" },
      };

      const styleTwoBodyStyle = {
        background: { "background-color": "grey", color: "orange" },
        h3: { color: "green" },
      };

      const styleThreeBodyStyle = {
        background: { "background-color": "black", color: "green" },
        h3: { color: "yellow" },
      };

      const styleFourBodyStyle = {
        background: { "background-color": "purple", color: "green" },
        h3: { color: "orange" },
      };

      const styleSwitchOnClick = (id) => {
        if (id === 1) {
          setHeaderStyles(styleOneHeaderStyle);
          setBodyStyles(styleOneBodyStyle);
        } else if (id === 2) {
          setHeaderStyles(styleTwoHeaderStyle);
          setBodyStyles(styleTwoBodyStyle);
        } else if (id === 3) {
          setHeaderStyles(styleThreeHeaderStyle);
          setBodyStyles(styleThreeBodyStyle);
        } else if (id === 4) {
          setHeaderStyles(styleFourHeaderStyle);
          setBodyStyles(styleFourBodyStyle);
        }
      };

      

    return (
    <div className="container layoutDiv">
        <div className="row headerDiv">
        <div  className="row styleButtons">
                <div className="col col-3">
                <button onClick={() => styleSwitchOnClick(1)}>Don't</button>
                </div>
                <div className="col col-3">
                <button onClick={() => styleSwitchOnClick(2)}>Like</button>
                </div>
                <div className="col col-3">
                <button onClick={() => styleSwitchOnClick(3)}>The</button>
                </div>
                <div className="col col-3">
                <button onClick={() => styleSwitchOnClick(4)}>Colors?</button>
                </div>
            </div>
            
            <Header headerStyles={headerStyles}/>
        </div>
        
        <div className="row bodyDiv">
        
            <Body bodyStyles={bodyStyles}/>
        </div>
       
            
        
        {/* <div className="ColorPickerDiv">
            <ColorPicker />
        </div> */}
        <div className="row navDiv">
            <Navigation />
        </div>
        
    </div>
    )
}