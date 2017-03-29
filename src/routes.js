// External Dependencies
import React from 'react';
import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom'

// Internal Dependencies
import Home from './root';
import TopNav from './root/top-nav';


const Add = () => (
  <div>
    <h2>Add a new drummer</h2>
  </div>
);

const About = () => (
  <div>
    <h2>About</h2>
  </div>
);

// Router and Route Definitions
const AppRouter = () => (
  <Router>
    <div>
      <TopNav />
      <Route exact path="/" component={Home}/>
      <Route path="/about" component={About}/>
      <Route path="/add" component={Add}/>
    </div>
  </Router>
);

export default AppRouter;
