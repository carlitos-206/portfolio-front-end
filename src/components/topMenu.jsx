import React from "react";
import burgerMenu from "./images/ui_needs/burgerMenu.svg"
import Button from 'react-bootstrap/Button'
const resume = require('./files/Resume.pdf')
// import MainSlideShow from "./mainCarousel";
export default function TopMenuBar({sectionName}){
  const closeMenu = (e) =>{
    e.preventDefault()
    document.getElementsByClassName('menu-bar')[0].setAttribute('style', 'display:none')
  }
  const openMenu = (e) =>{
    e.preventDefault()
    let menuBar = document.getElementsByClassName('menu-bar')[0]
    if(menuBar.getAttribute('style') === 'display:block'){
      closeMenu(e)
    }else{
      menuBar.setAttribute('style', 'display:block')
    }
  }

  const downloadResume = (e)=>{
    e.preventDefault()
    fetch(resume).then(response => {
      response.blob().then(blob => {
          // Creating new object of PDF file
          const fileURL = window.URL.createObjectURL(blob);
          // Setting various property values
          let alink = document.createElement('a');
          alink.href = fileURL;
          alink.download = 'carlos_caceres_resume.pdf';
          alink.click();
      })
  })
  }

  const scrollToForm = (e) =>{
    e.preventDefault()
    let top = document.getElementById('top')
    top.scrollIntoView()
    let form = document.getElementsByClassName('contact-form')[0]
    form.setAttribute('style', 'display:block')
  }
  const scrollToAiArt=(e)=>{
    e.preventDefault()
    let aiArtCreator = document.getElementById('aiArt')
    aiArtCreator.scrollIntoView()
  }

  if(sectionName === 'landingPage'){
    return(
      <>
      <section className="topMenu-div section-background-light" style={{display: 'flex'}}>
          <section style={{display: 'flex', width:'100%', position:'relative'}}>
            {/* <MainSlideShow /> */}
            <h1 style={{
              position: 'relative',
              left:'25px',
              fontSize: '18px',
              paddingTop:"5px",
            }}>Carlitos </h1>
          </section>

          <section className="topMenu-section-mobile-links"  style={{
            display: "flex",
            justifyContent: 'flex-end',
            position: 'relative',
            right:"25px"
          }}>
            <button className="menu-button" onClick={(e)=>{openMenu(e)}}>
              <img src={burgerMenu} alt="Click 4 Menu" style={{display:'flex',Content: 'flex-end'}} />
            </button>
          </section>
          <section className="menu-bar " onClick={(e)=>{closeMenu(e)}}>
              <section className="menu-section section-background-light">
                <section className="menu-button-section">
                <p style={{
                    display: "flex",
                    justifyContent: 'center',
                    position: 'relative',
                  }}
                  >Carlos R. Cáceres Martínez </p>
                  <Button variant="primary" className="nav-menu-button" onClick={(e)=>{scrollToForm(e)}}>Contact</Button>
                  <Button variant="primary" className="nav-menu-button" onClick={(e)=>{downloadResume(e)}}>Download Resume</Button>
                  <Button variant="secondary" className="nav-menu-button" onClick={(e)=>{alert('Coming Soon!')}} >Ai Chat</Button>
                  <Button variant="primary" className="nav-menu-button" onClick={(e)=>{scrollToAiArt(e)}} >Create Ai Art</Button>
                  <Button variant="danger" className="nav-menu-button" >Close</Button>
                </section>
              </section>
          </section>
      </section>
      </>
    )
  }
  else if(sectionName === 'mobileLinks'){
    return(
      <section className="topMenu-div section-background-light" style={{display: 'flex'}}>

          <section style={{display: 'flex', width:'100%', position:'relative', justifyContent:'center'}}>
            {/* <MainSlideShow /> */}
            <h1 style={{
              position: 'relative',
              fontSize: '18px',
              paddingTop:"5px",
            }}>Carlos R. Cáceres Martínez </h1>
          </section>
      </section>
    )
  }
}