import React, {useEffect, useState} from "react";
import "./dojoSoloProject.css";
export default function DojoSoloProject() {
  const [active, setActive] = useState(false);

  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const timer_1 = setTimeout(() => {
      setVisible(true);       // Set the div to visible after 2 seconds
    }, 2000);
    const timer_2 = setTimeout(() => {
      setActive(true);
    }, 1000);
    return () => {
      clearTimeout(timer_1);
      clearTimeout(timer_2)  // Cleanup timer if the component is unmounted before timer fires
    };
  }, []);  // Empty dependency array ensures effect only runs once after initial render

  const openPopUp = (e, source)=>{
    if(source === 'rootCode'){
      window.open('https://github.com/carlitos-206/solo_project_1', 'popup', 'width=700,height=600')
    }
   
    
  }


  return (
    <div className="dojoSoloProjectContainer">
      <div className={`dojoSoloProjectTitle ${active ? 'active' : ''}`}>
        <p className="errorAnimation mx-auto" data-text="$USERNOTFOUND$">
          The Conding Dojo: Solo Project
        </p>
      </div>
      <div className={`dojoSoloProjectBody ${visible ? 'active' : ''}`}>

        <p className="indent dojoSoloProjectBody_text ">Every developer holds their first project close to their heart, and I am no exception. There's a certain raw energy, an unmatched sense of accomplishment, that your first venture into the world of coding evokes. Reflecting on it now, I am thrilled to share the experience of creating my very first full-stack application using the Django Framework.</p>
        <p className="dojoSoloProjectBody_title">Setting the Stage</p>
        <p className="indent dojoSoloProjectBody_text">No project encapsulates who you are as a developer quite like your first. For me, this project was a true testament to the skills I had acquired up to that point. Admittedly, it had its quirks: the site wasn’t exactly a paragon of responsive design, and the CSS could best be described as a 'melting pot'—a blend of borrowed CodePen styles and my own customized assets. However, despite these aesthetic challenges, the project stood as a significant milestone in my early coding journey.</p>
        <p className="dojoSoloProjectBody_title">The Concept</p>
        <p className="indent dojoSoloProjectBody_text">Envision an event invite platform where users can create events and invite others to participate. Even in its initial stages, the potential of the platform was evident—it had the promise of evolving into a comprehensive social media site. Imagine adding direct messages or introducing discussion threads to each event. While the scope of these ideas surpassed what I could execute in a mere two weeks back then, I am proud to share that the app was fully RESTful.</p>
        <p className="indent dojoSoloProjectBody_text">One key feature of the app is its security layers. Users can only access its content post authentication, and even after logging in, they can only modify an event if they authored it. To seasoned developers, this might seem like a basic implementation of session handling, but during that period, wrapping my head around this concept felt like an intellectual marathon. <a href="https://github.com/carlitos-206/solo_project_1" target="popup" onClick={(e)=>{openPopUp(e, 'rootCode')}} className="bd_sourceCodeLink_text">Read the source code</a> </p>
        <p className="dojoSoloProjectBody_title">Reflections and 'What Ifs'</p>
        <p className="indent dojoSoloProjectBody_text">There's a perpetual 'what if' paradox that haunts all creators. What if I had undertaken this project with the knowledge I possess now? How much more sophisticated, efficient, or user-friendly could it have been? But it's essential to understand that without traversing such formative experiences, the knowledge we cherish today wouldn’t exist. The journey is as crucial as the destination, if not more.</p>
        <p className="dojoSoloProjectBody_title">Experience It for Yourself</p>
        <p className="indent dojoSoloProjectBody_text">For those interested in exploring the app, I am more than happy to offer a real-time demonstration. With a quick deployment via an Ngrok web tunnel, you can delve into this early piece of my developer journey.</p>
        <p className="indent dojoSoloProjectBody_text">In conclusion, this first project symbolizes more than just code or functionality; it represents passion, learning, and the relentless pursuit of growth. It's a testament to where I began and a reminder of how far I've come. As I look ahead, I am eager to tackle more challenges, acquire new skills, and build solutions that make a difference.</p>

      </div>
    </div>
  );
}
