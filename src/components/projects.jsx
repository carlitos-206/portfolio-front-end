import React from "react";
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button';
import projects from './data/projects.json'
import github from './images/ui_needs/gitLogo.png'
import wordpress from './images/ui_needs/wordpress.png'


export default function Projects(){
  return(
    <Card className="projects-container section-background-light card-container container-shape elevate text-lift-light">
    <Card.Body>
      <Card.Title>Projects in progress</Card.Title>
      <Button variant="link" className="project-button project-button-git"><Card.Img src={github} className="project-link  elevate-icon" /></Button>
      <Button className="project-button project-button-git  elevate-icon glow-on-hover" onClick={(e)=>{window.open(projects[0].link)}}>{projects[0].title}</Button>
      <Button className="project-button project-button-git elevate-icon glow-on-hover" onClick={(e)=>{window.open(projects[1].link)}}>{projects[1].title}</Button>
      <Button variant="link " className="project-button-wp"><Card.Img src={wordpress} className="project-link  elevate-icon" /></Button>
      <Button className="project-button-wp  elevate-icon glow-on-hover" onClick={(e)=>{window.open(projects[2].link)}}>{projects[2].title}</Button>
    </Card.Body>
  </Card>
  )
}