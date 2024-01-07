import React from "react";
import { people } from "../../global/images/community/communityCollection";
// import CarouselBuilder from "./carouselBuilder";
import TeamCardBuilder from "../../global/components/teamCardBuilder/index.jsx";
import Nav from "../../global/components/nav/nav.jsx";
import Footer from "../../global/components/footer/footer.jsx";
import "./index.css";
export default function AiHackathon3() {
  const linkOfTheWebsiteUserCame = document.referrer
  console.log(linkOfTheWebsiteUserCame)


  return (
    <>
      <Nav source={'other'} />
      <p className="learnHeading h1_sixth">"Ai Hackathon 3.0 @ SURF Incubator hosted by <p className="invisibleSpace">-</p> <a href="https://leanerstartups.com/" target="_blank" rel="noreferrer"> Leaner Startups</a>"</p>
      {/* create loop and autmation add this to url endpoint: start=true&loop=true&delayms=3000 */}
      <div className="learning4youBody">
        <div className="learning4youText">
          <p className="indent l4y-text">Participating in a hackathon offers a uniquely exhilarating experience. It is an event characterized by intense concentration and a rush of adrenaline, consistently eliciting peak performance from both my team and myself. Our latest foray into such a competition was no exception. Although we did not secure the top award, advancing to the semifinals was a significant achievement in its own right.</p>
          <p className="indent l4y-text">Our challenge involved presenting an AI-based learning model to a panel of expert judges. We proposed a system designed to ingest educational courses, pre-train our model on these inputs, and subsequently facilitate student learning in these subjects. Our AI model was crafted to adapt to each user's learning style, offering bespoke guidance.</p>
          <p className="indent l4y-text">The model's functionality extended beyond mere error correction. As I elucidated to the judges, the system is capable of analyzing incorrect responses, enabling it to provide explanations and encourage inquiry into the reasons behind these errors. This capability, we argued, provided substantial value to the user, moving past binary assessments of right and wrong to foster a deeper understanding of their learning process.</p>
          <p className="indent l4y-text">A pivotal aspect of our discussion centered around the knowledge base for our AI. From the outset, we decided to feed our model using transcripts supplied by our educational partners. This strategy, as I explained, prevents the AI from generating unfounded content and ensures adherence to the set curriculum.</p>
          <p className="indent l4y-text">In addressing our target market, I defended our strategic choice to focus on platforms like Coursera and Udemy Academy, which offer educational content to consumers on demand. While the judges proposed broadening our scope to include individual content creators and global communities, we remained confident in our initial market selection.</p>
          <p className="indent l4y-text">When questioned about personalizing our AI model, I clarified that it involves tracking each student's unique learning pattern. This approach ensures that while the AI may not possess comprehensive knowledge of the user, it can effectively discern their progression within a particular course, thereby offering tailored support.</p>
          <p className="indent l4y-text">Engaging with the judges was a challenging yet enlightening experience, filled with moments of both doubt and clarity. We stood firm in defending our concept, effectively communicating our vision. By the conclusion of our allotted presentation time, we had successfully conveyed the merits of our idea.</p>
          <p className="indent l4y-text">Despite the intense competition, rigorous effort, and critical evaluation, this was my third hackathon participation, each proving to be a rewarding experience. Advancing to the semifinals was a testament to our hard work and innovation. Winning, in this context, was secondary to the invaluable experience gained.</p>
          <p className="indent l4y-text">Hackathons transcend the binary of victory and defeat; they are about personal and professional growth, exploring new frontiers, and embracing innovation. These events push participants beyond their comfort zones, encouraging risk-taking and creative thinking. Ultimately, they celebrate the process of transforming a nascent idea into a viable, impactful solution.</p>
          <p className="indent l4y-text">With this ethos, I eagerly anticipate the next hackathon, ready to embrace further opportunities for growth, learning, and innovation.</p>
          </div>
        <div className="learning4youPPT">
          <p className="h1_sixth_back aihack3_media_titles">"Google Slides"</p>
          <iframe src="https://docs.google.com/presentation/d/e/2PACX-1vTN7d5RfHulpovjZslFBkyF5Z8stlDQQgIi45XCIrE_vm7OnyfPDNXuzTBOVBXHDem_-wKldJyTiIQH/embed?start=true&loop=true&delayms=3500" frameborder="0" width="100%" height="100%" allowfullscreen="true"  title='Learn 4 You Slides' mozallowfullscreen="true" webkitallowfullscreen="true"></iframe>
          <p className="h1_sixth_back aihack3_media_titles">"Semifinal Round Q&A"</p>
          <iframe className="aiHack3YTVid" width="100%" height="100%" src="https://www.youtube.com/embed/0ZM2fdbQb7w" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        </div>
      </div>
        <div className="learning4youMedia">
          <div className="teamL4Y">
                  <div className="teamTitle_l4y">
                    <p className="h1_sixth_back">"Team Members"</p>
                  </div>
                    <TeamCardBuilder filter='l4y' team={people}/>
                </div>
        </div>
      <Footer />
    </>
  );
}