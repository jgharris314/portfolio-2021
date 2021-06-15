import portrait from "../img/jhFill.jpg";

import './Body.css'
import React from "react";


// import { Link, useParams, useHistory, useRouteMatch } from "react-router-dom";
// 
export default function Body({ bodyStyles }) {
  return (
    <div className="container Body" style={bodyStyles ? bodyStyles.background : null}>
      <div className="row introRow" >
        <div className="col portraitCol" style={bodyStyles ? bodyStyles.content : null}>
       
         
          <img src={portrait} alt="portrait of Jacob Harris"/ >
          
          
        </div>
        <div className="col  introCol" style={bodyStyles ? bodyStyles.content : null}>
        <p>
                    I'm Jacob, a web developer located in Denver, Colorado!
                    
                     Before web development, I was a table-games dealer and supervisor in various casinos throughout KS and CO. The industry was fun and full of fast-paced action, but it just wasn't enough for me, I need something that challenges my mental capacity every day, and keeps me learning. This is why I chose web development. The casino industry has taught me how to work as an effective teammate in a fast-paced setting. 
                     
                    When I am not working on code, I like to keep myself busy. There are many things I enjoy doing for "fun," but my biggest passion outside of code has to be kendama. To many, it is just a wooden toy, but for me, it is a form of meditation and relaxation. 
                   
                    I also enjoy playing disc golf and getting outside in general.
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
                   
                </p>
          </div>
      </div> 
      </div>
      
      <div className="row contentDiv">
      <h3 id="projects" style={bodyStyles ? bodyStyles.h3 : null}>Projects</h3>
      <div className="row content" style={bodyStyles ? bodyStyles.content : null}>
      <div className="col">
          <p>
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborumLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.."
          </p>
          </div>
      </div>
      </div>
      <div className="row contentDiv">
      <h3 id="contact" style={bodyStyles ? bodyStyles.h3 : null}>Contact</h3>
      <div className="row content" style={bodyStyles ? bodyStyles.content : null}>
      <div className="col">
          <p>
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborumLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.."
          </p>
          </div>
      </div>
      </div>
    </div>
  );
}
