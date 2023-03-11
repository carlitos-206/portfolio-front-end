// This file holds card from the img tile
import React from "react";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { ai_img_objects_list } from "./images/ai_imgs/ai_img_list";

// This for when the card dispalays, it requires a idx as param
export default function MyImgsCardBuilder({idx}){
  if(idx !== null){
    const closeCard = (e) =>{
      e.preventDefault()
      let card = document.getElementsByClassName('imgCard')[0]
      card.setAttribute('style', 'display:none')
    }
    return(
      <Card className="imgCard section-background-light card-container container-shape">
        <Card.Img className='img-card-actual-image'variant="top" src={ai_img_objects_list[idx].img} />
        <Card.Body>
          <Card.Title className="img-card-title text-lift-light">Prompt:</Card.Title>
          <Card.Text className="img-card-text text-lift-light">
            " {ai_img_objects_list[idx].prompt} "
          </Card.Text>
            <Button variant="primary" className="img-card-button img-card-button-1" href={ai_img_objects_list[idx].img} download={`img_${idx+1}_carlitos_collection`}>Download</Button>
            <Button variant="primary" className="img-card-button img-card-button-2" onClick={(e)=>{closeCard(e)}} >Close</Button>
        </Card.Body>
      </Card>
    )
  }

}