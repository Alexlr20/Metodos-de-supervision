
import React from "react";
import ReactDOM from "react-dom";
import { Counter } from 'counter/Counter';

import "./index.css";

const App = () => (
  <div>
    <nav className="navbar">
      <div className="logo"><h1>Menu</h1></div>
      <div className="nav-link"> Hola </div>
      <div className="cta-btn">
        <button className="btn s-btn">Login</button>
        <button className="btn p-btn">Sign-Up</button>
      </div>
    </nav>
    
    <div className="sidebar">
      <div className="sucursales">
        <div className="section">
          <div className="item"> Log Out </div>
        </div>
      </div>
    </div>
    <div>
      <div className="bottom-navbar">
      </div>
    </div>
  </div>
);


ReactDOM.render(<App />, document.getElementById("app"));