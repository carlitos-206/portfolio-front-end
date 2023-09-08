import React from "react";
import Timeline from "./timelineComponent/timeline";
import zion from "../../../images/ui_needs/zion-bg.jpg"
export default function PortfolioPage() {
  return (
    <>
      <div className="portfolioHeader">
        <p>A Journey in Web Development: A Look into My Portfolio Evolution</p>
      </div>
      <div className="portfolioContainer">
        <div className="portfolioArticle">
          <div className="portfolioSections">
            <p className="indent">Every artist has their first sketch, every writer their first draft, and every web developer their first portfolio. Looking back on my journey, it's fascinating to see how much has changed since I built my first portfolio site using a simple Django App that served the frontend with Jinja. The website was static, merely consisting of a <a title="View Image"href={zion} target="_blank"  rel="noreferrer">high-resolution picture I took at Zion National Park</a>, a simple accordion with a statement, my resume, and contact links. At this point, JavaScript was still uncharted territory for me, and managing databases in production was a daunting task.</p>
          </div>
          <div className="portfolioSections">
            <p className="boldFont">First Brush with JavaScript</p>
            <p className="indent">My second portfolio was my introduction to JavaScript. It was akin to a child let loose with a box of neon colored crayons and an animated imagination. This website had styling for the first time, replete with neon colors and random animations. However, it was still in its infancy since the course was merely scratching the surface of JavaScript, and we had yet to connect the app to any backend service.</p>
          </div>
          <div className="portfolioSections">
            <p className="boldFont">Rising to the Challenge</p>
            <p className="indent">The true metamorphosis began after my experience at the UW Bootcamp. Equipped with a robust understanding of JavaScript and database management, I embarked on a project to build a portfolio that would include, quite literally, everything. My vision was a portfolio teeming with interactivity—multiple backend servers connected, multiple front-end libraries interacting, and a dash of my unique style.</p>
            <p className="indent">One of the highlights of this project was a function that displayed over 10,000 stars in a random order each time the page was refreshed, creating a unique pattern repeated once in a million, echoing the ever-changing patterns of our universe. Additionally, a revolving solar system and neon toolbars added to the aesthetic appeal.</p>
            <p className="indent">However, beautiful as it was, the complexity of managing this ambitious endeavor was akin to trying to juggle flaming swords. Four months slipped by, and I had barely scratched the surface of the backend work. Caught between a full-time job and my desire to implement everything, I was compelled to abandon the project.</p>
          </div>
          <div className="portfolioSections">
            <p className="boldFont">Simplifying and Prioritizing</p>
            <p className="indent">With the need for a public face for my ongoing job applications, I hastily spun up a live portfolio. This time, it was a mobile-first site with a quick statement, my resume, contact information, and a hook—my AI image generator from OpenAI. Drawing inspiration from Apple's iCloud site, I opted for a minimal, highly responsive design. Yet, to retain some of my personal flair from previous portfolios, I added an element of fun with animated bubbles.</p>
          </div>
          <div className="portfolioSections">
            <p className="boldFont">Building the Ultimate Portfolio</p>
            <p className="indent">Today, as I pen this down, I find myself working on what I believe could be my final portfolio. However, this time, I have shifted my focus from mere implementation to showcasing my expertise through my projects. I've incorporated simple backend services using AWS API Gateway with AWS Lambda for my <a title='Go to Resume' href="/resume">Resume QA Ai</a> and Google Firebase to manage incoming messages. The ease and flexibility of serverless architecture have allowed seamless integration of my Python scripts. While I could have managed all communication in AWS using DynamoDB, I have intentionally diversified to keep the challenge and fun intact in my coding journey.</p>
            <p className="indent">This latest portfolio is more than just a showcase of my work; it's a reflection of myself, my progression as a developer, and my passion for coding. In the past, I assumed my work would speak for itself, but I've realized the importance of infusing my personality into my portfolio. That is the ultimate goal of this portfolio—to market myself.</p>
            <p className="indent">I welcome you to explore my journey through these projects, utilize the AI services, and feel free to reach out with any questions. My evolution from a Django newbie to a full-stack developer navigating AWS and Google Firebase showcases not only the range of my skills but the adaptability, dedication, and passion I bring to web development. As they say, the journey of a thousand miles begins with a single step, and I'm excited to see where my steps will lead in the future of web development.</p>
          </div>
        </div>
        <div className="portfolioMedia">
          <div className="portfolioProjects">
            <Timeline />
          </div>
        </div>
      </div>
    </>
  );
}