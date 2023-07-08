import React, {useState, useEffect} from "react";
import apiGatewayLogo from "./images/tech/awsAPIGateway.png"
// import axios from "axios";
import { callPythonLambda } from "./openAi/fineChat";

export default function ChatContainer() {
  // const[chatInput, setChatInput] = useState(null);
  
  let btn = document.getElementById('send-btn')
  
  document.addEventListener('keypress', (event)=>{
    // event.keyCode or event.which  property will have the code of the pressed key
    let keyCode = event.keyCode ? event.keyCode : event.which;
    // 13 points the enter key
    if(keyCode === 13) {
      // call click function of the buttonn 
      btn.click();
    }
      
  })

  // useEffect(()=>{
  //     const data = {prompt: chatInput}
  //     axios.defaults.headers.post['Content-Type'] ='application/json;charset=utf-8';
  //     axios.defaults.headers.post['Access-Control-Allow-Origin'] = '*';
  //     axios.post('https://2jh3oz01gh.execute-api.us-west-2.amazonaws.com/default', data)
  //     .then((response)=>{
  //       console.log(response)
  // }, [chatInput])
  // });
  



  const aiSendOff = (e) => {
    e.preventDefault();
    let chatLog = document.getElementById('chat-log');
    let userInput = document.getElementById('user-input');
    let userMessage = userInput.value;
    let userMessageContainer = document.createElement('div');
    userMessageContainer.className = 'user-message-container';
    let userMessageText = document.createElement('p');
    userMessageText.className = 'user-message-text';
    userMessageText.innerHTML = userMessage;
    userMessageContainer.appendChild(userMessageText);
    chatLog.appendChild(userMessageContainer);
    userInput.value = '';
    callPythonLambda(userMessage);
  }
  return(
    <>
      <div className="chatContainer">
        <div className="chat-container">
          <div className="chat-log" id="chat-log"></div>
            <div className="input-container">
            <input type="text" id="user-input" 
            placeholder="Ask Chat GPT a question about me and/or my resume" />
            <button id="send-btn" onClick={(e)=>{aiSendOff(e)}}>Send</button>
          </div>
        </div>
        <div className="chatHeader">
          <p>Powered by <svg width="20px" height="40px" viewBox="140 140 520 520"><path d="m617.24 354a126.36 126.36 0 0 0 -10.86-103.79 127.8 127.8 0 0 0 -137.65-61.32 126.36 126.36 0 0 0 -95.31-42.49 127.81 127.81 0 0 0 -121.92 88.49 126.4 126.4 0 0 0 -84.5 61.3 127.82 127.82 0 0 0 15.72 149.86 126.36 126.36 0 0 0 10.86 103.79 127.81 127.81 0 0 0 137.65 61.32 126.36 126.36 0 0 0 95.31 42.49 127.81 127.81 0 0 0 121.96-88.54 126.4 126.4 0 0 0 84.5-61.3 127.82 127.82 0 0 0 -15.76-149.81zm-190.66 266.49a94.79 94.79 0 0 1 -60.85-22c.77-.42 2.12-1.16 3-1.7l101-58.34a16.42 16.42 0 0 0 8.3-14.37v-142.39l42.69 24.65a1.52 1.52 0 0 1 .83 1.17v117.92a95.18 95.18 0 0 1 -94.97 95.06zm-204.24-87.23a94.74 94.74 0 0 1 -11.34-63.7c.75.45 2.06 1.25 3 1.79l101 58.34a16.44 16.44 0 0 0 16.59 0l123.31-71.2v49.3a1.53 1.53 0 0 1 -.61 1.31l-102.1 58.95a95.16 95.16 0 0 1 -129.85-34.79zm-26.57-220.49a94.71 94.71 0 0 1 49.48-41.68c0 .87-.05 2.41-.05 3.48v116.68a16.41 16.41 0 0 0 8.29 14.36l123.31 71.19-42.69 24.65a1.53 1.53 0 0 1 -1.44.13l-102.11-59a95.16 95.16 0 0 1 -34.79-129.81zm350.74 81.62-123.31-71.2 42.69-24.64a1.53 1.53 0 0 1 1.44-.13l102.11 58.95a95.08 95.08 0 0 1 -14.69 171.55c0-.88 0-2.42 0-3.49v-116.68a16.4 16.4 0 0 0 -8.24-14.36zm42.49-63.95c-.75-.46-2.06-1.25-3-1.79l-101-58.34a16.46 16.46 0 0 0 -16.59 0l-123.31 71.2v-49.3a1.53 1.53 0 0 1 .61-1.31l102.1-58.9a95.07 95.07 0 0 1 141.19 98.44zm-267.11 87.87-42.7-24.65a1.52 1.52 0 0 1 -.83-1.17v-117.92a95.07 95.07 0 0 1 155.9-73c-.77.42-2.11 1.16-3 1.7l-101 58.34a16.41 16.41 0 0 0 -8.3 14.36zm23.19-50 54.92-31.72 54.92 31.7v63.42l-54.92 31.7-54.92-31.7z" fill="var(--gray-900)"></path></svg>OpenAI ChatGPT-4 with <img width="25" height="25" alt="Amazon Lambda architecture logo" src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/5c/Amazon_Lambda_architecture_logo.svg/256px-Amazon_Lambda_architecture_logo.svg.png"/>AWS Lambda and <img width='25' height='25' src={apiGatewayLogo} alt="API Gateway Logo" /> AWS API Gateway</p>      
        </div>  
      </div>
    </>
  )
}