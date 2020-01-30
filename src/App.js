import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Home from './components/Home';
import About from './components/AboutUs';
import Contact from './components/ContactUs';
import TShirts from './components/TShirts';
import Brand from './components/Brand';


function App() {
  return (
    <Router>
      <Route path="/" exact component={Home} />
      <Route path="/about" component={About} />
      <Route path="/contact" component={Contact} />
      <Route path="/t-shirts" exact component={TShirts} />
      <Route path="/t-shirts/:brand" component={Brand} />
    </Router>
  );
}

export default App;
