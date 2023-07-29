// REACT IMPORTS 
import React from 'react';



// NPM PACKAGES
import {  Routes, Route } from 'react-router-dom'





// COMPONENTS 
import TopMenu from './components/navbar';
import Footer from './components/footer';
import CUBE_ZERO from './components/cube_0';
import CUBE_ONE from './components/cube_1';
import CUBE_TWO from './components/cube_2';
import AboutMe from './components/aboutMe';
import PortfolioPage from './components/portfolio';
import Resume from './components/resume';
import VideoContainer from './components/vidContainer';
import ChatContainer from './components/chatgpt';
import Contact from "./components/contact"
import Community from './components/community';
import HackSea from './components/hackSea';
import AiHackathon2 from './components/aiHackathon2';
import AiHackathon3 from './components/aiHackathon3';
// CSS 
import './App.css';





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
  
  const AboutMePage = () =>{
    return(
      <main>
        <TopMenu />
        <AboutMe />
        <Footer />
      </main>
    )
  }
  const ProjectsPagePersonalPortfolio = () =>{
    return(
      <main>
        <TopMenu />
        <PortfolioPage />
        <Footer />
      </main>
    )
  }

  const ProjectsPageOpenAiInterface = () =>{
    return(
      <main>
        <TopMenu />
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

  const CommunityPage = () =>{
    return(
      <main>
        <TopMenu />
        <Community />
        <Footer />
      </main>
    )
  }
  const HackSeaPage = () =>{
    return(
      <main>
        <TopMenu />
        <HackSea />
        <Footer />
      </main>
    )
  }
  const AiHackacthon2Page = () =>{
    return(
      <main>
        <TopMenu />
        <AiHackathon2 />
        <Footer />
      </main>
    )
  }
  const AiHackathon3Page = () =>{
    return(
      <main>
        <TopMenu />
        <AiHackathon3 />
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
        <Route path='/projects/personal/portfolio' element= { <ProjectsPagePersonalPortfolio />} />
        <Route path='/projects/personal/openai_interface' element= { <ProjectsPageOpenAiInterface />} />
        <Route path='/resume' element= { <ResumePage />} />
        <Route path='/community' element= { <CommunityPage />} />
        <Route path='/community/hackathon/AiHackathon2_0atSURFIncubator' element= { <AiHackacthon2Page />} />
        <Route path='/community/hackathon/AiHackathon3_0atSURFIncubator' element= { <AiHackathon3Page />} />
        <Route path='/community/hackathon/HackSeaAtAmazon' element= { <HackSeaPage />} />
        <Route path='/contact' element = {<ContactPage />} />
        {/* <Route path='*' element={<Navigate to='/' />} /> */}
      </Routes>
    </div>
  );
}

export default App;
