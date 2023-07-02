import React ,{useState}from "react";
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import headshot from './images/ui_needs/headshot.jpg';
import linkin from './images/contact/linkedin.png';
import github from './images/contact/github.png';
import youtube from './images/contact/youtube.png';
export default function Contact() {
  const [validated, setValidated] = useState(false);

  const handleSubmit = (event) => {
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
          <p>Lets Connect !</p>
        </div>
        <div className="contactForm">
          <Form noValidate validated={validated} onSubmit={handleSubmit}>
            <Row className="mb-3">
              <Form.Group as={Col} md="4" controlId="validationCustom01">
                <Form.Label>First name</Form.Label>
                <Form.Control
                  required
                  type="text"
                  placeholder="First name"
                />
                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
              </Form.Group>
              <Form.Group as={Col} md="4" controlId="validationCustom02">
                <Form.Label>Last name</Form.Label>
                <Form.Control
                  required
                  type="text"
                  placeholder="Last name"
                />
                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
              </Form.Group>
              <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                  <Form.Label>Email address</Form.Label>
                  <Form.Control type="email" placeholder="name@example.com" required/>
              </Form.Group>
              <Form.Group className="mb-3 contactMessageBox" controlId="exampleForm.ControlTextarea1">
                  <Form.Control as="textarea" rowSpan={5} colSpan={50} required placeholder="Write me a message ... "/>
              </Form.Group>
              <Form.Group className="mb-3 contactReasonContainer">
                <p>Reason for Connection</p>
                <Form.Select aria-label="Default select example" required>
                  <option value="other" selected disabled hidden> Select a reason </option>
                  <option value="hiring">Hiring</option>
                  <option value="collaboration">Collaboration</option>
                  <option value="coaching">Coaching</option>
                  <option value="other">Other</option>
                </Form.Select>
              </Form.Group>
              </Row>
              <Button className="contactSubmitBtn" type="submit">Send Connection</Button>
          </Form>
        </div>
        <div className="externalConnection">
          <div className="externalConnectionBtns">
            <img className="contactHeadshot" src={headshot} alt="Profile"/>
            <Button className="externalButtons" variant="outline-primary" href="https://www.linkedin.com/in/carlitos206/"><img className="connectionIcons linkedInIcon"src={linkin} alt="LinkedIn" /></Button>
            <Button className="externalButtons" variant="outline-primary" href="https://github.com/carlitos-206"><img className="connectionIcons linkedInIcon"src={github} alt="GitHub" /></Button>
            <Button id="youtubeBtn" className="externalButtons" variant="outline-primary" href="https://www.youtube.com/channel/UCfJtIgTcGEX_D0TLjFi-COQ"><img className="connectionIcons youtubeIcon"src={youtube} alt="YouTube" /></Button>
            <Button className="externalButtons emailBtn" variant="outline-primary" href="mailto:carloscaceres041@gmail.com" >Send Email</Button>
          </div>
        </div>
      </div>
    </>
  )
}