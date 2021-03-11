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
