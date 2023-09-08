// REACT IMPORTS 
import React from 'react';



// NPM PACKAGES
import {  Routes, Route } from 'react-router-dom'





// COMPONENTS 

  // Global Components
    import TopMenu from './components/global_components/navbar';
    import Footer from './components/global_components/footer';
    import VideoContainer from './components/vidContainer';

  // Landing Page Components
    import CUBE_ZERO from './components/section_landing/cube_0';
    import CUBE_ONE from './components/section_landing/cube_1';
    import CUBE_TWO from './components/section_landing/cube_2';

  // About Me Section
    import AboutMe from './components/section_aboutMe/aboutMe';

  // Projects Section
    // Personal Projects
    import PortfolioPage from './components/section_projects/personal/portfolio/portfolio';
    import OpenAIArticle from './components/section_projects/personal/openAi_interface/openAI_interface';
    import BrowserData from './components/section_projects/personal/browserData/browserData';

    //School Projects
      
      // Coding Dojo Projects
      import DojoSoloProject from './components/section_projects/dojo/solo/dojoSoloProject';
      import DojoGroupProject from './components/section_projects/dojo/group/dojoGroupProject';
      
      // University of Washington Projects
      import UwSoloProject from './components/section_projects/uw/soloPortfolio/soloproject';
      import UwEcommerceProject from './components/section_projects/uw/ecommerce/ecommerce';
      import UwGroupProject from './components/section_projects/uw/group/project';

 
  // Resume Section
    import Resume from './components/section_resume/resume';
    import ChatContainer from './components/section_resume/aws_chatgpt_interface';

  // Community Section
    import Community from './components/section_community/community';
    import HackSea from './components/section_community/hackSea';
    import AiHackathon2 from './components/section_community/aiHackathon2';
    import AiHackathon3 from './components/section_community/aiHackathon3';


  // Contact Section
    import Contact from "./components/section_contact/contact"

// CSS 
import './App.css';





function App() {

  // LANDING PAGE SECTION 
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
  
  // ABOUT ME SECTION
  const AboutMePage = () =>{
    return(
      <main>
        <TopMenu />
        <AboutMe />
        <Footer />
      </main>
    )
  }

  // PROJECTS SECTION

    // PERSONAL PROJECTS
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
          <OpenAIArticle />
          <Footer />
        </main>
      )
    }

    const ProjectsPageDataCollection =() =>{
      return(
        <main>
          <TopMenu />
          <BrowserData />
          <Footer />
        </main>
      )
    }

  // SCHOOL PROJECTS

    // University of Washington Projects
    const UwSoloProjectPage = () =>{
      return(
        <main>
          <TopMenu />
          <UwSoloProject />
          <Footer />
        </main>
      )
    }

    const UwEcommerceProjectPage = () =>{
      return(
        <main>
          <TopMenu />
          <UwEcommerceProject />
          <Footer />
        </main>
      )
    }

    const UwGroupProjectPage = () =>{ 
      return(
        <main>
          <TopMenu />
          <UwGroupProject />
          <Footer />
        </main>
      )
    }

    // Coding Dojo Projects
    const ProjectsPageDojoSoloProject = () =>{
      return(
        <main>
          <TopMenu />
          <DojoSoloProject />
          <Footer />
        </main>
      )
    }

    const ProjectsPageDojoGroupProject = () =>{
      return(
        <main>
          <TopMenu />
          <DojoGroupProject />
          <Footer />
        </main>
      )
    }


  // RESUME SECTION
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

  // COMMUNITY SECTION
  const CommunityPage = () =>{
    return(
      <main>
        <TopMenu />
        <Community />
        <Footer />
      </main>
    )
  }
  
  // HACKATHON SECTION
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

  // CONTACT SECTION
  const ContactPage = () =>{
    return(
      <main>
        <TopMenu />
        <Contact />
        <Footer />
      </main>
    )
  }

  // RETURN STATEMENT with URL PATHS
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={ <LandingPage /> } />
        <Route path="/about" element={ <AboutMePage /> } />
        <Route path='/projects/personal/portfolio' element= { <ProjectsPagePersonalPortfolio />} />
        <Route path='/projects/personal/openai_interface' element= { <ProjectsPageOpenAiInterface />} />
        <Route path='/projects/personal/browser_data' element = {<ProjectsPageDataCollection />} />
        <Route path='/projects/school/uw/solo' element= { <UwSoloProjectPage />} />
        <Route path='/projects/school/uw/ecommerce' element= { <UwEcommerceProjectPage />} />
        <Route path='/projects/school/uw/group' element= { <UwGroupProjectPage />} />
        <Route path='/projects/school/dojo/solo' element= { <ProjectsPageDojoSoloProject />} />
        <Route path='/projects/school/dojo/group' element= { <ProjectsPageDojoGroupProject />} />
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
