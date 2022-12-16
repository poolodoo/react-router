import React from 'react';
import { BrowserRouter as Router, Switch, Route, NavLink } from 'react-router-dom';

import Home from './Home';
import About from './About';
import Contact from './Contact';

import './style.css';
export default function App() {
    return (
      <Router>
        <div>
          <h1>Simple SPA</h1>
          <ul className="header">
            <li><NavLink to="/">Home</NavLink></li>
            <li><NavLink to="/about">About</NavLink></li>
            <li><NavLink to="/contact">Contact</NavLink></li>
          </ul>
          <div className="content">
            <Route path="/" component={Home}/>
            <Route path="/about" component={About}/>
            <Route path="/contact" component={Contact}/>
          </div>
        </div>
      </Router>
    );
};