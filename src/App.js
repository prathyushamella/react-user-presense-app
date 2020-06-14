import React, {useContext} from 'react';
import './App.css';
import {Switch, Route, BrowserRouter as Router } from "react-router-dom";
import Home from "./pages/home/home";
import UserHome from "./pages/user-home/user-home";
import {UserContext} from "./contexts/UserContext";

function App() {
    const user = useContext(UserContext)
    console.log(`from APP render:`, user)
  return (
      <Router>
              <div className="App">
                  <Switch>
                      <Route exact path={'/'}>
                          {
                              user?<UserHome/>:<Home/>
                          }
                      </Route>
                  </Switch>
              </div>
      </Router>
  );
}

export default App;
