import React from "react";
import dojoGroupProjectLogo from "../../../images/ui_needs/dojoGroupProjectLogo.png";
import dojoCert from "../../../images/ui_needs/dojoCert.png";
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
    <div className="dojoGroupProject_container">
      <div className="dojoGroupProject_title">
        <p className="dojoGroupProject_title_font"><img className="dojoGroupLogoIcon" src={dojoGroupProjectLogo} alt="" />The Coding Dojo: Group Project <img className="dojoGroupLogoIcon dojoGroupLogoIcon_flip " src={dojoGroupProjectLogo} alt="" /></p>
      </div>
      <div className="dojoGroupProject_body">
        <p className="indent dojoGroupProject_text"> In the heart of South Lake Union, Seattle, within the bustling kitchens of Google's offices, I’ve mastered the intricate dance of ensuring food safety and maintaining a systematic workflow. Yet, this story is not about culinary triumphs; it's about my unexpected transition from the kitchen to the world of coding.</p>
        <p className="indent dojoGroupProject_text">Before delving into the realms of programming, my journey began in the service industry. The dynamics of a busy kitchen trained me to think on my feet, juggling multiple tasks simultaneously. Such skills unexpectedly positioned me perfectly for the logical world of coding, as I began to view programming akin to a recipe.</p>
        <p className="indent dojoGroupProject_text">The pandemic afforded me long nights and days of coding. My coding bootcamp was my sanctuary, a place to hone skills without the eyes of the corporate world. The service industry, although a different domain, bestowed upon me a unique superpower: the ability to shine in new groups or situations, drawing parallels from managing a chaotic kitchen to understanding computer logic.</p>
        <p className="indent dojoGroupProject_text">Soon, an opportunity presented itself – my first ever collaboration. Not only was I stepping into the world of group projects, but I found myself thrust into a leadership role amidst peers equally new to programming. The challenge wasn't the code; it was guiding a team through uncharted waters.</p>
        <p className="indent dojoGroupProject_text">Adapting the concept of 'mise en place', a term from my culinary background meaning 'put things in order', I laid down a structured plan for our project. My days, devoid of work responsibilities, were consumed by coding, often feeling tempted to single-handedly carry the project. However, leadership taught me restraint. It was essential to provide my team the opportunity to experience, learn, and grow.</p>
        <p className="indent dojoGroupProject_text">This journey was punctuated with numerous firsts: encountering merge conflicts on git, viewing coding from diverse perspectives, and tutoring my peers. I fervently believe, "If you can’t explain it, you don’t understand it." And as we set about building our project, this ethos was put to test. Our mission was clear – design a RESTful web app, essentially a text-only Reddit clone, called <a title='Read code from GitHub' href="https://github.com/carlitos-206/group_project_dojo_2021/tree/final" target="popup" onClick={(e)=>{openPopUp(e, 'rootCode')}} className="dojoGroupProject_text">“Music Groups”</a> where users could discuss music topics.</p>
        <p className="indent dojoGroupProject_text">My role extended beyond coding; from setting the base app to sketching out a comprehensive  <a title='Read code from GitHub' href="https://github.com/carlitos-206/group_project_dojo_2021/blob/carlos/group_job_outline.txt" target="popup" onClick={(e)=>{openPopUp(e, 'outline')}} className="dojoGroupProject_text">project outline</a> and a <a title='Read code from GitHub' href="https://github.com/carlitos-206/group_project_dojo_2021/blob/carlos/Music_Groups.png" target="popup" onClick={(e)=>{openPopUp(e, 'wireframe')}} className="dojoGroupProject_text">wireframe</a>. Simultaneously, ensuring code maintainability, timing everyone’s development pace, and, inevitably, resolving all the merge conflicts became my responsibility.</p>
        <p className="indent dojoGroupProject_text">In the end, our vision translated into reality. The project wasn’t just about crafting a web app; it was about leading a team, sharing knowledge, and learning from each other. It was a reminder that, irrespective of the domain, be it a bustling kitchen or a coding bootcamp, the core principles of hard work, leadership, and collaboration remain the same.</p>
        <p className="indent dojoGroupProject_text">Would you like to live a demo of this project? <a title="Contact Me" href="/contact">Contact me</a> and watch below how I quickly lunch a live demo unto the internet via a Ngrok web tunnel</p>
        <iframe className="ngrokVid" src="https://www.youtube.com/embed/3oPyNdDMbCs?si=YeJAAb-qY_eP7R9q" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
        <p className="indent dojoGroupProject_text">This project was the conclusion of the bootcamp and what earned me my first Full Stack Certificate</p>
        <img title="Coding Dojo Certification" className='dojoCert' src={dojoCert} alt="Coding Dojo Certification" />
      </div>
    </div>
  );
}