// REACT IMPORTS 
import React from 'react';



// NPM PACKAGES
import {  Routes, Route , Navigate } from 'react-router-dom'





// COMPONENTS 
import MobileLinksSection from './components/mobileLinks';
import TopMenuBar from './components/topMenu';
// import MainSlideShow from './components/mainCarousel';
import ProfileCard from './components/profileCard';
import TopImgs from './components/topAi_10_imgs';
import AboutMe from './components/aboutMe';
import Projects from './components/projects';
import Resume from './components/resume';
import PublicUse from './components/publicUse';
import PublicImgs from './components/public_imgs';
import Footer from './components/footer';
// CSS 
import './App.css';





function App() {
  // This is the landpage 
  const LandingPage = () =>{
    return(
      <main>
        <TopMenuBar sectionName ="landingPage" />
        <section className='landing-body'>
            <section className='landing-section-1'>
              <ProfileCard />
              <TopImgs />
          </section>
        </section>
        <section className='landing-body'>
          <section className='landing-section-2'>
            <AboutMe />
            <Projects />
          </section>
        </section>
        <section className='landing-body'>
          <section className='landing-section-3'>
            <Resume />
          </section>
        </section>
        
        <section className='landing-body'>
          <section className='landing-section-4'>
            <PublicUse />
            
          </section>
        </section>
        <section className='landing-body'>
          <section className='landing-section-5'>
            <PublicImgs />
          </section>
        </section>

        <section className='landing-body'>
          <section className='landing-section-6'>
          <div class="wrapper">
      <div><span class="dot"></span></div>
      <div><span class="dot"></span></div>
      <div><span class="dot"></span></div>
      <div><span class="dot"></span></div>
      <div><span class="dot"></span></div>
      <div><span class="dot"></span></div>
      <div><span class="dot"></span></div>
      <div><span class="dot"></span></div>
      <div><span class="dot"></span></div>
      <div><span class="dot"></span></div>
      <div><span class="dot"></span></div>
      <div><span class="dot"></span></div>
      <div><span class="dot"></span></div>
      <div><span class="dot"></span></div>
      <div><span class="dot"></span></div>
      <div><span class="dot"></span></div>
      <div><span class="dot"></span></div>
      <div><span class="dot"></span></div>
      <div><span class="dot"></span></div>
      <div><span class="dot"></span></div>
      <div><span class="dot"></span></div>
      <div><span class="dot"></span></div>
      <div><span class="dot"></span></div>
      <div><span class="dot"></span></div>
      <div><span class="dot"></span></div>
      <div><span class="dot"></span></div>
      <div><span class="dot"></span></div>
      <div><span class="dot"></span></div>
      <div><span class="dot"></span></div>
      <div><span class="dot"></span></div>
      <div><span class="dot"></span></div>
      <div><span class="dot"></span></div>
      <div><span class="dot"></span></div>
      <div><span class="dot"></span></div>
      <div><span class="dot"></span></div>
      <div><span class="dot"></span></div>
      <div><span class="dot"></span></div>
      <div><span class="dot"></span></div>
      <div><span class="dot"></span></div>
      <div><span class="dot"></span></div>
      <div><span class="dot"></span></div>
      <div><span class="dot"></span></div>
      <div><span class="dot"></span></div>
      <div><span class="dot"></span></div>
      <div><span class="dot"></span></div>
      <div><span class="dot"></span></div>
      
      
    </div>
          </section>
        </section>
          <Footer/>
        

            {/* <AboutMe /> */}
      </main>
    )
  }
  // This is the page for mobile links
  const MobileLinks = () =>{
    return(
      <main>
        <TopMenuBar sectionName ="mobileLinks" />
        <MobileLinksSection />
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
