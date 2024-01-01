import React, {useState} from "react";
import "./index-section-6.css";
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import { Button } from "@mui/material";

export default function LandingSection6() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [reason, setReason] = useState("");
  const [message, setMessage] = useState("");
  const [agreement, setAgreement] = useState(false);


  const handleSubmit = (e) => {
    e.preventDefault();
    // eslint-disable-next-line
    const emailregex = new RegExp('^[a-zA-Z0-9._:$!%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$');

    if (agreement) {
      if(emailregex.test(email) && name !== "") {
        if(reason === "") {
          setReason("other");
        }
        const formValues = {
          name: name,
          email: email,
          reason: reason,
          message: message,
          agreement: agreement,
          date: new Date().toLocaleString()
        }

        console.log("email sent");
        setName("");
        setEmail("");
        setReason("");
        setMessage("");
        setAgreement(false);
      }
      else {
        if(emailregex.test(email) === false) {
          alert("Please enter a valid email address");
        }
        if(name === "") {
          alert("Please enter your name");
        }

      }
    } 
  }




  return (
    <div id="section-6" className="section-6-contianer">
      <form onSubmit={handleSubmit}>
        <h1>Lets Connect</h1>
        <div className="form-group">
          <TextField
            required
            id="outlined-required"
            label="Enter your name"
            className="form-input"
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="form-group">
          <TextField
            required
            id="outlined-required"
            label="Enter your Email"
            className="form-input"
            onChange={(e) => setEmail(e.target.value)}
          />        
        </div>
        <div className="form-group">
          <label htmlFor="subject">Reason for contact: &nbsp;&nbsp;</label>
          <select onChange={(e)=>{setReason(e.target.value)}} className="form-select" type="text" id="subject" placeholder="Enter your subject" >
            <option value="other" selected>General Inquiry</option>
            <option value="job">Hiring Oppurtunity</option>
            <option value="collab">Project Collaboration</option>
            <option value="event">Event Invitation</option>
          </select>
        </div>
        <div className="form-group">
          <TextField
            id="outlined-required"
            label="write me a message"
            multiline
            rows={4}
            className="form-input"
            onChange={(e) => setMessage(e.target.value)}
          />         
        </div>
          <FormControlLabel required control={<Checkbox onChange={(e)=>{setAgreement(agreement => !agreement)}} />} label="I agree to be contacted via email." />
          <Button variant="outlined" type="submit">Submit</Button>      
        </form>
    </div>
  );
}