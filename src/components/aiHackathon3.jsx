import React from "react";
import { people } from "./community/communityCollection";
// import CarouselBuilder from "./carouselBuilder";
import TeamCardBuilder from "./teamCardBuilder";
export default function AiHackathon3() {
  const linkOfTheWebsiteUserCame = document.referrer
  console.log(linkOfTheWebsiteUserCame)


  return (
    <>
    <div className="learning4youBack">
          <a href="/community" className="h1_sixth_back l4yATagBack">"Back"</a>
          {/* <a className="h1_sixth_back l4yATagBack"href="#test">"Next"</a> */}
      </div>
      <p className="learnHeading h1_sixth">"Ai Hackathon 3.0 @ SURF Incubator hosted by <p className="invisibleSpace">-</p> <a href="https://leanerstartups.com/" target="_blank" rel="noreferrer"> Leaner Startups</a>"</p>
      {/* create loop and autmation add this to url endpoint: start=true&loop=true&delayms=3000 */}
      <div className="learning4youBody">
        <div className="learning4youText">
          <p className="indent">There's something uniquely thrilling about competing in a hackathon. It's an adrenaline-filled, intense, and gratifying experience that never fails to bring out the best in my team and me. The most recent competition was no exception, and though we didn't take home the grand prize, we moved onto the semifinals—a triumph in itself.</p>
          <p className="indent">The task was to pitch our solution to a panel of judges—an AI-based learning model. Our concept was a system that "takes in courses, pre-trains our model, and then helps the students learn that subject," I told the judges. Essentially, the AI was designed to adapt to the user's learning pattern, providing personalized guidance.</p>
          <p className="indent">However, the model didn't merely correct mistakes. As I explained, "if I answer that wrong, it's going to be able to scrape based on the answers and then I'll be able to prompt and ask why did I get this wrong." This feature, we believed, added real value for the user—going beyond simple right or wrong answers to help them understand the 'why' and 'how' of their mistakes.</p>
          <p className="indent">One of the critical points of our discussion with the judges was about the source of our AI's knowledge. We'd decided early on that our AI model would rely on transcripts provided by our partners. "That's when we train our model with that specific transcript," I said, "that way it doesn't hallucinate and go outside of it." This approach ensured our AI model stuck to the curriculum and didn't extrapolate beyond the given context.</p>
          <p className="indent">As we debated our ideal customer, I found myself defending our choice of target market: "We want to target Coursera, the Udemy Academy, any on-demand online platform that's basically providing education to consumers." The judges suggested individual content creators worldwide or global communities, but we had faith in our chosen path.</p>
          <p className="indent">The judges also probed into the personalization aspect of our model. "So, I guess to personalize the model for each individual student, we just track their pattern of learning," I responded. This meant that while our AI wouldn't know everything about the user, it would understand their learning progression in a specific course—enough to provide personalized assistance.</p>
          <p className="indent">This back-and-forth with the judges wasn't easy. There were moments of doubt and uncertainty, but there were also moments of clarity and affirmation. We defended our idea, articulated our vision, and by the time we'd reached the five-minute mark, we'd made our case.</p>
          <p className="indent">Despite the high stakes, the grueling hours, and the intense scrutiny, this was my third hackathon and each one has been a worthwhile endeavor. As we advanced into the semifinals, I felt a sense of accomplishment. Even though we didn't win, we had made it that far.</p>
          <p className="indent">Ultimately, hackathons aren't just about winning or losing—they're about growing, learning, and pushing the boundaries of what's possible. They're about stepping out of your comfort zone, taking risks, and innovating. And in the end, they're about the joy of creating something meaningful, of seeing an idea evolve from a mere concept into a solution with real-world potential.</p>
          <p className="indent">In that spirit, I can't wait for the next hackathon, and the opportunity to grow, learn, and innovate once more.</p>
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
    </>
  );
}