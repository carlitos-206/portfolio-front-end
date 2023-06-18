// REACT IMPORTS 
import React from 'react';



// NPM PACKAGES
import {  Routes, Route , Navigate } from 'react-router-dom'





// COMPONENTS 
import TopMenu from './components/navbar';
import Cube_0 from './components/cube_0';
import Cube_1 from './components/cube_1';
import Cube_2 from './components/cube_2';
// CSS 
import './App.css';





function App() {
  // This is the landpage 
  const LandingPage = () =>{
    return(
      <main>
        <TopMenu />
        <Cube_0 />
        <Cube_1 />
        <Cube_2 />
      </main>
    )
  }
  // This is the page for mobile links
  const MobileLinks = () =>{
    return(
      <main>
      </main>
    )
  }
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={ <LandingPage /> } />
        <Route path='/links' element={ < MobileLinks /> } />
        <Route path='*' element={<Navigate to='/' />} />
      </Routes>
    </div>
  );
}

export default App;
