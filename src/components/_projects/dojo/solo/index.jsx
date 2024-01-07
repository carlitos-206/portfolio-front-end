import React, {useEffect, useState} from "react";
import "./index.css";
import Nav from "../../../global/components/nav/nav";

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
      window.open('https://github.com/carlitos-206/solo_project_1', 'popup', 'width=800,height=600')
    }
  }


  return (
    <>
    <Nav source={'other'} />
    <div className="dojoSoloProjectContainer">
      <div className={`dojoSoloProjectTitle ${active ? 'active' : ''}`}>
        <p>
        Party Connection: A Journey in Full-Stack Development
        </p>
      </div>
      <div className={`dojoSoloProjectBody ${visible ? 'active' : ''}`}>

        <p className="indent dojoSoloProjectBody_text "> As a developer, my first project holds a special place in my heart, and "Party Connection," my initial full-stack application developed using the Django Framework, is no exception. There's an inherent raw energy and a sense of accomplishment that comes with your first venture into coding. Reflecting on it, I'm thrilled to share my experience in creating this application</p>
        <p className="indent dojoSoloProjectBody_text">In the realm of development, your first project often serves as a mirror of your capabilities at that time. "Party Connection" was exactly that for me – a testament to my skills then. It had its quirks; the design wasn't the epitome of responsiveness, and the CSS was a hodgepodge of borrowed CodePen styles mixed with my customizations. However, these aesthetic challenges didn't detract from its significance as a major milestone in my early coding journey.</p>
        <p className="indent dojoSoloProjectBody_text">The concept of "Party Connection" was an event invite platform where users could create and manage events, signifying the potential to evolve into a comprehensive social media site with features like direct messaging and discussion threads. Although the initial two-week period limited the scope of these ideas, the app was fully RESTful, which I am proud of.</p>
        <p className="indent dojoSoloProjectBody_text">One of the key features was its layered security. Post-authentication, users could access content, but could only modify events they created. This might seem basic to seasoned developers, but at the time, it felt like an intellectual marathon to implement such session handling. <a title='Read code from GitHub' href="https://github.com/carlitos-206/solo_project_1" target="popup" onClick={(e)=>{openPopUp(e, 'rootCode')}} className="bd_sourceCodeLink_text">Read the source code</a> </p>
        <p className="indent dojoSoloProjectBody_text">The 'what if' paradox often haunts creators. What if I had embarked on this project with the knowledge I have now? How much more sophisticated and user-friendly could it have been? But it's important to realize that without these formative experiences, the knowledge and skills we value today wouldn't exist. The journey is as significant as the destination.</p>
        <p className="indent dojoSoloProjectBody_text">I am more than happy to offer a real-time demonstration of the app for those interested. A quick deployment via an Ngrok web tunnel will let you delve into this early piece of my developer journey</p>
        <p className="indent dojoSoloProjectBody_text">In conclusion, "Party Connection" symbolizes more than just code or functionality; it embodies passion, learning, and the relentless pursuit of growth. It's a testament to where I began and a reminder of how far I've come. Looking ahead, I am eager to tackle more challenges, acquire new skills, and build solutions that make a difference.</p>

      </div>
    </div>
      </>
  );
}