import React from "react";
import { aiHack2, people } from "../../global/images/community/communityCollection";
import CarouselBuilder from "../../global/components/carousel/carouselBuilder";
import TeamCardBuilder from "../../global/components/teamCardBuilder/index";
import Nav from "../../global/components/nav/nav";
import Footer from "../../global/components/footer/footer";
import "./index.css";

export default function AiHackathon2(){
  console.log(aiHack2)
  return(
    <>
      <Nav source={'other'} />
      <div className="vcscoutContainer">
        <div className="vcsTitle">
          <p className="vc_second_title vc_span vc_span_second">Ai Hackathon 2.0 @ SURF Incubator by <a href="https://leanerstartups.com/" target="_blank" rel="noreferrer">Leaner Startups</a></p>
        </div>
        <div className="vcscoutBody">
          <div className="vcscoutBodyText">
            <p className="vcScout-text">As a co-founder and integral member of the development team at VC Scout, I am delighted to share the details of our remarkable experience at a high-energy hackathon hosted by Leaner Startups at Surf Incubator. The event was an incredible opportunity for our team, comprising Shuaib Ahamed, Stuarrt Boekelman, and myself, to push our limits in developing an innovative solution within the demanding timeframe of just 6 hours. Despite the competitive atmosphere and stringent time limit, we eagerly embraced the challenge, determined to maximize every moment.</p>
            <p className="vcScout-text">The hackathon presented us with a crucial task: to harness the transformative power of AI technology within a mere 6 hours. Recognizing the immense potential of AI in reshaping the startup landscape, our team immediately set to work. Leveraging our collective expertise, we crafted a dynamic AI-driven matchmaking system designed to connect startups with the critical resources they require for success. Our dedication to innovation was undeterred by the time constraints, as we strived to create a significant and enduring impact with our solution.</p>
            <p className="vcScout-text">Acknowledging the varied needs of startups, our focus was on devising a versatile and comprehensive solution. Within the limited duration of the hackathon, we developed VC Scout to be adaptable and flexible, ensuring it could meet the specific needs of entrepreneurs from a diverse array of sectors. Our objective was to simplify the process of linking startups with suitable investors and resources, laying the groundwork for their success within the confines of the available time.</p>
            <p className="vcScout-text">Despite the inherent time limitations, our commitment to leveraging AI for creating impactful startup-resource connections never wavered. Through an expedited development approach, we engineered an intelligent matchmaking system within VC Scout. Utilizing advanced AI algorithms, our aim was to revolutionize traditional networking approaches, offering startups unprecedented opportunities for growth and achievement. Our system was designed to utilize the extensive data available to match startups with compatible investors and resources, enabling them to achieve their maximum potential.</p>
            <p className="vcScout-text">Facing the challenge of time scarcity, we placed a high value on efficiency and accessibility for startups using our platform. Our team dedicated itself to ensuring that VC Scout was both user-friendly and easily navigable, allowing entrepreneurs to effortlessly utilize our services. Furthermore, we prioritized making our solution accessible to startups of varying financial capabilities, offering affordable subscription options to eliminate financial hurdles and empower every entrepreneur to benefit from VC Scout’s offerings.</p>
            <p className="vcScout-text">This hackathon experience underscored the significance of teamwork and commitment. Our team, composed of Shuaib Ahamed, Stuarrt Boekelman, and myself, united our diverse skills, insights, and enthusiasm for innovation. Each member brought their unique expertise to the table, making swift, informed decisions to make the most of our limited time. Our adaptability and dedication to continuous learning were key in overcoming challenges and delivering a solution that we proudly showcased.</p>
            <p className="vcScout-text">In conclusion, participating in the Leaner Startups hackathon at Surf Incubator was a thrilling and educational experience for our team. In spite of the time restrictions, we fully engaged in the challenge, applying AI technology to develop a cutting-edge matchmaking system that efficiently connects startups with essential resources. The teamwork and dedication displayed by Carlos R. Caceres Martinez, Stuarrt Boekelman, and Shuaib Ahamed were truly inspiring. While the hackathon was a brief episode in our journey, it was a profound affirmation of our passion for innovation and our resolve to make every hour impactful</p>

          </div>
          <div className="vcscoutBodyMedia">
            <div className="aiHack2Carusel">
              <CarouselBuilder images={aiHack2} />
            </div>
            <div>
              <div className="teamVCScout">
                {/* <div className="teamTitle_vcs">
                  <p className="vc_second_team vc_span vc_span_second">Team Members</p>
                </div> */}
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
      <Footer />
    </>
  )
}