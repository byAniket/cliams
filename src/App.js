import React from 'react';
import './App.css';
import Nav from "./nav";
import View from "./view";
import Admin from "./admin";
import Create from "./create";
import Edit from "./edit";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";


function App() {
  return (
    <Router>
      <div className="App">
        <Nav />
        <Switch>
          <Route path="/" exact component={Home}/>
          <Route path="/create" component={Create}/>
          <Route path="/view" component={View}/>
          <Route path="/edit" component={Edit}/>
          <Route path="/admin" component={Admin}/>
        </Switch>
      </div>
    </Router>
  );
}

const Home = () =>(
  <div>
    <h1>Home</h1>
  </div>
);

export default App;
