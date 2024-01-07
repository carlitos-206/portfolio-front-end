import React from 'react';
import {  Routes, Route } from 'react-router-dom'

// Full Pages
import Home from "./components/_landingPage/home"

// Project Components

  // Dojo Projects
  import DojoSoloProject from './components/_projects/dojo/solo';
  import DojoGroupProject from './components/_projects/dojo/group';

  // UW Projects
  import UwEcommerceProject from './components/_projects/uw/e-commerce';

  // Personal Projects
  import PortfolioPage from './components/_projects/personal/portfolio';
  import OpenAIArticle from './components/_projects/personal/openai-interface';
  import BrowserData from './components/_projects/personal/browserData';

// Community Components

  // Hackathons
  import Seratonics from './components/_hackathon/seratonics';
  import AiHackathon2 from './components/_hackathon/vcScout';
  import AiHackathon3 from './components/_hackathon/learn4you';
function App() {

  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/coding-dojo-solo-project' element={<DojoSoloProject />} />
        <Route path='/coding-dojo-group-project' element={<DojoGroupProject />} />
        <Route path='/university-of-washington-eCommerce-project' element={<UwEcommerceProject />} />
        <Route path='/personal-project-portfolios' element={<PortfolioPage />} />
        <Route path='/personal-project-openai-interface' element={<OpenAIArticle />} />
        <Route path='/personal-project-browser-data-collection' element={<BrowserData />} />
        <Route path='/hackathon-hacksea-at-amazon' element={<Seratonics />} />
        <Route path='/hackathon-AiHackathon2.0-at-SURF-Incubator' element={<AiHackathon2 />} />
        <Route path="/hackathon-AiHackathon3.0-at-SURF-Incubator" element={<AiHackathon3 />} />
      </Routes>
    </div>
  );
}

export default App;
