import React from 'react';
import './index.css';

import Footer from "./Components/Footer";
import NavBar from "./Components/NavBar";
import Home from "./Components/Home";

const App = () => {
  return (
    <div className="App">

      <NavBar />
      <Home />
      <Footer />

    </div>
  );
}

export default App;
