import React from "react";
import "./index-section-2.css";
import gptPro from "../../global/images/icons/tech/gpt_pro.jpg";
import downLineArrow from "../../global/images/icons/other/arrow-fat-lines-down.svg";
import CustomGPT from "../../global/components/openAI/customGPT/customChat";

const LandingSection2 = () => {
  return (
    <div id="section-2" className="landing_section_2_contianer">
      <div className="lading_section_2_title_container">
        <h1><span><img src={downLineArrow} alt="" /></span> Ask my custom ChatGPT-4 about me <span><img src={downLineArrow} alt="" /></span></h1>
      </div>
      
      <div className="landing_section_2_content_container">
        <div className="landing_section_2_chat_container">
          <CustomGPT />
        </div>
        <div className="landing_section_text_container">
          <p className="landing_section_2_text_block">
            “Carlos R. Cáceres Martínez is a Full Stack Developer skilled in problem-solving and creating scalable solutions. He began his education at Coding Dojo in Bellevue, Washington, gaining Python expertise, followed by a Full Stack Web Development certification at the University of Washington, Seattle, specializing in JavaScript.
          </p>
          <p className="landing_section_2_text_block">
            Carlos is proficient in Python (Django), JavaScript (Express + Node JS), and front-end technologies like React JS, Bootstrap, TailWind CSS, JQuery, and Three JS. He excels in serverless computing, using Google Firebase and AWS Lambda, and is experienced in various databases including Python ORM, SQLite3, MySQL, Google Firestore, and MongoDB.
          </p>
          <p className="landing_section_2_text_block">
          His design skills involve using Balsamiq and Figma for wireframing, and he's adept in deployment platforms like AWS EC2, Heroku, Netlify, Ngrok and Google Firebase. Carlos is also familiar with testing frameworks like Jest and ESLint, and uses GitHub for version control, working in IDEs like VS Code and VIM across Linux and Windows.
          </p>
          <p className="landing_section_2_text_block">
          An active participant in hackathons and tech events, Carlos is bilingual in English and Spanish, known for his positive attitude and teamwork. He's currently expanding his skills in Machine Learning, and creatively engages in video editing with Adobe Premiere Pro, photo editing with Light Room, and drawing with Illustrator. With a blend of skills, certifications, and a proactive attitude, Carlos is poised to contribute significantly to any engineering team" <span><img className="gptPro-review" src={gptPro} alt="" /> ChatGPT</span>
          </p>
          <p className="landing_section_2_text_block">
          
          </p>
        </div>
      </div>
    </div>
  );
}

export default LandingSection2;