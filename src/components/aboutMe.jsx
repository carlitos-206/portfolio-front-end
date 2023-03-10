// this file holds the about me 

import React from "react";
// BootStrap
import Card from 'react-bootstrap/Card';

export default function AboutMe(){
  return(
    <Card className="about-me-container section-background-light container-shape text-lift-light elevate">
      <Card.Body>
        <Card.Title id="about-me-head" >Hello World !</Card.Title>
        <Card.Text id="about-me-text">
            My name is Carlos R. Cáceres Martínez and I am a Full Stack Web Developer.
            I bring a unique blend of technical expertise and creativity to the table.
            My proficiency in Python (Django) and JavaScript (Express + Node JS) allows me to develop dynamic and responsive web applications.
            I have experience working with a variety of databases,
            including SQL and No-SQL (SQLite3, Mongo DB, Google Firebase) and have a strong understanding of front-end development, including React JS, React BootStrap, Tail-Wind CSS, BootStrap, Pure CSS, Animate CSS, JQuery, and WordPress for CMS.
            I am also familiar with Balsamiq for design organization and wireframing.
            I am experienced in deploying web applications on various platforms, including AWS EC2, Heroku, Netlify, and Ngrok for network tunnels.
            I am always looking to expand my skill set and currently looking to learn PostgreSQL, Google Cloud, Mac OS and Swift.
            I also have experience working with both Windows and Linux operating systems and am able to navigate and troubleshoot problems efficiently within these ecosystems.
        </Card.Text>
      </Card.Body>
    </Card>
  )
}