import React from 'react';
import {
  Router
} from 'react-router-dom';
import './index.css';

import Footer from "./Components/Footer";
import NavBar from "./Components/NavBar";
import Home from "./Components/Home";

const App = () => {
  return (
    <div className="App">
    <Router>
      <NavBar />
      <Home />
      <Footer />
    </Router>
    </div>
  );
}

export default App;
