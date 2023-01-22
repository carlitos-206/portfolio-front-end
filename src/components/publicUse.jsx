import React from "react";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';


export default function PublicUse(){
  return(
    <section id="aiArt"className="public-form-container section-background-light card-container container-shape elevate">
      <form className=" public-form  card-container container-shape">
        <Form.Group className="mb-3">
          <Form.Label className="text-lift-light">Open AI: Dall-E 2 - Image Generator Playground</Form.Label>
          <Form.Control placeholder="Enter a prompt to generate an image" />
          <Form.Text className="text-lift-light">
            Ex: "A photorealistic depiction of the center of a black hole" 
          </Form.Text>
        </Form.Group>
        <Button className="elevate-icon glow-on-hover"variant="primary" type="submit">
          Submit
        </Button>
    </form>
    </section>
  )
}