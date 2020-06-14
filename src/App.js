import React, {useState, useEffect} from 'react';
import './App.css';
import {Switch, Route, BrowserRouter as Router } from "react-router-dom";
import Home from "./pages/home/home";
function App() {
  return (
      <Router>
        <div className="App">
          <Switch>
            <Route exact path='/' component={Home}/>
          </Switch>
        </div>
      </Router>
  );
}

export default App;
