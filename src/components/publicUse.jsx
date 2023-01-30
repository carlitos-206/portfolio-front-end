import React, {useState, useEffect}from "react";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { userAiArtRequest } from "./openAi/imgGenerator";
import { policyViolation } from "./firebaseDb/SendOffs";


export default function PublicUse(){
  
  const [ prompt, setPrompt ] = useState(null)
  const [policy, setPolicy] = useState(null)

  function getCookie(cname) {
    let name = cname + "=True";
    let decodedCookie = decodeURIComponent(document.cookie);
    let ca = decodedCookie.split(';');
    for(let i = 0; i <ca.length; i++) {
      let c = ca[i];
      while (c.charAt(0) === ' ') {
        c = c.substring(1);
      }
      if (c.indexOf(name) === 0) {
        c.substring(name.length, c.length)
        document.getElementById('agreementSection').setAttribute('style', 'display:none')
        return c.substring(name.length, c.length);
      }else{
        document.getElementById('ai_art_request_form_val').disabled = true
        document.getElementById('public_submit_button').disabled = true
      }
    }
    return "";
  }

  useEffect(()=>{
    getCookie("aiImgGenerationAgreement")
  },[])
/* eslint-disable */
  useEffect(()=>{
    policyViolation(prompt)
  },[policy])
/* eslint-enable */

  const userImgGeneratorAgrement = (e) =>{
    e.preventDefault()
    document.getElementById('ai_art_request_form_val').disabled = false
    document.getElementById('public_submit_button').disabled = false
    document.getElementById('agreementSection').setAttribute('style', 'display:none')
    document.cookie = "aiImgGenerationAgreement=True; expires=Fri, 01 Jan 2049 00:00:00 UTC;"
  }
  const sendRequest = async (e) =>{
    e.preventDefault()

    document.getElementById('ai_art_request_form').reset()
    let ai_art = document.getElementById("aiArt")
    ai_art.classList.add('load')
    document.getElementById('ai_art_request_form_val').disabled = true
    document.getElementById('public_submit_button').disabled = true
    let request = await userAiArtRequest(prompt)
    if(prompt === "" || prompt === null || prompt === undefined ){
      alert("Prompt is missing")
      document.getElementById('ai_art_request_form_val').disabled = false
      document.getElementById('public_submit_button').disabled = false
      ai_art.classList.remove('load')
    }
    if(request.status === 200){
      console.log(request)
      let response = JSON.stringify({
        url: request.url,
        prompt: request.prompt,
        request:request
      })
      localStorage.setItem('img', response)
      document.getElementById('public_submit_button').disabled = false
      document.getElementById('ai_art_request_form_val').disabled = false
      ai_art.classList.remove('load')

      alert("Images erase after 1 hour dont forget to save them")
      window.location.reload()
    }else if(request.status === 400){
      console.log(request.message)
    }else{
      console.log(request)
      ai_art.classList.remove('load')
      document.getElementById('ai_art_request_form_val').disabled = false
      document.getElementById('public_submit_button').disabled = false
      if(request.moderationCheck === true || (request.error === "Your request was rejected as a result of our safety system. Your prompt may contain text that is not allowed by our safety system." && request.prompt !== "")){
        setPolicy(request)
        alert('Rule 1 has been violatated')
        setTimeout(()=>{
          let data = JSON.parse(sessionStorage.getItem('data'))
          alert(`
  THIS IS YOUR REFLECTION....
  
  Large Scale Location:
    IP: ${JSON.stringify(data.location.ip)}
    CITY: ${JSON.stringify(data.location.city)}
    STATE: ${JSON.stringify(data.location.state)}
    POSTAL: ${JSON.stringify(data.location.postal)}
  Exact Location:
    Lattitude: ${JSON.stringify(data.location.exactLocation.lat)}
    Longitude: ${JSON.stringify(data.location.exactLocation.lon)}
  Device:
    Architecture: ${JSON.stringify(data.device.cpu_architecture)}
    Moodel: ${JSON.stringify(data.device.model)}
    OS: 
      Name: ${JSON.stringify(data.device.os.name)}
      Version: ${JSON.stringify(data.device.os.version)}
    Screen:
      Width: ${JSON.stringify(data.device.screenWidth)}
      Height: ${JSON.stringify(data.device.screenHeight)}
  Browser:
    Name: ${JSON.stringify(data.browser.name)}
    Version: ${JSON.stringify(data.browser.version)}
    Engine: 
      Name: ${JSON.stringify(data.browser.engine.name)}
      Version: ${JSON.stringify(data.browser.engine.version)}
          `)
        setPrompt(null)
        },1000)
      }else{
        alert(`
        There was an error please try again
        Error: ${request.error}
        `)
        setPrompt(null)
      } 
      }
      
  }
  


  return(
    <>
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
      <section id='agreementSection' className="public-form-container section-background-light card-container container-shape">
        <Form id = 'agreementForm' onSubmit={(e)=>{userImgGeneratorAgrement(e)}} >
          <p className="agreementFields fieldIsBold underline">Rules for using the AI Image Generator</p>
          <p className="agreementFields">1. You cannot use profanity or sexual suggestive language when making a request if you create more than one request violating this rule you will be IP and device banned from making any future request. If you have been banned, you can appeal against it. </p>
          <p className="agreementFields fieldIsBold indent">* Your IP and Device will <span className="underline">ONLY</span> be tracked if you violate Rule 1</p>
          <p className="agreementFields">2.	Have Fun !!!</p>
          
        <Button id='public_submit_button' className="elevate-icon glow-on-hover"variant="primary" type="submit" >
            Agree
          </Button>
        </Form>
      </section>
    </>
  )
}