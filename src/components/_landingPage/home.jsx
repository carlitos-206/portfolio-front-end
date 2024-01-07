import React from "react";
import Nav from "../global/components/nav/nav";
import LandingSection1 from "./section_1/index-section-1";
import LandingSection2 from "./section_2/index-section-2";
import LandingSection3 from "./section_3/index-section-3";
import LandingSection4 from "./section_4/index-section-4";
import LandingSection5 from "./section_5/index-section-5";
import LandingSection6 from "./section_6/index-section-6";
import Footer from "../global/components/footer/footer";
import "./home.css"
const Home = () => {
  return (
    <div className="landingPage_container">
      <Nav source={'landingPage'} />
      <LandingSection1 />
      <LandingSection2 />
      <LandingSection3 />
      <LandingSection4 />
      <LandingSection5 />
      <LandingSection6 />
      <Footer />
    </div>
  );
}

export default Home;