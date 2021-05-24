import './App.css';
import React, {useState} from 'react'
import ReactDOM from "react-dom";
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Adicionar from './components/add_macaco'
import Lista from './components/full_list'
import Add_macaco from './components/add_macaco';

function App() {
  return (
    <div className="App">
      <h1>Wish me LUCKY sweety</h1>
      <Router>
        <Switch>
          <Route path="/" component={Add_macaco} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
