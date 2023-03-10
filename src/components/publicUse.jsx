// This file holds the logic for the return value from Open Ai

import React, {useState, useEffect}from "react";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { userAiArtRequest } from "./openAi/imgGenerator";
import { policyViolation, aiImgPromptSendOff, terminationSendOff } from "./firebaseDb/SendOffs";
import { eliminatePrivileges } from "./globalFunctions/eliminate";


export default function PublicUse(){
  const [ prompt, setPrompt ] = useState(null)
  const [policy, setPolicy] = useState(null)


  // This function checks if the cookie for user agreement exist to be able to make Open Ai calls
  function getCookie(cname) {
    let name = cname + "=True";
    let decodedCookie = decodeURIComponent(document.cookie);
    let ca = decodedCookie.split(';');
    for(let i = 0; i <ca.length; i++) {
      let c = ca[i];
      while (c.charAt(0) === ' ') {
        c = c.substring(1);
      }
      // if the cookie exist remove the agreement banner and enable the submit button
      if (c.indexOf(name) === 0) {
        c.substring(name.length, c.length)
        document.getElementById('agreementSection').setAttribute('style', 'display:none')
        document.getElementById('ai_art_request_form_val').disabled = false
        document.getElementById('public_submit_button').disabled = false
        return c.substring(name.length, c.length);
      }
    }
    // if the cookie doesnt exist display the banner and disable the submit button
    localStorage.removeItem('img')
    document.getElementById('agreementSection').setAttribute('style', 'display:block')
    document.getElementById('ai_art_request_form_val').disabled = true
    document.getElementById('public_submit_button').disabled = true
    return "";
  }
  // on arrival checks for the cookie
  useEffect(()=>{
    getCookie("aiImgGenerationAgreement")
  },[])

  // when the policy and the prompt are not null then it will run a begin to track policy violations
  useEffect(()=>{
    if(policy !== null && prompt !== null){
      policyViolation(prompt)
      setPolicy(null)
    }
  },[policy, prompt])

  // when the user agrees to the form it will remove the banner and enable the submit button
  // the cookie function is a fail safe
  const userImgGeneratorAgrement = (e) =>{
    e.preventDefault()
    document.getElementById('ai_art_request_form_val').disabled = false
    document.getElementById('public_submit_button').disabled = false
    document.getElementById('agreementSection').setAttribute('style', 'display:none')
    document.cookie = "aiImgGenerationAgreement=True; expires=Fri, 01 Jan 2049 00:00:00 UTC;"
  }
  // this is the function that controls the logic for all the returned reponses from Open Ai
  const sendRequest = async (e) =>{
    e.preventDefault()
    document.getElementById('ai_art_request_form').reset()
    let ai_art = document.getElementById("aiArt")
    ai_art.classList.add('load')
    document.getElementById('ai_art_request_form_val').disabled = true
    document.getElementById('public_submit_button').disabled = true
    let request = await userAiArtRequest(prompt)

    // This ensures it doesnt send an empty/null prompt to the ai
    // This avoids 500 responses that can trigered policy violations
    if(prompt === "" || prompt === null || prompt === undefined ){
      alert("Prompt is missing")
      document.getElementById('ai_art_request_form_val').disabled = false
      document.getElementById('public_submit_button').disabled = false
      ai_art.classList.remove('load')
    }
    // Successful request
    if(request.status === 200){
      console.log(request)
      let date = Date.now()
      let expiration_time = parseInt(date) + 3600000
      let response = JSON.stringify({
        url: request.url,
        prompt: request.prompt,
        request:request,
        img_expiration: expiration_time
      })
      await aiImgPromptSendOff(request.prompt)
      localStorage.setItem('img', response)
      document.getElementById('public_submit_button').disabled = false
      document.getElementById('ai_art_request_form_val').disabled = false
      ai_art.classList.remove('load')
      alert("Images erase after 1 hour dont forget to save them")
      window.location.reload()
    }
    // The request has failed and it will begin to check for a policy violation
    else{
      console.log(request)
      ai_art.classList.remove('load')
      document.getElementById('ai_art_request_form_val').disabled = false
      document.getElementById('public_submit_button').disabled = false
      // checks if the AI moderator failed or if it returned and error message with a non empty prompt
      if(request.moderationCheck.status === 400 || (request.error === "Your request was rejected as a result of our safety system. Your prompt may contain text that is not allowed by our safety system." && request.prompt !== "")){
        let violationCheck = localStorage.getItem('policyStrike')
        // This checks if the user has a previous violation
        if(violationCheck === null || violationCheck === '' || violationCheck === undefined ){
        setPolicy(request)
        setPrompt(request.prompt)
        alert('Rule 1 has been violatated')
        // after one second the user will see thier information to see it isn't a game
        setTimeout(()=>{
          let data = JSON.parse(sessionStorage.getItem('data'))
          let info = JSON.stringify({count: 1, timeStamp: Date.now(), ip: data.location.ip})
          localStorage.setItem('policyStrike', info)
          alert(`
  THIS IS YOUR REFLECTION....YOU GOT ONE MORE CHANCE
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
        let blocked = await terminationSendOff()
        let form = document.getElementById('aiArt')
        if(blocked){
          form.classList.add('remove')
          await eliminatePrivileges()
          alert('You are now banned from making any new request')

        }
        await eliminatePrivileges()
        alert('You are now banned from making any new request')
      }
      }
      // edge case if it wasn't process properly but there wasnt a policy violation
      else{
        alert(`
        There was an error please try again
        Error: ${request.error}
        `)
        setPrompt(null)
      } 
      }
      
  }
  

  // Generated HTML 
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
          <p className="agreementFields">2.	Each Prompt collected.</p>
          <p className="agreementFields">3.	 <span className="underline fieldIsBold">Images are not collected. Those images belong to you the creator</span>!</p>
          <p className="agreementFields">4.	Have Fun !!!</p>
        <Button id='public_submit_button' className="elevate-icon glow-on-hover"variant="primary" type="submit" >
            Agree
          </Button>
        </Form>
      </section>
    </>
  )
}