import React from "react";
import "./index-section-1.css";

const LandingSection1 = () => {

  return (
    <div id="section-1" className="landing_section_1_container">
      <div className="landing_section_1_title_container">
        <p>&nbsp;&nbsp;&nbsp;1|# def hello_world():</p>
        <p>&nbsp;&nbsp;&nbsp;2|# &nbsp;print('Hello World!')</p>
        <p>&nbsp;&nbsp;&nbsp;3|# </p>
        <p>&nbsp;&nbsp;&nbsp;4|# hello_world()</p>
      </div>
      <div className="landing_section_1_vid">
        <iframe width="100%" height="100%" src="https://www.youtube.com/embed/TP2QHngWIzA" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share: fullscreen;" allowFullScreen></iframe>
      </div>
    </div>
  );
}

export default LandingSection1;