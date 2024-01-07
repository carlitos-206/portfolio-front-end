import React from "react";
import dojoGroupProjectLogo from "../../../global/images/icons/other/dojoGroupProjectLogo.png";
import dojoCert from "../../../global/images/icons/other/dojoCert.png";
import "./index.css";
import Nav from "../../../global/components/nav/nav";
import Footer from "../../../global/components/footer/footer";
export default function DojoGroupProject() {
  
  const openPopUp = (e, source)=>{
    if(source === 'rootCode'){
      window.open('https://github.com/carlitos-206/group_project_dojo_2021/tree/final', 'popup', 'width=800,height=600')
    }
    if(source === 'outline'){
      window.open('https://github.com/carlitos-206/group_project_dojo_2021/blob/carlos/group_job_outline.txt', 'popup', 'width=800,height=600') 
    }
    if(source === 'wireframe'){
      window.open('https://github.com/carlitos-206/group_project_dojo_2021/blob/carlos/Music_Groups.png', 'popup', 'width=800,height=600')  
    }
}
  return (
    <>
    <Nav source={'other'} />
    <div className="dojoGroupProject_container">
      <div className="dojoGroupProject_title">
        <p className="dojoGroupProject_title_font"><img className="dojoGroupLogoIcon" src={dojoGroupProjectLogo} alt="" />The Coding Dojo: Group Project <img className="dojoGroupLogoIcon dojoGroupLogoIcon_flip " src={dojoGroupProjectLogo} alt="" /></p>
      </div>
      <div className="dojoGroupProject_body">
        <p className="indent dojoGroupProject_text">In the vibrant heart of South Lake Union, Seattle, amidst the dynamic culinary environment of Google's offices, I honed my skills in food safety and efficient workflow management. However, this narrative is not primarily about gastronomic accomplishments; it’s a chronicle of my unforeseen journey from the culinary arts to the realm of computer programming.</p>
        <p className="indent dojoGroupProject_text">My career commenced in the service industry, where the fast-paced nature of kitchen work ingrained in me the ability to swiftly adapt and multitask. These competencies unexpectedly became foundational for my transition to programming, where I began to perceive coding as a structured recipe to be followed.</p>
        <p className="indent dojoGroupProject_text">During the pandemic, I dedicated countless nights and days to mastering coding. My bootcamp served as a sanctuary for skill development, away from the scrutinizing gaze of the corporate sector. The service industry, albeit a distinct field, endowed me with a valuable skill: the aptitude to excel in new environments, drawing analogies from managing kitchen chaos to comprehending computer logic.</p>
        <p className="indent dojoGroupProject_text">A pivotal moment arose with my inaugural collaborative project in programming. I found myself not just participating in a group project, but also assuming a leadership role among peers who were equally novices in programming. The primary challenge was not the coding itself, but leading a team through unfamiliar territory.</p>
        <p className="indent dojoGroupProject_text">Applying the culinary principle of 'mise en place'—organizing and arranging ingredients—I implemented a systematic approach to our project. With my time solely devoted to coding, I resisted the urge to single-handedly steer the project, understanding the importance of allowing my team to engage, learn, and evolve.</p>
        <p className="indent dojoGroupProject_text">This endeavor was marked by several firsts: navigating merge conflicts on git, appreciating diverse coding perspectives, and mentoring my peers. I staunchly believe in the maxim, "If you can’t explain it, you don’t understand it." This belief was crucial as we embarked on creating our project, a RESTful web application named <a title='Read code from GitHub' href="https://github.com/carlitos-206/group_project_dojo_2021/tree/final" target="popup" onClick={(e)=>{openPopUp(e, 'rootCode')}} className="dojoGroupProject_text">“Music Groups”</a>, a text-only forum for music discussion, reminiscent of Reddit.</p>
        <p className="indent dojoGroupProject_text">My responsibilities encompassed more than just coding; I was involved in laying the foundational aspects of the application, drafting a detailed <a title='Read code from GitHub' href="https://github.com/carlitos-206/group_project_dojo_2021/blob/carlos/group_job_outline.txt" target="popup" onClick={(e)=>{openPopUp(e, 'outline')}} className="dojoGroupProject_text">project plan</a>, and creating the <a title='Read code from GitHub' href="https://github.com/carlitos-206/group_project_dojo_2021/blob/carlos/Music_Groups.png" target="popup" onClick={(e)=>{openPopUp(e, 'wireframe')}} className="dojoGroupProject_text">wireframe</a>. Additionally, I managed code quality, coordinated the development timeline of the team, and resolved all merge conflicts.</p>
        <p className="indent dojoGroupProject_text">Ultimately, our collective vision materialized into a tangible product. The project transcended the creation of a web application; it was an exercise in leadership, knowledge sharing, and mutual learning. It served as a testament that fundamental principles like diligence, leadership, and teamwork are universal, whether in a bustling kitchen or a coding bootcamp.</p>
        <p className="indent dojoGroupProject_text">If you’re interested in experiencing this project firsthand, please <a title="Contact Me" href="#contact-home-route-needed">contact me</a> for a live demonstration. Watch below as I swiftly launch a live demo through a Ngrok web tunnel.</p>
        <iframe className="ngrokVid" src="https://www.youtube.com/embed/3oPyNdDMbCs?si=YeJAAb-qY_eP7R9q" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
        <div className="dojoGroupProject_text_conclusion"> 
        <p className="italic">This project was the conclusion of the bootcamp and what earned me my first Full Stack Certificate</p>
        <img title="Coding Dojo Certification" className='dojoCert' src={dojoCert} alt="Coding Dojo Certification" />
        </div>
      </div>
    </div>
    <Footer />
    </>
  );
}
