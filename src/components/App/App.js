import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from '../Home/Home'; 
import NoGroup from '../Home/NoGroup';

function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route exact path="/" component={NoGroup}/>
          <Route path="/:group_id" component={Home}/>
          <Route path="/contribute/:group"/>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
