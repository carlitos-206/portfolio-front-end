// REACT IMPORTS 
import React from 'react';



// NPM PACKAGES
import {  Routes, Route } from 'react-router-dom'





// COMPONENTS 
import TopMenu from './components/global_components/navbar';
import Footer from './components/global_components/footer';
import CUBE_ZERO from './components/section_landing/cube_0';
import CUBE_ONE from './components/section_landing/cube_1';
import CUBE_TWO from './components/section_landing/cube_2';
import AboutMe from './components/section_aboutMe/aboutMe';
import PortfolioPage from './components/section_projects/portfolio';
import Resume from './components/section_resume/resume';
import VideoContainer from './components/vidContainer';
import ChatContainer from './components/section_resume/aws_chatgpt_interface';
import Contact from "./components/section_contact/contact"
import Community from './components/section_community/community';
import HackSea from './components/section_community/hackSea';
import AiHackathon2 from './components/section_community/aiHackathon2';
import AiHackathon3 from './components/section_community/aiHackathon3';
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
