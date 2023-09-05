import React from "react";
import dojoGroupProjectLogo from "../../../images/ui_needs/dojoGroupProjectLogo.png";
export default function DojoGroupProject() {
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
        <p className="indent dojoGroupProject_text">This journey was punctuated with numerous firsts: encountering merge conflicts on git, viewing coding from diverse perspectives, and tutoring my peers. I fervently believe, "If you can’t explain it, you don’t understand it." And as we set about building our project, this ethos was put to test. Our mission was clear – design a RESTful web app, essentially a text-only Reddit clone, called “Music Groups” where users could discuss music topics.</p>
        <p className="indent dojoGroupProject_text">My role extended beyond coding; from setting the base app to sketching out a comprehensive project outline and a wireframe. Simultaneously, ensuring code maintainability, timing everyone’s development pace, and, inevitably, resolving all the merge conflicts became my responsibility.</p>
        <p className="indent dojoGroupProject_text">In the end, our vision translated into reality. The project wasn’t just about crafting a web app; it was about leading a team, sharing knowledge, and learning from each other. It was a reminder that, irrespective of the domain, be it a bustling kitchen or a coding bootcamp, the core principles of hard work, leadership, and collaboration remain the same.</p>

      </div>
    </div>
  );
}