import React from "react";
import "./index-section-3.css";
import gitPurple from "../../global/images/icons/tech/github-purple.jpeg";

export default function LandingSection3(){
  const projectRouter = (e, project)=>{
    console.log('projectRouter', project)
    switch(project){
      case 'dojo-solo':
        window.open('/coding-dojo-solo-project', '_self')
        break;
      case 'dojo-group':
        window.open('/coding-dojo-group-project', '_self')
        break;
      default:
        console.log('default')
    }
  }



  return (
    <div id="section-3" >
      <div className="projects-github-button-container" >
        <img className="projects-github-button-img" src={gitPurple} alt="" />
        <p>Click to view full GitHub</p>
      </div>
      <div className="landing_section_3_container">
        <p className="landing_section_3_text_block">&nbsp;&nbsp;20|;  </p>
        <p className="landing_section_3_text_block">&nbsp;&nbsp;21|; ##--------------------READ-ME--------------------##</p>
        <p className="landing_section_3_text_block">&nbsp;&nbsp;22|;  </p>
        <p className="landing_section_3_text_block">&nbsp;&nbsp;23|;  &nbsp;In my professional portfolio, I present a spectrum of projects that demonstrate my technical acumen in software and web development.</p>
        <p className="landing_section_3_text_block">&nbsp;&nbsp;24|;  </p>
        <p className="landing_section_3_text_block">&nbsp;&nbsp;25|;  </p>
        <p className="landing_section_3_text_block">&nbsp;&nbsp;26|;  </p>
        <p className="landing_section_3_text_block">&nbsp;&nbsp;27|;  </p>
        <p className="landing_section_3_text_block">&nbsp;&nbsp;28|;  </p>
        <p className="landing_section_3_text_block">&nbsp;&nbsp;29|;  </p>
        <p className="landing_section_3_text_block">&nbsp;&nbsp;30|;  </p>
        <p className="landing_section_3_text_block">&nbsp;&nbsp;31|;  </p>
        <p className="landing_section_3_text_block">&nbsp;&nbsp;32|; ##------------------Top-Projects------------------## </p>
        <p className="landing_section_3_text_block">&nbsp;&nbsp;33|;  </p>
        <p className="landing_section_3_text_block">&nbsp;&nbsp;34|;  &nbsp;&nbsp; - School Projects:</p>
        <p className="landing_section_3_text_block">&nbsp;&nbsp;35|;  </p>
        <p className="landing_section_3_text_block">&nbsp;&nbsp;36|;  &nbsp;&nbsp;&nbsp;&nbsp; + The Coding Dojo:</p>
        <p className="landing_section_3_text_block">&nbsp;&nbsp;37|;  </p>
        <p className="landing_section_3_text_block">&nbsp;&nbsp;38|;  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; * <span className="project_link" onClick={(e)=>{projectRouter(e, 'dojo-solo')}}>Solo Project: Party Connection</span></p>
        <p className="landing_section_3_text_block">&nbsp;&nbsp;39|;  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; # Python - Django</p>
        <p className="landing_section_3_text_block">&nbsp;&nbsp;40|;  </p>
        <p className="landing_section_3_text_block">&nbsp;&nbsp;41|;  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; * <span className="project_link" onClick={(e)=>{projectRouter(e, 'dojo-group')}}>Group Project: Music Groups</span></p>
        <p className="landing_section_3_text_block">&nbsp;&nbsp;42|;  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; # Python - Django</p>
        <p className="landing_section_3_text_block">&nbsp;&nbsp;43|;  </p>
        <p className="landing_section_3_text_block">&nbsp;&nbsp;44|;  &nbsp;&nbsp;&nbsp;&nbsp; + University of Washington</p>
        <p className="landing_section_3_text_block">&nbsp;&nbsp;45|;  </p>
        <p className="landing_section_3_text_block">&nbsp;&nbsp;46|;  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; * <span className="project_link">Solo Project: JS Portfolio</span></p>
        <p className="landing_section_3_text_block">&nbsp;&nbsp;47|;  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; # JavaScript - Node.js + Express.js</p>
        <p className="landing_section_3_text_block">&nbsp;&nbsp;48|;  </p>
        <p className="landing_section_3_text_block">&nbsp;&nbsp;49|;  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; * <span className="project_link">Solo Project: E-Commerce Site</span></p>
        <p className="landing_section_3_text_block">&nbsp;&nbsp;50|;  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; # JavaScript - React.js + Google Firebase</p>
        <p className="landing_section_3_text_block">&nbsp;&nbsp;51|;  </p>
        <p className="landing_section_3_text_block">&nbsp;&nbsp;52|;  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; * <span className="project_link">Group Project: Washington State Wildfire Tracker</span></p>
        <p className="landing_section_3_text_block">&nbsp;&nbsp;53|;  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; # JavaScript - React.js + Express.js + Node.js + MongoDB</p>
        <p className="landing_section_3_text_block">&nbsp;&nbsp;54|;  </p>
        <p className="landing_section_3_text_block">&nbsp;&nbsp;55|;  </p>
        <p className="landing_section_3_text_block">&nbsp;&nbsp;56|;  &nbsp;&nbsp; - Top Personal Projects:</p>
        <p className="landing_section_3_text_block">&nbsp;&nbsp;57|;  </p>
        <p className="landing_section_3_text_block">&nbsp;&nbsp;58|;  &nbsp;&nbsp;&nbsp;&nbsp; + <span className="project_link">Multiple Portfolio Iterations </span></p>
        <p className="landing_section_3_text_block">&nbsp;&nbsp;59|;  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; * Python</p>
        <p className="landing_section_3_text_block">&nbsp;&nbsp;60|;  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; * JavaScript</p>
        <p className="landing_section_3_text_block">&nbsp;&nbsp;61|;  </p>
        <p className="landing_section_3_text_block">&nbsp;&nbsp;62|;  &nbsp;&nbsp;&nbsp;&nbsp; + <span className="project_link">OpenAi API Interface</span></p>
        <p className="landing_section_3_text_block">&nbsp;&nbsp;63|;  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; * Python</p>
        <p className="landing_section_3_text_block">&nbsp;&nbsp;64|;  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; * JavaScript</p>
        <p className="landing_section_3_text_block">&nbsp;&nbsp;65|;  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; * AWS</p>
        <p className="landing_section_3_text_block">&nbsp;&nbsp;66|;  </p>
        <p className="landing_section_3_text_block">&nbsp;&nbsp;67|;  &nbsp;&nbsp;&nbsp;&nbsp; + <span className="project_link">Browser Data Collection</span></p>
        <p className="landing_section_3_text_block">&nbsp;&nbsp;68|;  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; * Python</p>
        <p className="landing_section_3_text_block">&nbsp;&nbsp;69|;  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; * JavaScript</p>
        <p className="landing_section_3_text_block">&nbsp;&nbsp;70|;  </p>
        <p className="landing_section_3_text_block">&nbsp;&nbsp;71|;  &nbsp;&nbsp;&nbsp;&nbsp; + <span className="project_link">Context Training ChatGPT</span></p>
        <p className="landing_section_3_text_block">&nbsp;&nbsp;72|;  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; * Python</p>
        <p className="landing_section_3_text_block">&nbsp;&nbsp;73|;  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; * JavaScript</p>
        <p className="landing_section_3_text_block">&nbsp;&nbsp;74|;  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; * AWS</p>
        <p className="landing_section_3_text_block">&nbsp;&nbsp;75|;  </p>
        <p className="landing_section_3_text_block">&nbsp;&nbsp;76|; ##-------------------All-Projects------------------## </p>
        <p className="landing_section_3_text_block">&nbsp;&nbsp;77|;  </p>
        <p className="landing_section_3_text_block">&nbsp;&nbsp;78|;  &nbsp;&nbsp; I have my projects all available in my github</p>
        <p className="landing_section_3_text_block">&nbsp;&nbsp;79|;  &nbsp;&nbsp; I can also demo projects live via Ngrok</p>
        <p className="landing_section_3_text_block">&nbsp;&nbsp;80|;  </p>
        <p className="landing_section_3_text_block">&nbsp;&nbsp;81|;  </p>
        <p className="landing_section_3_text_block">&nbsp;&nbsp;82|;  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Click here to view github</p>
        <p className="landing_section_3_text_block">&nbsp;&nbsp;83|;  </p>
        <p className="landing_section_3_text_block">&nbsp;&nbsp;84|;  </p>
        <p className="landing_section_3_text_block">&nbsp;&nbsp;85|;  </p>
        <p className="landing_section_3_text_block">&nbsp;&nbsp;86|;  </p>
        <p className="landing_section_3_text_block">&nbsp;&nbsp;87|;  </p>
      </div>
    </div>
  );
}

