import React from "react";
import { seaHack, aiHack2, aiHack3, techEvent } from "../../images/community/communityCollection";
import cheriRecomendation from "../../images/community/coaching/professorTestimony.png";
import CarouselBuilder from "../global/components/carousel/carouselBuilder";
import Button from 'react-bootstrap/Button';
import linkin from '../../images/contact/linkedin.png';
import youtube from '../../images/contact/youtube.png';



export default function Community() {
  const title = ["< Hackathons />", "< Coaching />", "< TechEvents />" ]
  const carouselImgs = [ seaHack[1], aiHack2[3], aiHack3[4] ];

  const forwardCommunity = (project) => {
    console.log(project);
  }
  
  const cheriPopUp = (e) => {
    let location = window.location.href;
    if(location.startsWith("http://localhost:3000/")){
      window.location.replace("#test");
    } else {
      window.location.replace("#test");
    }
    // console.log("here", e.target);
  }

  return(
    <>
      <div className="communityContainer">
        <div className="hackathon">
        <div className = "ch_div">
          <span className="span top right"></span>
          <span className="span top left"></span>
          <p className="ch_h2">{title[0]}</p>
          <span className="span bottom right"></span>
          <span className="span bottom left"></span>
        </div>
          <div className="seaHack min-h-screen w-screen bg-gradient-to-t fron-slate-950 to-slate-900">
            <div className="hackathonBtnsContainer">
                <CarouselBuilder images={carouselImgs} />
                <div className="hackathonTextBody">
                  <p className="indent ">Prepare to be amazed as I take you on a journey into the world of hackathons, where brilliant minds converge to solve real-world challenges and create groundbreaking projects. One such project, "Seratonics," emerged from a hackathon, revolutionizing mental health support by seamlessly connecting users with professionals in Bellevue, Washington. A second hackathon brought, "VC Scout"  an AI-powered matchmaking system that is powered by ChatGPT to bridge the gap between startups and investors, propelling entrepreneurial growth. The most recent hackathon surfaced, "Learning 4 You" an AI-driven tool transforms education, empowering students by tracking progress, identifying areas for improvement, and providing personalized support. These independent hackathon projects exemplify the power of innovation, collaboration, and technology to shape a better future. Click on a project to learn more.</p>
                  <div className="communityProjectReadMoreBtns">
                    {
                      carouselImgs.map((item, index) => {
                        return(
                          <a href={`/community/hackathon/${item.endPoint}`}>
                            <Button key={index} className="communityProjectRenderedBtn"  onClick={(e)=>{forwardCommunity(item.project)}}>{item.project}</Button>
                          </a>
                          
                        )
                      }
                      )
                    }
                  </div>
            </div>
            </div>
          </div>
        </div>
        <div className="coaching">
          <div className = "ch_div">
            <span className="span top right"></span>
            <span className="span top left"></span>
            <p className="ch_h2">{title[1]}</p>
            <span className="span bottom right"></span>
            <span className="span bottom left"></span>
          </div>
          <div className="coachingContainer">
            <div className="coachingMedia">
              <iframe className="coachVid" width="660" height="350" src="https://www.youtube.com/embed/dmxk2QSwSTY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
              <div>
                <Button  className="cheriMoreCommunity" onClick={(e)=>cheriPopUp(e)}>View Mention Project</Button>
                <img  className="cheriRecomenation_community" src={cheriRecomendation} alt="LinkedInRecommendation" />
              </div>
            </div>
            <div className="hackathonTextBody">
              <p className="indent ">Throughout my tech journey, coaching and mentoring others has been a cherished endeavor that extends beyond my time in school. Even now, outside of the academic setting, I find great fulfillment in guiding and supporting those who seek help. The joy I experience when individuals grasp coding concepts and develop their problem-solving skills remains immensely rewarding. In these coaching sessions, not only do I share my knowledge, but I also learn from their unique perspectives, fostering continuous growth.</p>
              <p className="indent">One memorable coaching session stands out, where I was helping someone with their JavaScript work. Little did I know that they would introduce me to AWS Lambda and API Gateway. While my intention was simply to guide them in JavaScript, they excitedly shared their experience with these AWS services. Their enthusiasm sparked my curiosity, leading me to delve deeper into understanding the power and versatility of Lambda functions and API Gateway.</p>
              <p className="indent">Coaching and mentoring others have not only allowed me to reinforce my own understanding and stay up-to-date with the latest advancements but have also presented unexpected learning opportunities. It is a testament to the reciprocal nature of teaching and learning. As I assist individuals in navigating the complexities of technology, they, in turn, can introduce me to new tools and concepts.</p>
              <p className="indent">This experience reaffirms my belief that coaching and mentoring others in their tech journey goes beyond imparting knowledge. It fosters a culture of mutual learning, where both the mentor and mentee can contribute and grow. It highlights the importance of remaining open-minded and receptive to the insights and experiences shared by those I guide. As I continue on my tech journey, I eagerly embrace these moments of unexpected learning, knowing that they enrich not only my own tech journey but also the lives of those I have the privilege to mentor.</p>
            </div>
            </div>
        </div>
        <div className="techEvents">
          <div className = "ch_div">
            <span className="span top right"></span>
            <span className="span top left"></span>
            <p className="ch_h2">{title[2]}</p>
            <span className="span bottom right"></span>
            <span className="span bottom left"></span>
          </div>
          <div className="techEventsContainer">
                <div className="techEventMedia">
                  {
                    techEvent.map((item, index) => {
                      return(
                          <img className="techEventImg" src={item.img} alt={item.alt} />
                      )
                    }
                    )
                  }
                </div>
                <div className="hackathonTextBody">
                  <p className="indent">As someone coming from a non-technical background, I have found the tech community to be incredibly welcoming and inclusive. Despite initially feeling anxious about venturing into a new field, my experience attending tech events and participating in forums has been nothing short of amazing. The warmth and support I have encountered within the community have far exceeded my expectations. The tech community's commitment to inclusivity and openness has created an exceptional environment for learning, growth, and personal development.</p>
                  <p className="indent">One notable event I had the opportunity to attend was an AWS Cloud Exploration Day. This event featured a panel of AWS Architects and Developers who shared their insights and experiences. It was a valuable opportunity to learn from experts in the field and gain deeper insights into cloud computing. The event also provided continuous learning opportunities, enabling me to explore various aspects of AWS and further expand my knowledge.</p>
                  <p className="indent">Although I have only attended a single non-hackathon tech event so far, I am eagerly looking forward to experiencing more. The tech community's unwavering support and inclusivity have been crucial in fostering my enthusiasm and desire to immerse myself further. I am excited to participate in future events, engage with industry professionals, and tap into the wealth of knowledge and expertise available within the community.</p>
                  <p className="indent">Engaging with like-minded individuals in the tech community has been transformative. Embracing diverse perspectives and benefitting from mentorship opportunities have played a significant role in my personal and professional development. The willingness of community members to share their knowledge and support others has created an environment where learning and growth are actively encouraged. I am always in the search for more events if you know of any others <a title='Contact me'href="/contact">send me and invite</a>
                  </p>
                </div>
            </div>
        </div>
        <div className="externalCommunityBtn">
          <Button className="externalButtons communityConnection" variant="outline-primary" href="https://www.linkedin.com/in/carlitos206/"><img className="connectionIcons linkedInIcon"src={linkin} alt="LinkedIn" /></Button>
          <Button id="youtubeBtn" className="externalButtons communityConnection" variant="outline-primary" href="https://www.youtube.com/channel/UCfJtIgTcGEX_D0TLjFi-COQ"><img className="connectionIcons youtubeIcon"src={youtube} alt="YouTube" /></Button>
        </div>
      </div>
    </>
  )
}