import portrait from "../img/jhFill.jpg";
import Contact from "../Contact/Contact.jsx"
import './Body.css'
import React from "react";
import periodicTables from "../img/periodicTables.png"
import git from "../img/git.png"
import LocationViewer  from "../LocationViewer/LocationViewer";

export default function Body({ bodyStyles }) {
  return (
    <div className="container Body" style={bodyStyles ? bodyStyles.background : null}>
      <div className="row introRow" >
        <div className="col portraitCol" style={bodyStyles ? bodyStyles.content : null}>
       
         
          <img src={portrait} alt="portrait of Jacob Harris"/>
          
          
        </div>
        <div className="row  introCol" style={bodyStyles ? bodyStyles.content : null}>
        <p id="home">
                   This is not the greatest site in the world, no. This is just a <a href="https://www.youtube.com/watch?v=_lK4cX5xGiQ" target="blank">Tribute</a>
                </p>
        </div>
      </div>
      
      <div className="row contentDiv" >
        
      <h3  id="about"  style={bodyStyles ? bodyStyles.h3 : null}>About</h3>
      
      <div className="row content" style={bodyStyles ? bodyStyles.content : null}>
          <div className="col">
          <p>
                    I'm Jacob, a web developer located in Denver, Colorado!
                   
                     Before web development, I was a table-games dealer and supervisor in various casinos throughout KS and CO. The industry was fun and full of fast-paced action, but it just wasn't enough for me, I need something that challenges my mental capacity every day, and keeps me learning. This is why I chose web development. The casino industry has taught me how to work as an effective teammate in a fast-paced setting. 
                     <br/><hr/>
                                       When I am not working on code, I like to keep myself busy. There are many things I enjoy doing for "fun," but my biggest passion outside of code has to be kendama. To many, it is just a wooden toy, but for me, it is a form of meditation and relaxation. 
                   
                    I also enjoy playing disc golf and getting outside in general.
                    <br/>
                    
                </p>
          </div>
      </div> 
      </div>
      <div className="contentDiv">
        <LocationViewer />
      </div>
      <div className="row contentDiv">
      <h3 id="projects" style={bodyStyles ? bodyStyles.h3 : null}>Projects</h3>
      <div className="row content" style={bodyStyles ? bodyStyles.content : null}>
      <div className="col">
      <div class="card">
  <img class="card-img-top" src={periodicTables} alt="dashboard of Periodic Tables, a restaurant reservation application" />
  <div class="card-body" style={bodyStyles ? bodyStyles.card : null}>
    <h5 class="card-title">Periodic Tables</h5>
    <p class="card-text">A full-stack web application for simple restaurant reservations. Created with React.js Node.js Express.js and PostgreSQL<br />
    <a href="https://periodic-tables-frontend-seven.vercel.app/dashboard" target="blank">Demo</a> &nbsp;
    <a href="https://github.com/jgharris314/Periodic-Tables" target="blank"><img src={git} alt="github logo" style={{"max-height": "50px", "max-width": "50px", "background-color": "white"}}/></a>
    </p>
  </div>
</div>
          </div>
      </div>
      </div>
      <div className="row contentDiv">
      <h3 id="contact" style={bodyStyles ? bodyStyles.h3 : null}>Contact</h3>
      <div className="row content" style={bodyStyles ? bodyStyles.content : null}>
        <div className="col ">
          <p>I am always looking for ways to learn and create! If you would like to collaborate, send me your name, e-mail, and a brief description of how you would like to work with me!</p>
          <hr/>
                  </div>
      <div className="col content contact">
          <Contact />
      </div>
      </div>
    </div>
    </div>
  );
}
