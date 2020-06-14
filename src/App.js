import React, {useState, useEffect} from 'react';
import './App.css';
import {Switch, Route, BrowserRouter as Router } from "react-router-dom";
import Home from "./pages/home/home";
import {UserProvider} from "./contexts/UserContext";

function App() {
  return (
      <Router>
          <UserProvider>
              <div className="App">
                  <Switch>
                      <Route exact path='/' component={Home}/>
                  </Switch>
              </div>
          </UserProvider>
      </Router>
  );
}

export default App;
