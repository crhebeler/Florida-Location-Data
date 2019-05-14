import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Home from './components/Home'; 
import './index.css';
import Data_Visuals from "./components/Data_Visuals"; 
import Contact from "./components/Contact";



class App extends Component {
   render() {
    return (
      <Router>
        <div>
          <Route exact path="/" component={Home} />
          <Route path="/Data_Visuals" component={Data_Visuals} />
          <Route path="/Contact" component={Contact} />
         
          
        </div>
      </Router>
    );
  }
}

export default App;
