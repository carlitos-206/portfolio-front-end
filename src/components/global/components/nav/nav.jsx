import React from "react";
import { Link } from "react-scroll";
import "./nav.css";

export default function Nav({source}) {
  const navigator = (e, section)=>{
    console.log('navigator', section)
    switch(section){
      case 'home':
        window.open('/', '_self')
        break;
      default:
        console.log('default')
    }
  }
  if(window.innerWidth >1440){
    if(source === 'landingPage'){
      return (
        <div className="nav_container">
          <div className="nav_logo_container">
            <h1 onClick={(e)=>{navigator(e, 'home')}}className="nav_logo errorAnimation" data-text="$%DATA#&$SENT@$%$C$">Carlos R. Caceres Martinez</h1>
          </div>
          <div className="nav_links_container">
            <Link
              to="section-1"
              spy={true}
              smooth={true}
              duration={500}
              offset={-100}
              >
              <h1 className="nav_links" >About</h1>
            </Link>
            <Link
              to="section-3"
              spy={true}
              smooth={true}
              duration={500}
              offset={100}
              >
            <h1 className="nav_links" >Projects</h1>
            </Link>
            <Link
              to="section-4"
              spy={true}
              smooth={true}
              duration={500}
              offset={-50}
              >
              <h1 className="nav_links" >Resume</h1>
            </Link>
            <Link
              to="section-5"
              spy={true}
              smooth={true}
              duration={500}
              offset={-50}
              >
            <h1 className="nav_links" >Community</h1>
            </Link>
            <Link
              to="section-6"
              spy={true}
              smooth={true}
              duration={500}
              offset={-50}
              >
            <h1 className="nav_links" >Contact</h1>
            </Link>
      
            {/* <h1 className="nav_links" >Extra</h1> */}
          </div>
        </div>
      );
    }
    else{
      return (
        <div className="nav_container">
          <div className="nav_logo_container">
            <h1 onClick={(e)=>{navigator(e, 'home')}} className="nav_logo errorAnimation" data-text="$%DATA#&$SENT@$%$C$">Carlos R. Caceres Martinez</h1>
          </div>
          <div className="nav_links_container">
            <Link
              to="section-1"
              spy={true}
              smooth={true}
              duration={500}
              offset={-100}
              >
              <h1 className="nav_links" >About</h1>
            </Link>
            <Link
              to="section-3"
              spy={true}
              smooth={true}
              duration={500}
              offset={100}
              >
            <h1 className="nav_links" >Projects</h1>
            </Link>
            <Link
              to="section-4"
              spy={true}
              smooth={true}
              duration={500}
              offset={-50}
              >
              <h1 className="nav_links" >Resume</h1>
            </Link>
            <Link
              to="section-5"
              spy={true}
              smooth={true}
              duration={500}
              offset={-50}
              >
            <h1 className="nav_links" >Community</h1>
            </Link>
            <Link
              to="section-6"
              spy={true}
              smooth={true}
              duration={500}
              offset={-50}
              >
            <h1 className="nav_links" >Contact</h1>
            </Link>
      
            {/* <h1 className="nav_links" >Extra</h1> */}
          </div>
        </div>
      );
    }
  }else{
    if(source==='landingPage'){
      return (
        <>
          <div className="nav_logo_container">
            <h1 onClick={(e)=>{navigator(e, 'home')}}className="nav_logo errorAnimation" data-text="$%DATA#&$SENT@$%$C$">Carlos R. Caceres Martinez</h1>
          </div>
          <nav class="menu">
            <ul>
              <li><a href="#products">Products</a></li>
              <li><a href="#services">Services</a></li>
              <li><a href="#careers">Careers</a></li>
              <li><a href="#about">About</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </nav>

        </>
      )
  }else{

  }
}
}
