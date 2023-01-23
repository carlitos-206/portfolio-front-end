import React, {useState}from "react";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { userAiArtRequest } from "./openAi/imgGenerator";

export default function PublicUse(){
  const [ prompt, setPrompt ] = useState(null)
  
  const sendRequest = async (e) =>{
    e.preventDefault()
    document.getElementById('ai_art_request_form').reset()
    document.getElementById('ai_art_request_form_val').disabled = true
    document.getElementById('public_submit_button').disabled = true
    let ai_art = document.getElementById("aiArt")
    ai_art.classList.add('load')
    let request = await userAiArtRequest(prompt)
    console.log(request)
    if(request.status === 200){
      let response = JSON.stringify({
        url: request.url,
        prompt: request.prompt
      })
      localStorage.setItem('img', response)
      document.getElementById('public_submit_button').disabled = false
    document.getElementById('ai_art_request_form_val').disabled = false
    ai_art.classList.remove('load')
      window.location.reload()
    }else{
    ai_art.classList.remove('load')
    document.getElementById('ai_art_request_form_val').disabled = false
      document.getElementById('public_submit_button').disabled = false
      alert("There Was an Error Try again")
    }
  }
  
  return(
    <section id="aiArt"className="public-form-container section-background-light card-container container-shape elevate">
      <Form id='ai_art_request_form' onSubmit={(e)=>{sendRequest(e)}} className="public-form  card-container container-shape">
        <Form.Group className="mb-3">
          <Form.Label className="text-lift-light">Open AI: Dall-E 2 - Image Generator Playground</Form.Label>
          <Form.Control onChange={(e)=>{setPrompt(e.target.value)}} id="ai_art_request_form_val" placeholder="Enter a prompt to generate an image" />
          <Form.Text className="text-lift-light">
            Ex: "A photorealistic depiction of the center of a black hole" 
          </Form.Text>
        </Form.Group>
        <Button id='public_submit_button' className="elevate-icon glow-on-hover"variant="primary" type="submit" >
          Submit
        </Button>
    </Form>
    </section>
  )
}