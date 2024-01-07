import React from 'react';
import {  Routes, Route } from 'react-router-dom'

// Full Pages
import Home from "./components/_landingPage/home"

// Project Components

  // Dojo Projects
  import DojoSoloProject from './components/_projects/dojo/solo';
  import DojoGroupProject from './components/_projects/dojo/group';

function App() {

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/coding-dojo-solo-project" element={<DojoSoloProject />} />
        <Route path="/coding-dojo-group-project" element={<DojoGroupProject />} />
      </Routes>
    </div>
  );
}

export default App;
