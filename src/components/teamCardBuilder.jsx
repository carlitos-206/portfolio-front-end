import React from "react";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
export default function TeamCardBuilder({filter, team}) {
  console.log("filter", filter);
  console.log("team", team);
  return (
    <div className="cardContainer">
      { 
        team.map((item, index) => {
          let projects = item.projects;
          console.log("clean", projects)
          for(let i = 0; i < projects.length; i++){
            if(projects[i] === filter){
              console.log("TF", team[i])
              return(
                <div className={`teamCard_${filter}`}>
                  <Card.Img variant="top" src={item.img} alt="Profile Img" id={`teamPic_${index}`} className={`teamPic_${filter}`}/>
                  <Card.Body className={`teamCardBody_${index}_${filter}`}>
                  <Card.Title className={`title_${filter}`}>{item.name}</Card.Title>
                  <a href={item.linkedin} target="_blank" rel="noreferrer">
                    <Button variant="primary" >Connect</Button>

                  </a>
                  </Card.Body>
                </div>
              )
            }
          }
          return(
            <>
            </>
          )
        })
      }
    </div>
  );
}