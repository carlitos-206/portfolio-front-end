import React ,{useState}from "react";
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import headshot from '../images/ui_needs/headshot.jpg';
import linkin from '../images/contact/linkedin.png';
import github from '../images/contact/github.png';
import youtube from '../images/contact/youtube.png';
export default function Contact() {
  const [validated, setValidated] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("form submitted", event.target)
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);
  };
  return (
    <>
      <div className="contactContainer">
        <div className="contactHeader">
          <p>Contact Me</p>
        </div>
        <div className="contactForm">
          <Form noValidate validated={validated} onSubmit={handleSubmit}>
            <Col className="mb-3">
              <Form.Group className="inputGroups" controlId="validationCustom01">
                <Form.Label>First name</Form.Label>
                <Form.Control
                  required
                  type="text"
                  placeholder="First name"
                />
                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
              </Form.Group>
              <Form.Group className="inputGroups" controlId="validationCustom02">
                <Form.Label>Last name</Form.Label>
                <Form.Control
                  required
                  type="text"
                  placeholder="Last name"
                />
                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
              </Form.Group>
              <Form.Group className="inputGroups" controlId="exampleForm.ControlInput1">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="name@example.com" required/>
                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
              </Form.Group>
              <Form.Group  controlId="exampleForm.ControlTextarea1">
                <Form.Label>Message (optional)</Form.Label>
                <Form.Control as="textarea" rowSpan={5} colSpan={50} placeholder="Write me a message ... "/>
              </Form.Group>
              <Form.Group className="mb-3 contactReasonContainer">
                <p>Reason for Connection</p>
                <Form.Select required  as="select" type="select" >
                  <option value=""> Select a reason </option>
                  <option value="hiring">Hiring</option>
                  <option value="collaboration">Collaboration</option>
                  <option value="coaching">Coaching</option>
                  <option value="invite">Invite to event</option>
                  <option value="demo">Project Demo</option>
                  <option value="other">Other</option>
                </Form.Select>
                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>

              </Form.Group>
              </Col>
              <Button className="contactSubmitBtn glow-on-hover" type="submit">Contact Me</Button>
          </Form>
        </div>
        <div className="externalConnection">
          <div className="externalConnectionBtns">
            <img className="contactHeadshot" src={headshot} alt="Profile"/>
            <Button className="externalButtons" variant="outline-primary" href="https://www.linkedin.com/in/carlitos206/"><img className="connectionIcons linkedInIcon"src={linkin} alt="LinkedIn" /></Button>
            <Button className="externalButtons" variant="outline-primary" href="https://github.com/carlitos-206"><img className="connectionIcons linkedInIcon"src={github} alt="GitHub" /></Button>
            <Button id="youtubeBtn" className="externalButtons" variant="outline-primary" href="https://www.youtube.com/channel/UCfJtIgTcGEX_D0TLjFi-COQ"><img className="connectionIcons youtubeIcon"src={youtube} alt="YouTube" /></Button>
            {/* <Button className="externalButtons emailBtn" variant="outline-primary" href="mailto:carloscaceres041@gmail.com" >Send Email</Button> */}
          </div>
        </div>
      </div>
    </>
  )
}