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

    const styleOneHeaderStyleState = {
      h1: { color: "#bada55" },
      h2: { color: "#0ff1ce" },
      h3: { color: "#dcdcdb" },
      background: { "background-color": "#008080" }
    };

    const styleTwoHeaderStyleState = {
        h1: { color: "#87ceeb" },
        h2: { color: "#5e1224" },
        h3: { color: "#dcdcdb" },
        background: { "background-color": "#eebbf5" }
      };

      const styleThreeHeaderStyleState = {
        h1: { color: "#afb5fc" },
        h2: { color: "#e76aa3" },
        h3: { color: "#065535" },
        background: { "background-color": "#f94552" }
      };

      const styleFourHeaderStyleState = {
        h1: { color: "#a020f0" },
        h2: { color: "#bada55" },
        h3: { color: "#cc99cc" },
        background: { "background-color": "#008080" }
      };

    return (
    <div className="container layoutDiv">
        <div className="row headerDiv">
            <Header headerStyles={headerStyles}/>
        </div>
        
        <div className="row bodyDiv">
            <Body />
        </div>
       
            <div  className="row">
                <div className="col ">
                <button onClick={() => setHeaderStyles(styleOneHeaderStyleState)}>Option 1</button>
                </div>
                <div className="col ">
                <button onClick={() => setHeaderStyles(styleTwoHeaderStyleState)}>Option 2</button>
                </div>
                <div className="col ">
                <button onClick={() => setHeaderStyles(styleThreeHeaderStyleState)}>Option 3</button>
                </div>
                <div className="col ">
                <button onClick={() => setHeaderStyles(styleFourHeaderStyleState)}>Option 4</button>
                </div>
            </div>
        
        {/* <div className="ColorPickerDiv">
            <ColorPicker />
        </div> */}
        {/* <div className="row navDiv">
            <Navigation />
        </div> */}
        
    </div>
    )
}