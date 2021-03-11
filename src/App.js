import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import './App.css';
import Header from './Compoments/Header/Header';
import Home from './Compoments/Home/Home';
import {Card,Button} from 'react-bootstrap';
import LeagueDetails from "./Compoments/LeagueDetails/LeagueDetails";

function App() {
  return (
    <div className="App">
      
       <Router>
      <div>
        {/* <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/dashboard">Dashboard</Link>
          </li>
        </ul>

        <hr /> */}

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
          <Route path="/home">
           <Home></Home>
          </Route>
          <Route path="/league/:idLeague">
          <LeagueDetails></LeagueDetails>
          </Route>
        </Switch>
      </div>
    </Router>


    </div>
    
  );
}

export default App;
