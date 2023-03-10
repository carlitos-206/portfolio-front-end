// This is the file for the Profile Card Section

// REACT IMPORTS
import React, {useState} from "react";

// BootStrap
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Form from "react-bootstrap/Form"

// Custom Imports
import profileImg from './images/ui_needs/profile.png'
import { profileCardContactList } from "./images/contact/contactList";

// Firebase Send Off
import { contactFormSendOff } from "./firebaseDb/SendOffs";

// This is the function that generates the contact card
export default function ProfileCard() {
  const[name, setName] = useState(null);
  const[email, setEmail] = useState(null);
  const[message, setMessage] = useState(null);

  // This sets the contact form to display
  const openForm = (e) =>{
    e.preventDefault();
    let formDiv = document.getElementsByClassName('contact-form')[0];
    formDiv.setAttribute('style', 'display:block');

  }
  
  // This sends the form to firebase to be logged
  const sendForm = async (e) => {
    e.preventDefault();
    let formDiv = document.getElementsByClassName('contact-form')[0];
    formDiv.setAttribute('style', 'display:none');
    let data = {
      name: name,
      email: email,
      message: message
    }
    // sendOff
    let formSendoff = await contactFormSendOff(data)
    //  sendOff Is Succesful
    if(formSendoff){
      alert("Thank you well get back to you soon")
      document.getElementById('contact-form-fields').reset()
    }else{
      alert("There was an error, check your network and try again.")
    }
  }

  // this sets the form to display none
  const closeForm = (e) =>{
    e.preventDefault()
    let formDiv = document.getElementsByClassName('contact-form')[0]
    formDiv.setAttribute('style', 'display:none')
    document.getElementById('contact-form-fields').reset()
  }


  return (
    // This is the profile card
    <Card id="top" className="profile-container section-background-light card-container container-shape elevate">
      <div className="profileImgContainer">
        <Card.Img id="profileImg" variant="top" src={profileImg} alt="Profile" />
      </div>
      <Card.Body>
        <Card.Title className="text-lift-light"> Carlos R. Cáceres Martínez</Card.Title>
        <Card.Text>
          <a className="text-lift-light  elevate-icon" href="mailto:carloscaceres041@gmail.com">carloscaceres041@gmail.com</a>
        </Card.Text>
        <Button variant="primary" className="contact-me-button  elevate-icon glow-on-hover" onClick={(e)=>{openForm(e)}}>Contact Me</Button>
        <section className="contact-links-section">
          {
            profileCardContactList.map((item, idx)=>{
              return(
                  <a key={idx} className="contact-link-a-tag" href={item.url}><img className="contact-link-icon elevate-icon" src={item.icon} alt={`link-to${item.title}`}/></a>
                  )
                })
              }
        </section>
      </Card.Body>
      
      {/* this is the contact form  */}
      <Card className="contact-form">
        <Card.Body>
          <Form onSubmit={(e)=>{sendForm(e)}} id="contact-form-fields">
            <Form.Group className="mb-3">
              <Form.Label>Name</Form.Label>
              <Form.Control onChange={(e)=>{setName(e.target.value)}} type="text" placeholder="Enter your name" className="form-fields" required/>
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Email address</Form.Label>
              <Form.Control onChange={(e)=>{setEmail(e.target.value)}} type="email" placeholder="Enter your email" className="form-fields" required/>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Message</Form.Label>
              <Form.Control onChange={(e)=>{setMessage(e.target.value)}}  as="textarea" placeholder="Write a message" className="form-fields" required/>
            </Form.Group>
            <Button variant="primary" type="submit" className="contact-form-buttons">Submit</Button>
            <Button variant="primary" type="button" className="contact-form-buttons" onClick={(e)=>{closeForm(e)}}>Cancel</Button>
          </Form>
      </Card.Body>
      </Card>
    </Card>
  );
}