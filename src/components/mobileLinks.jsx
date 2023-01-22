// REACT IMPORTS 
import React from "react";

// NPM IMPORTS
import Button from '@mui/material/Button';

// COMPONENTS
import { contactListFull } from "./images/contact/contactList";
export default function MobileLinksSection(){
  return(
    <div className="links-div" style={{
      width:'100%',
      height: `100vh`
      }}>
      
      <section className="links-section">
      {contactListFull.map((item, idx)=>{
        // This allows easier navigation on mobile screens by not opening a new tab
        if(window.innerWidth < 1025){
          console.log('here')
          return(
            <div className="links-btns-div">
              <img  className={'link-images'} 
                    id={`links-img-${idx}`} 
                    src={item.icon} 
                    alt={'icon'} key={`img_key_${idx}`}/>
              <Button className="link_buttons glow-on-hover" variant="contained"
                    key={idx} onClick={(e)=>{window.location.href = item.url}}>
                  {item.title}
              </Button>
            </div>
            )
        }
        // This allows easier navigation on desktop screens 
        // since it opens new tabs and eaiser to manage
        else{
          return(
            <div className="links-btns-div">
              <img  className={'link-images'} 
                    id={`links-img-${idx}`} 
                    src={item.icon} 
                    alt={'icon'} key={`img_key_${idx}`}/>
              <Button className="link_buttons glow-on-hover" 
                    variant="contained" 
                    key={idx} onClick={(e)=>{window.open(item.url, "_blank")}}>
                  {item.title}
              </Button>
            </div>
            )
        }
 
        })}
        
      </section>

    </div>
  )
}