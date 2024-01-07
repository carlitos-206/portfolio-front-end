import React from "react";
import Timeline from "./timeline/index.jsx";
import Nav from "../../../global/components/nav/nav.jsx";
import Footer from "../../../global/components/footer/footer.jsx";
import "./index.css"
export default function PortfolioPage() {
  return (
    <>
      <Nav source={'other'}/>
      <div className="portfolioHeader">
        <p>A Journey in Web Development: A Look into My Portfolio Evolution</p>
      </div>
      <div className="portfolioContainer">
        <div className="portfolioArticle">
          <div className="portfolioSections">
            <p className="indent">Every artist begins their journey with an initial sketch, every author with a preliminary draft, and similarly, my foray into web development commenced with the creation of my first portfolio. This initial project, a simple Django App serving the frontend with Jinja, marked the beginning of a fascinating evolution. The website was basic, featuring a high-resolution photo from Zion National Park, an accordion for my bio, resume, and contact links. At this stage, JavaScript was a realm yet to be explored, and managing databases in production seemed a daunting challenge.</p>
          </div>
          <div className="portfolioSections">
            <p className="indent">As my skills developed, I delved into JavaScript, akin to a child experimenting with neon crayons and a vivid imagination. This second portfolio, although still in its early stages, boasted styling with neon colors and playful animations. It was a significant step, yet it only scratched the surface of JavaScript's potential, and the integration of backend services was still on the horizon.</p>
          </div>
          <div className="portfolioSections">
            <p className="indent">The real transformation in my journey took place after participating in the UW Bootcamp. With a newfound depth in JavaScript and database management, I embarked on a more ambitious project. I envisioned a portfolio rich in interactivity, with multiple backend servers and front-end libraries, all imbued with my unique style. One notable feature was a function that created a unique star pattern with each page refresh, reflecting the dynamic beauty of the cosmos. Despite its visual appeal, the project's complexity was like juggling flaming swords, and with the pressures of a full-time job, it remains unfinished but not forgotten.</p>
          </div>
          <div className="portfolioSections">
            <p className="indent">Recognizing the need for a more accessible portfolio for my job applications, I pivoted to a mobile-first site, focusing on the essentials: a succinct statement, my resume, contact information, and a unique touch with my AI image generator from OpenAI. Influenced by Apple's iCloud design, I opted for a minimalist, responsive approach, yet retained a sense of personal flair with animated bubbles.</p>
          </div>
          <div className="portfolioSections">
            <p className="indent">Currently, I am working on what I believe to be my final portfolio iteration. This time, the focus is not just on implementation but on showcasing my expertise through my projects. I've incorporated simple backend services using AWS API Gateway and AWS Lambda for a <a href="#missing-link">Resume QA AI</a>, and Google Firebase for message management. The adoption of serverless architecture has enabled seamless integration of my Python scripts. While I could have centralized all communication through AWS, I intentionally diversified to keep my coding journey both challenging and enjoyable.</p>
          </div>
          <div className="portfolioSections">
            <p className="indent">This latest portfolio is more than a showcase of my work; it's a reflection of my evolution as a developer and my passion for coding. I've learned that it's not just my work that speaks for itself, but also the way I present it, infusing my personality into my portfolio. It's a tool to market myself effectively.</p>
          </div>
          <div className="portfolioSections">
            <p className="indent">I invite you to explore this journey through my projects, use the AI services, and reach out with any questions. My evolution from a Django beginner to a full-stack developer skilled in AWS and Google Firebase demonstrates my range of skills, adaptability, dedication, and passion for web development. As they say, every great journey begins with a single step, and I am excited to see where my steps will lead in the ever-evolving landscape of web development.</p>
          </div>
        </div>
        <div className="portfolioMedia">
          <div className="portfolioProjects">
            <Timeline />
          </div>
        </div>
      </div>
    <Footer />
    </>
  );
}