// REACT IMPORTS 
import React from 'react';



// NPM PACKAGES
import {  Routes, Route , Navigate } from 'react-router-dom'





// COMPONENTS 
import TopMenu from './components/navbar';
import Footer from './components/footer';
import CUBE_ZERO from './components/cube_0';
import CUBE_ONE from './components/cube_1';
import CUBE_TWO from './components/cube_2';
import Resume from './components/resume';
import VideoContainer from './components/vidContainer';
import ChatContainer from './components/chatgpt';
import Contact from "./components/contact"
// CSS 
import './App.css';
import AboutMe from './components/aboutMe';





function App() {
  // This is the landpage 
  const LandingPage = () =>{
    return(
      <main>
        <TopMenu />
        <CUBE_ZERO />
        <CUBE_ONE />
        <CUBE_TWO />
        <Footer />
      </main>
    )
  }
  
  const ResumePage = () =>{
    return(
      <main>
        <TopMenu />
        <Resume />
        <VideoContainer/>
        <ChatContainer />
        <Footer />
      </main>
    )
  }
  const AboutMePage = () =>{
    return(
      <main>
        <TopMenu />
        <AboutMe />
        <Footer />
      </main>
    )
  }
  const ContactPage = () =>{
    return(
      <main>
        <TopMenu />
        <Contact />
        <Footer />
      </main>
    )
  }
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={ <LandingPage /> } />
        <Route path="/about" element={ <AboutMePage /> } />
        <Route path='/resume' element= { <ResumePage />} />
        <Route path='/contact' element = {<ContactPage />} />
        <Route path='*' element={<Navigate to='/' />} />
      </Routes>
    </div>
  );
}

export default App;
