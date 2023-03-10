// This file holds the card for projects in devolopement
import React from "react";
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button';
import projects from './data/projects.json'
import github from './images/ui_needs/gitLogo.png'


export default function Projects(){
  return(
    <Card className="projects-container section-background-light card-container container-shape elevate text-lift-light">
    <Card.Body className="projects-body">
      <Card.Title>Projects in progress</Card.Title>
      <Button variant="link" className="project-button project-button-git"  onClick={(e)=>{window.open("https://github.com/carlitos-206")}}><Card.Img src={github} className="project-link  elevate-icon" /></Button>
      <Button className="project-button project-button-git  elevate-icon glow-on-hover" onClick={(e)=>{window.open(projects[0].link)}}>{projects[0].title}</Button>
      <Button className="project-button project-button-git elevate-icon glow-on-hover" onClick={(e)=>{window.open(projects[1].link)}}>{projects[1].title}</Button>
    </Card.Body>
  </Card>
  )
}