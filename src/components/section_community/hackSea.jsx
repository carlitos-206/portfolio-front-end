import React from "react";
import { seaHack, people } from "../community/communityCollection";
import CarouselBuilder from "../global_components/carouselBuilder";
import TeamCardBuilder from "./teamCardBuilder";

export default function HackSea() {
  return (
    <>
      <div className="hackSeaBack">
        <a href="/community" className="hs_back_btn hs_h1 hs_thirteen">Back</a>
      </div>
      <div className="hackSeaContainer">
        <div className="hs_h1 hs_seven">
          <p>Hack Seattle 2022 At Amazon by <a href="https://www.hackathonsinternational.com/" target="_blank"  rel="noreferrer">Hackathons International</a> </p>
        </div>
        <div className="hackSeaBody">
          <div className="hackSeaText">
            <div className="hs_h1 hs_article_title">
              <p className="hs_font">A Deep Dive into My First Hackathon: Building 'Seratonics'</p>
            </div>
            <div className="hackSeaTextBody">
              <p className="indent hackSeaText_open_line">The stage was set at Hack Seattle, a renowned hackathon event hosted at Amazon in collaboration with Hackathons International. I found myself amidst a diverse crowd of coders, technologists, and dreamers, all geared up for a marathon of ingenuity. It was my first hackathon and I was keen to infuse my technical acumen into a project that would leave a lasting impact.</p>
              <p className="hackSea_img_w_text">
                <CarouselBuilder images={seaHack} />  
                <p className="indent hackSeaText_n_img">
                    <p>Our team was an assemblage of diverse skillsets. Angel LastName and Stuart Boekelman helmed the business model development, Lily Rose Day was our UX/UI designer therefore working with Shuaib Ahamed who was our front-end engineer and I was responsible for the technical backend, and by the team's consensus, I was chosen to lead this pool of talent.</p>
                    <p>Our challenge was clear, yet complex: devise a solution to support the residents of Bellevue, Washington grappling with mental health issues while maintaining a profitable business model. It was a mission of societal significance, cloaked in a daunting technical challenge. We named our ambitious project 'Seratonics'.</p>
                </p>
              </p>
              <p className="indent textfix_hackSea">Over the course of three intense days, we amalgamated our skills to architect a solution. Our creation, Seratonics, took shape as an interactive web application. Its design aesthetics, courtesy of Lily, were rooted in a palette of calming colors and intuitive user interfaces. Angel and Stuart harnessed their business acumen to forge a robust business model, positioning revenue streams from school subscriptions, ad placements, and community donations.</p>
              <p className="indent textfix_hackSea">Meanwhile, Shuaib and I delved into the core technical implementation. We wrote lines of code, squashed bugs, and ensured the application ran seamlessly. Simultaneously, I juggled the responsibilities of team coordination, project management, and keeping us on schedule, ensuring we didn't deviate from our roadmap and deliverables.</p>
              <p className="indent textfix_hackSea">The Seratonics web app was crafted to serve as an online portal fostering emotional, psychological, and social well-being. Its features encompassed interactive Social Emotional Learning (SEL) games, mental health progress tracking tools, community interaction platforms, and a streamlined pathway to access counseling services.</p>
              <p className="indent textfix_hackSea">
                Upon culmination of the hackathon, we had more than a functional application - we had a potential digital health revolution. Seratonics stood as a testament to our unwavering dedication and collaborative efforts, embodying technical integrity, user-centric design, and a sustainable business model.
                </p>
              <div className="centerMedia_hackSea">
                <iframe width="460" height="315"  src="https://www.youtube.com/embed/q53_2pND2ss" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                <iframe width="460" height="315" src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Ffile%2FtSns2R14fQGrSKKwNFn8dk%2F%2523firstTimers-Presentation%3Ftype%3Ddesign%26node-id%3D0%253A1%26mode%3Ddesign%26t%3DqpX5WCniraAWSzKT-1" title="FigmaPresentation" allowfullscreen></iframe>
              </div>
              <p className="indent textfix_hackSea">The final presentation echoed our success. We demonstrated our application to the judges and peers, receiving positive feedback on our seamless integration of technology, design, and business elements. Our innovative approach to address mental health issues was lauded, and the hard work that went into it recognized.</p>
              <p className="indent textfix_hackSea">Hack Seattle was a stepping stone to a journey of technological innovation that promised to impact society positively. It marked the beginning of a collaborative adventure of using our technical prowess to make a real-world difference. Despite the demanding process, we walked away with a sense of accomplishment, having pushed our boundaries and built something truly impactful. Our journey together didn't end there, though - this experience cemented our resolve to work together on future projects. The bonds formed and lessons learned at Hack Seattle are invaluable.</p>
              <p className="indent textfix_hackSea">Looking back, my first hackathon wasn't merely a competition—it was a launchpad to using technology to craft solutions with a social impact. With this profound experience behind me, I look forward to the challenges and opportunities that lie ahead.</p>

            </div>
          </div>
          <div className="teamSeratonics">
                  <div className="teamTitle_seratonics">
                    <p className="hs_h1 hs_thirteen_team">Team Members</p>
                  </div>
                  <TeamCardBuilder filter='seratonics' team={people}/>
                </div>
        </div>
      </div>
    </>
  );
}