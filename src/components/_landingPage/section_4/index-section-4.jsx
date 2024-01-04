import React from "react";
import dojologo from "../../global/images/icons/tech/dojo-logo.svg";
import uwlogo from "../../global/images/icons/tech/uw-logo.png";
import "./index-section-4.css";

const LandingSection4 = () => {

  
  return (
    <div id="section-4" className="landing-section-4-contianer">
      {/* <h1>Resume</h1> */}
      <div className="resume-top-container">
        <div className="landing-section-4-left-content-continater">
          <div className="resume-name-container">
            <h1>Carlos R. Cáceres Martínez</h1>
            <br />
            <h3>Full Stack Python & Full Stack Javascript</h3>
            {/* <h5>Available 2 weeks from hiring date</h5> */}
          </div>
          <div className="resume-professional-container">
            <h2 className="resume-section-title resume-title-color">Professional Expirience</h2>
            <div className="resume-exp-contianer resume-exp-1-contianer">
              <div className="resume-exp-title-container">
                <h3 className="resume-exp-section-title">EasySpeak</h3>
                <h4 className="resume-exp-section-role" >Software Engineer</h4>
                <h4 className="resume-exp-section-date">{'(August 2023 - Present)'}</h4>
              </div>
              <div className="resume-exp-content-contianer">
                <div className="resume-exp-content-title">
                  <h3>Responsibilities</h3>
                </div>
                <ul className="resume-exp-list-container">
                  <li className="resume-exp-list-item">
                    <p>Developed the web platform using React.js, ensuring a responsive and user-friendly interface.</p>
                  </li>
                  <li className="resume-exp-list-item">
                    <p>In the process of programing a cross-platform mobile application leveraging in React Native</p>
                  </li>
                  <li className="resume-exp-list-item">
                    <p>Administering and optimized database operations using Google Firebase for efficient data management and scalability.</p>
                  </li>
                  <li className="resume-exp-list-item">
                    <p>Engineered the backend infrastructure utilizing Python Django, contributing to robust and reliable server-side functionality.</p>
                  </li>
                  <li className="resume-exp-list-item">
                    <p>Architectured and designed the system infrastructure, focusing on scalable, efficient, and secure solutions.</p>
                  </li>
                  <li className="resume-exp-list-item">
                    <p>Conducting research on Machine Learning applications in audio, video, and text processing, aiming to integrate cutting-edge technologies into the product.</p>
                  </li>
                  <li className="resume-exp-list-item">
                    <p>Manage project documentation, version control, and issue tracking via Github, maintaining high standards of code integrity and collaboration.</p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="landing-section-4-right-content-container">
          <div className="resume-quick-contact">
            <p className="italic resume-title-color">carloscaceres041@gmail.com</p>
            <p className="italic">206-613-9348</p>
            <p className="italic">Located in Seattle, Washington</p>
          </div>
          <div className="resume-education-container">
              <h2 className="resume-title-color">Education</h2>
            <div className="resume-eduction-item">
              <div className="resume-education-item-title">
                <img className="resume-education-logo" src={dojologo} alt="Coding Dojo logo" />
              </div>
              <div className="resume-education-item-content">
                <h3>Coding Dojo</h3>
                <p>Bellevue, Washington</p>
                <p className="italic">Full Stack Web Development</p>
                <p className="italic">Certification in Python</p>
                <p className="italic">Class of 2021</p>
              </div>
            </div>

            <div className="resume-eduction-item">
              <div className="resume-education-item-title">
                <img className="resume-education-logo" src={uwlogo} alt="UW logo" />
              </div>
              <div className="resume-education-item-content">
                <h3>University of Washington</h3>
                <h5>Seattle, Washington</h5>
                <p className="italic">Full Stack Web Development</p>
                <p className="italic">Certification in JavaScript</p>
                <p className="italic">Class of 2022</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="resume-container-bottom-1">
          <div className="resume-other resume-other-certifactes">
              <h2 className="resume-title-color">Other Certification</h2>
              <p className="italic">Bilingual certificate from</p>
              <p className="italic">Seattle Public Schools,</p>
              <p className="italic">English & Español</p>
          </div>
          <div className="resume-other resume-soft-skills-contianer">
              <h2 className="resume-title-color">Soft Skills</h2>
              <p className="italic">Teamwork</p>
              <p className="italic">Communication</p>
              <p className="italic">Problem Solving</p>
              <p className="italic">Leadership</p>
              <p className="italic">Time Management</p>
              <p className="italic">Adaptability</p>
            </div>
            <div className="resume-other resume-other-languages">
              <h2 className="resume-title-color">Spoken Languages</h2>
              <p className="italic">English - Fluent</p>
              <p className="italic">Español - Fluent</p>
            </div>     
      </div>

      <div className="resume-container-bottom-2">
        <div className="resume-container-bottom-2-main-title">
          <h2 className="resume-title-color">Tech Skills</h2>
          <br />
          <h3 className="resume-section-front-end-title">- Front End -</h3>
        </div>
        <div className="resume-section-front-end-container">
          
            <div className="resume-section-front-end-table-container">
              <h4 className="resume-section-front-end-table-title">HTML 5</h4>
              <p>Templates:</p>
              <p className="italic gray">Jinja2</p>
              <p className="italic gray">View Engine EJS</p>
            </div>

            <div className="resume-section-front-end-table-container">
              <h4 className="resume-section-front-end-table-title">CSS3</h4>
              <p>Bootstrap</p>
              <p>React Bootstrap</p>
              <p>Pure CSS</p>
              <p>Animate CSS</p>
              <p>Tailwind CSS</p>
              <p>Material UI</p>
            </div>

            <div className="resume-section-front-end-table-container" >
              <h4 className="resume-section-front-end-table-title">JavaScript</h4>
              <p>Vanilla JS ES6+</p>
              <p>React.js</p>
              <p>React Native</p>
              <p>jQuery</p>
              <p>JSON</p>
            </div>

            <div className="resume-section-front-end-table-container">
              <h4 className="resume-section-front-end-table-title">Wireframes</h4>
              <p>Figma</p>
              <p>Balsamiq</p>
            </div>

            <div className="resume-section-front-end-table-container">
              <h4 className="resume-section-front-end-table-title">Web Interfaces</h4>
              <p>CDN</p>
              <p>AJAX</p>
              <p>XHMLHttpRequest</p>
              <p>Fetch API</p>
              <p>Axios</p>
            </div>

          </div>
        </div>
        <div className="resume-container-bottom-3">
        <div className="resume-container-bottom-2-main-title">
          <br />
          <h3 className="resume-section-front-end-title">- Backend -</h3>
        </div>
        <div className="resume-section-front-end-container-2">
          
            <div className="resume-section-front-end-table-container">
              <h4 className="resume-section-front-end-table-title">Python</h4>
              <p>Django</p>
              <p>Flask </p>
            </div>
            <div className="resume-section-front-end-table-container backend-language-container-js">
              <h4 className="resume-section-front-end-table-title">JavaScript</h4>
              <p>Express.js</p>
              <p>Node.js</p>
            </div>
        </div>
    </div>
    <div className="resume-container-bottom-4">
        <div className="resume-container-bottom-2-main-title">
          <br />
          <h3 className="resume-section-front-end-title">- Serverless -</h3>
        </div>
        <div className="resume-section-front-end-container-4">
          
            <div className="resume-section-front-end-table-container">
            <br />
              
              <h4 className="resume-section-front-end-table-title">Google Firebase for Python & JavaScript</h4>
              <br />
              <h4 className="resume-section-front-end-table-title">AWS API Gateway in JavaScript</h4>
              <br />
              <h4 className="resume-section-front-end-table-title">&</h4>
              <br />
              <h4 className="resume-section-front-end-table-title">AWS Lambda in Python & JavaScript </h4>

            </div>
        </div>
    </div>
    <div className="resume-container-bottom-3">
        <div className="resume-container-bottom-2-main-title">
          <br />
          <h3 className="resume-section-front-end-title">- Database -</h3>
        </div>
        <div className="resume-section-front-end-container-5">
          
            <div className="resume-section-front-end-table-container">
              <h4 className="resume-section-front-end-table-title">Relational</h4>
              <p>Python ORM (SQLite3)</p>
              <p>MySQL (w/ MySQL Workbench) </p>
              <p>AWS Dynamo DB</p>
            </div>
            <div className="resume-section-front-end-table-container backend-language-container-js">
              <h4 className="resume-section-front-end-table-title">Non-Relational</h4>
              <p>Google Firebase:</p>
              <p className="italic gray">Firestore</p>
              <p className="italic gray">Storage</p>
              <p>Mongo DB</p>
            </div>
        </div>
    </div>
    <div className="resume-container-bottom-4">
        <div className="resume-container-bottom-2-main-title">
          <br />
          <h3 className="resume-section-front-end-title">- Deployment -</h3>
        </div>
        <div className="resume-section-front-end-container-4">
          
            <div className="resume-section-front-end-table-container">
            <br />
              
              <h4 className="resume-section-front-end-table-title">AWS EC2: Linux Ubuntu </h4>
              <br />
              <h4 className="resume-section-front-end-table-title">Firebase Hosting</h4>
              <br />
              <h4 className="resume-section-front-end-table-title">Netlify</h4>
              <br />
              <h4 className="resume-section-front-end-table-title">Ngrok</h4>
              <br />
              <h4 className="resume-section-front-end-table-title">&</h4>
              <br />
              <h4 className="resume-section-front-end-table-title">Heroku</h4>
            </div>
        </div>
    </div>

    <div className="resume-container-bottom-4">
        <div className="resume-container-bottom-2-main-title">
          <br />
          <h3 className="resume-section-front-end-title">- Testing -</h3>
        </div>
        <div className="resume-section-front-end-container-4">
          
            <div className="resume-section-front-end-table-container">
            <br />
              
              <h4 className="resume-section-front-end-table-title">JEST & ESLint</h4>
            </div>
        </div>
    </div>
    <div className="resume-container-bottom-3">
        <div className="resume-container-bottom-2-main-title">
          <br />
          <h3 className="resume-section-front-end-title">- Resources -</h3>
        </div>
        <div className="resume-section-front-end-container-5">
          
            <div className="resume-section-front-end-table-container">
              <h4 className="resume-section-front-end-table-title">Operating Systems</h4>
              <p>Linux:</p>
              <p className="italic gray">Ubuntu 18.04LTS+</p>
              <p>Windows:</p>
              <p className="italic gray">Command Prompt</p>
              <p className="italic gray">Git Bash</p>
            </div>
            <div className="resume-section-front-end-table-container backend-language-container-js">
              <h4 className="resume-section-front-end-table-title">Version Control</h4>
              <p>GitHub</p>
              <p>Google Docs</p>
            </div>
            <div className="resume-section-front-end-table-container backend-language-container-js">
              <h4 className="resume-section-front-end-table-title">IDE</h4>
              <p>VS Code</p>
              <p>VIM</p>
            </div>
        </div>
    </div>
    <div className="resume-container-bottom-3">
        <div className="resume-container-bottom-2-main-title">
          <br />
          <h3 className="resume-section-front-end-title">- Other -</h3>
        </div>
        <div className="resume-section-front-end-container-6">
          
            <div className="resume-section-front-end-table-container">
              <h4 className="resume-section-front-end-table-title">Video Editing</h4>
              <p>Adobe Premier Pro</p>
            </div>
            <div className="resume-section-front-end-table-container backend-language-container-js">
              <h4 className="resume-section-front-end-table-title">Photo Editing</h4>
              <p>Adobe Light Room</p>
            </div>
            <div className="resume-section-front-end-table-container backend-language-container-js">
              <h4 className="resume-section-front-end-table-title">Illustration</h4>
              <p>Adobe Illustrator</p>
            </div>
            <div className="resume-section-front-end-table-container backend-language-container-js">
              <h4 className="resume-section-front-end-table-title">AI Video Generation</h4>
              <p>Stable Diffusion</p>
              <p className="italic gray">Automatic 1111</p>
            </div>
            <div className="resume-section-front-end-table-container backend-language-container-js">
              <h4 className="resume-section-front-end-table-title">AI Image Generation</h4>
              <p>OpenAI</p>
              <p className="italic gray">Dall-e API</p>
              <p>Stable Diffusion</p>
              <p className="italic gray">Image 2 Image</p>
              <p className="italic gray">Text 2 Image</p>
            </div>
        </div>
    </div>
    </div>
  );
}

export default LandingSection4;
