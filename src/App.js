import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Dashboard123 from './Dashboard';
import CreateUser from './CreateUser';
import CreateUser2 from './CreateUser2';
import CreateUser3 from './CreateUser3';

function App() {
  return (
    <Router>
    <div>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/createUser">Create User</Link>
        </li>
        <li>
          <Link to="/dashboard">Dashboard</Link>
        </li>
      </ul>

      <hr />

      {/*
        A <Switch> looks through all its children <Route>
        elements and renders the first one whose path
        matches the current URL. Use a <Switch> any time
        you have multiple routes, but you want only one
        of them to render at a time
      */}
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/createUser">
          <CreateUser />
        </Route>
        <Route path="/dashboard">
          <Dashboard123 />
        </Route>
        <Route path="/createUser2">
          <CreateUser2 />
        </Route>
        <Route path="/createUser3">
          <CreateUser3 />
        </Route>
      </Switch>
    </div>
  </Router>
  );
}

function Home() {
  return (
    <div>
      <h2>Home</h2>
    </div>
  );
}

export default App;
