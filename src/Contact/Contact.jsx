import React from "react";
import "./Contact.css"
export default function Contact() {

    return (
        <div >
            <form >
                <div className="row">
                <label className="labelAdjust">
                    Name:&nbsp;
                </label>
                <input className="inputWidth">
                </input>
                </div>
                <div className="row">
                <label className="labelAdjust">
                    E-mail:&nbsp;
                </label>
                <input className="inputWidth">
                </input>
                </div>
                <div className="row">
                <label className="labelAdjust">
                    Memo:&nbsp;
                </label>
                <textarea className="inputWidth">
                </textarea>
                </div>
                <button className="btn">Send it!</button>
            </form>
        </div>
    )
}