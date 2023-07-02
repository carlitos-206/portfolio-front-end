import React from "react";
import { aiHack2, people } from "./community/communityCollection";
import CarouselBuilder from "./carouselBuilder";
import TeamCardBuilder from "./teamCardBuilder";

export default function aiHackathon2(){
  console.log(aiHack2)
  return(
    <>
      <div className="vcscoutBack">
          <a href="/community" className="vc_second_back vc_span vc_span_second">Back</a>
      </div>
      <div className="vcscoutContainer">
        <div className="vcsTitle">
          <p className="vc_second_title vc_span vc_span_second">Ai Hackathon 2.0 @ SURF Incubator by <a href="https://leanerstartups.com/" target="_blank" rel="noreferrer">Leaner Startups</a></p>
        </div>
        <div className="vcscoutBody">
          <div className="vcscoutBodyText">
            <p className="vc_second_section_title vc_span vc_span_second">Introduction:</p>
            <p className="indent">As a co-founder and part of the development team at VC Scout, I am excited to share the incredible journey we embarked on during a fast-paced hackathon hosted by Leaner Startups at Surf Incubator. Our team, consisting of Shuaib Ahamed, Stuarrt Boekelman and myself embraced the challenge of developing an innovative solution within a tight timeframe of just 6 hours. Though the competition was intense and time was limited, we were thrilled to participate and make every moment count.</p>
            <p className="vc_second_section_title vc_span vc_span_second">Embracing the Power of AI Technology in Record Time:</p>
            <p className="indent">With just 6 hours on the clock, we knew we had to think fast and work even faster. Our team immediately recognized the immense potential of AI technology in transforming the startup ecosystem. Drawing upon our collective expertise, we harnessed the power of AI to create a dynamic matchmaking system that aimed to connect startups with the essential resources they need to thrive. Despite the time constraints, we were determined to make a lasting impact through our innovative solution.</p>
            <p className="vc_second_section_title vc_span vc_span_second">Catering to Startup Needs in a Limited Timeframe:</p>
            <p className="indent">Understanding the diverse needs of startups, we focused on creating a solution that could cater to a wide range of industries and sectors. In the short span of the hackathon, we crafted our platform, VC Scout, to be adaptable and flexible, ensuring it could address the unique requirements of entrepreneurs from various backgrounds. Our goal was to streamline the process of connecting startups with the right investors and resources, laying a foundation for success within the limited timeframe we had.</p>
            <p className="vc_second_section_title vc_span vc_span_second">The Accelerated Potential of AI-Powered Connections:</p>
            <p className="indent">Despite the time constraints, we were relentless in our pursuit of leveraging AI technology to create meaningful connections between startups and resources. Through an accelerated development process, we designed an intelligent matchmaking system within VC Scout. By employing cutting-edge AI algorithms, we aimed to transcend traditional networking methods and offer startups unparalleled opportunities for growth and success. Our solution focused on harnessing the vast amounts of data available to align startups with compatible investors and resources, enabling them to realize their full potential.</p>
            <p className="vc_second_section_title vc_span vc_span_second">Efficiency and Accessibility Within a Time Crunch:</p>
            <p className="indent">In the face of limited time, we understood the importance of efficiency and accessibility for startups. Our team worked tirelessly to ensure that VC Scout provided streamlined and user-friendly services, allowing entrepreneurs to navigate the platform seamlessly. Moreover, we remained committed to making our solution accessible to startups with varying resources. We devised affordable subscription services, breaking down financial barriers and empowering every entrepreneur to take advantage of the invaluable benefits offered by VC Scout.</p>
            <p className="vc_second_section_title vc_span vc_span_second">A Triumph of Collaboration and Dedication:</p>
            <p className="indent">The hackathon journey highlighted the importance of collaboration and dedication. Our team, consisting of Shuaib Ahamed, Stuarrt Boekelman, and myself united our skills, knowledge, and passion for innovation. Each member contributed their expertise, making informed decisions promptly to maximize our limited time. Our commitment to continuous learning and adaptability allowed us to overcome obstacles and deliver a solution that we were proud to present.</p>
            <p className="vc_second_section_title vc_span vc_span_second">Conclusion:</p>
            <p className="indent">Participating in the Leaner Startups hackathon at Surf Incubator was an exhilarating experience for our team. Despite the time constraints, we immersed ourselves in the challenge, leveraging AI technology to create a dynamic matchmaking system that connected startups with vital resources. We were inspired by the dedication and collaboration demonstrated by our team members, Carlos R. Caceres Martinez, Stuarrt Boekelman, and Shuaib Ahamed. While the hackathon was a brief moment in our journey, it served as a testament to our passion for innovation and our commitment to making every hour count</p>
            </div>
            <div className="vcscoutBodyMedia">
              <div className="aiHack2Carusel">
                <CarouselBuilder images={aiHack2} />
              </div>
              <div>
                <div className="teamVCScout">
                  <div className="teamTitle_vcs">
                    <p className="vc_second_team vc_span vc_span_second">Team Members</p>
                  </div>
                  <TeamCardBuilder filter='vcs' team={people}/>
                </div>
                <div className="vcScoutPPTHead">
                  <p className="vc_second_ppt vc_span vc_span_second">Power Point Presentation + Demo</p>
                </div>
                <div className="pptVCScout">
                  <iframe className="vcsppt" title="VCSppt" src="https://onedrive.live.com/embed?resid=6288807D84B8C474%21185&amp;authkey=!AACLbOS40L5LIdQ&amp;em=2&amp;wdAr=1.7777777777777777" frameBorder="0">This is an embedded <a target="_blank" rel="noreferrer" href="https://office.com">Microsoft Office</a> presentation, powered by <a target="_blank" rel="noreferrer" href="https://office.com/webapps">Office</a>.</iframe>
                </div>
              </div>
            </div>
          </div>
      </div>
    </>
  )
}