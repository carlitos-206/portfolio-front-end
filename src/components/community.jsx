import React from "react";
import { seaHack, aiHack2, aiHack3, techEvent, coaching } from "./community/communityCollection";
import CarouselBuilder from "./carouselBuilder";
import Button from 'react-bootstrap/Button';
import linkin from './images/contact/linkedin.png';
import youtube from './images/contact/youtube.png';



export default function Community() {
  const title = ["< Hackathons />", "< Coaching />", "< TechEvents />" ]
  const carouselImgs = [ seaHack[1], aiHack2[3], aiHack3[4] ];

  const forwardCommunity = (project) => {
    console.log(project);
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
                            <Button key={index} className="communityProjectRenderedBtn" variant="dark" size="lg" onClick={(e)=>{forwardCommunity(item.project)}}>{item.project}</Button>
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
          <div className="hackathonBtnsContainer">
                <img className="carouselImg" src={coaching[0].img} alt="Coaching"/>
                <div className="hackathonTextBody">
                  <p className="indent">If there's one thing I've cherished about my tech journey, it's coaching those who seek my guidance. Seeing people grasp coding concepts and witnessing their perspective-driven problem-solving is immensely rewarding. It's an opportunity to test my knowledge, learn from their unique approaches, and continually grow as I help them navigate the complexities of technology.</p>
                  <div className="readMoreCommunityBtn">
                  <a href={`/comunity/hackathon/${coaching[0].endPoint}`}>
                    <Button variant="dark" size="lg" onClick={(e)=>{forwardCommunity(coaching[0].project)}}>Read More</Button>
                  </a>
                  </div>  
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
          <div className="hackathonBtnsContainer">
                <CarouselBuilder images={techEvent} />
                <div className="hackathonTextBody">
                  <p className="indent ">As someone coming from a non-technical background, I have found the tech community to be incredibly welcoming and inclusive. While initially feeling anxious, my experience attending events and participating in forums has been nothing short of amazing. The support and opportunities for growth within this community have surpassed my expectations. Engaging with like-minded individuals, embracing diverse perspectives, and benefiting from mentorship has been instrumental in my personal and professional development. The tech community's unwavering support and inclusivity make it an exceptional environment for anyone looking to learn and thrive.</p>
                  <div className="readMoreCommunityBtn">
                    <a href={`/community/hackathon/${techEvent[0].endPoint}`}>
                    <Button variant="dark"  size="lg" onClick={(e)=>{forwardCommunity(techEvent[0].project)}}>Read More</Button>
                    </a>
                  </div>
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